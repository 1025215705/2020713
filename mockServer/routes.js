const menus = [
    {
        "icon": "phone",
        "id": 1005,
        "index": "#dev",
        "subs": [
            {
                "icon": "build",
                "id": 1006,
                "index": "device",
                "title": "设备管理"
            },
            {
                "icon": "table",
                "id": 1007,
                "index": "seat",
                "title": "用户坐席"
            },
            {
                "icon": "online",
                "id": 1008,
                "index": "call",
                "title": "呼叫设备"
            },
            {
                "icon": "dict",
                "id": 1009,
                "index": "record",
                "title": "通话记录"
            }
        ],
        "title": "设备"
    },
    {
        "icon": "system",
        "id": 1000,
        "index": "#sys",
        "subs": [
            {
                "icon": "server",
                "id": 2022,
                "index": "/server",
                "title": "服务器配置"
            },
            {
                "icon": "peoples",
                "id": 1001,
                "index": "role",
                "title": "角色管理"
            },
            {
                "icon": "tab",
                "id": 1002,
                "index": "menu",
                "title": "菜单管理"
            },
            {
                "icon": "people",
                "id": 1003,
                "index": "user",
                "title": "用户管理"
            },
            {
                "icon": "tree-table",
                "id": 1004,
                "index": "area",
                "title": "区域管理"
            },
            {
                "icon": "bug",
                "id": 2019,
                "index": "/config",
                "title": "test"
            }
        ],
        "title": "系统"
    }
]

module.exports = [
    {
        url: '/getRouters',
        type: 'post',
        response: config => {
            const data = menus;
            // mock error
            if (!data) {
                return {
                    code: 60204,
                    message: '数据不存在'
                }
            }

            return {
                code: 200,
                data: data,
                message: "调用成功"
            }

        }
    }
]
