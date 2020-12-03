// 主页
export default [
    {
        path: '/',
        name: 'home',
        // component: HelloWorld
        component: resolve => require(['@/pages/home/home'], resolve),
        meta: {
            requireAuth: false
        },
    }
]