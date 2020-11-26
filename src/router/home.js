// 主页
export default [
    {
        path: '/',
        name: 'home',
        // component: HelloWorld
        component: resolve => require(['@/pages/login/login'], resolve),
        meta: {
            requireAuth: true
        },
    }
]