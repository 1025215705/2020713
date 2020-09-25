const chokidar = require('chokidar') //监听文件变化的插件
const bodyParser = require('body-parser') //Express中间件body-parser body-parser是一个HTTP请求体解析的中间件，
//使用这个模块可以解析JSON、Raw、文本、URL-encoded格式的请求体，
const chalk = require('chalk') //node 终端样式库
const path = require('path')
const Mock = require('mockjs')
const mockDir = path.join(process.cwd(), 'mock')
//当前Node.js进程执行时的工作目录
//path.join()方法是将多个参数字符串合并成一个路径字符串
console.log("mock-server");
function registerRoutes (app) {
    let mockLastIndex
    const { mocks } = require('./index.js')
    const mocksForServer = mocks.map(route => {
        return responseFake(route.url, route.type, route.response)
    })
    console.log("mocksForServer", mocksForServer);
    for (const mock of mocksForServer) {
        app[mock.type](mock.url, mock.response)
        mockLastIndex = app._router.stack.length
    }
    const mockRoutesLength = Object.keys(mocksForServer).length
    return {
        mockRoutesLength: mockRoutesLength,
        mockStartIndex: mockLastIndex - mockRoutesLength
    }
}

function unregisterRoutes () {
    Object.keys(require.cache).forEach(i => {
        if (i.includes(mockDir)) {
            delete require.cache[require.resolve(i)]
        }
    })
}

// for mock server
const responseFake = (url, type, respond) => {
    console.log(url);
    return {
        url: 'http://127.0.0.1:8080' + url,
        type: type || 'get',
        response (req, res) {
            console.log('request invoke:' + req.path)
            res.json(Mock.mock(respond instanceof Function ? respond(req, res) : respond))
        }
    }
}

module.exports = app => {
    // parse app.body
    // https://expressjs.com/en/4x/api.html#req.body
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({
        extended: true
    }))
    const mockRoutes = registerRoutes(app);
    var mockRoutesLength = mockRoutes.mockRoutesLength;
    var mockStartIndex = mockRoutes.mockStartIndex;
    console.log("mockRoutes", mockRoutes);
    console.log("mockRoutesLength", mockRoutesLength);
    console.log("mockStartIndex", mockStartIndex);
    // watch files, hot reload mock server
    chokidar.watch(mockDir, {
        ignored: /mock-server/,
        ignoreInitial: true
    }).on('all', (event, path) => {
        if (event === 'change' || event === 'add') {
            try {
                // remove mock routes stack
                app._router.stack.splice(mockStartIndex, mockRoutesLength)
                // clear routes cache
                unregisterRoutes()
                const mockRoutes = registerRoutes(app)
                mockRoutesLength = mockRoutes.mockRoutesLength
                mockStartIndex = mockRoutes.mockStartIndex
                console.log(chalk.magentaBright(`\n > Mock Server hot reload success! changed  ${path}`))
            } catch (error) {
                console.log(chalk.redBright(error))
            }
        }
    })
}
