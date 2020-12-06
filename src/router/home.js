// 主页
export default [
    {
        path: '/',
        name: 'home',
        // component: HelloWorld
        component: resolve => require(['@/pages/home/home'], resolve),
        meta: {
            requireAuth: false,
            keepAlive: true
        },
    },
    {
        path: '/listPage',
        name: 'listPage',
        // component: HelloWorld
        component: resolve => require(['@/pages/home/listPage'], resolve),
        meta: {
            requireAuth: true,
            keepAlive: true
        },
    },
    {
        path: '/my',
        name: 'my',
        // component: HelloWorld
        component: resolve => require(['@/pages/home/my'], resolve),
        meta: {
            requireAuth: true,
            keepAlive: true
        },
    }
]