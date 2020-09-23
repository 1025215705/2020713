
const tokens = {
  admin: {
    token: 'admin-token'
  }
}
const users = {
  'admin-token': {
    mail: "",
    nickName: "超级管理员",
    id: 1,
    userName: "admin"
  }
}
module.exports = [
  // user login
  {
    url: '/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const token = tokens[username]
      // mock error
      if (!token) {
        return {
          code: 60204,
          message: '账号或者密码不正确'
        }
      }
      return {
        code: 200,
        data: token,
        message: "调用成功"
      }
    }
  },
  // get user info
  {
    url: '/getUserInfo',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]
      // mock error
      if (!info) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.'
        }
      }
      return {
        code: 20000,
        data: info
      }
    }
  },
]
