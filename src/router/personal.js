// 个人中心
export default [
    {
        path: '/password',
        name: 'password',
        // component: HelloWorld
        component: resolve => require(['@/pages/personal/password'], resolve),
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/phone',
        name: 'phone',
        // component: HelloWorld
        component: resolve => require(['@/pages/personal/phone'], resolve),
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/problem',
        name: 'problem',
        // component: HelloWorld
        component: resolve => require(['@/pages/personal/problem'], resolve),
        meta: {
            requireAuth: true
        }
    }
]