// 登录以及无需验证token
export default [
    {
        path: '/login',
        name: 'login',
        // component: HelloWorld
        component: resolve => require(['@/pages/login/login'], resolve),
        meta: {
            requireAuth: false
        }
    },
    {
        path: '/forgetPassword',
        name: 'forgetPassword',
        // component: HelloWorld
        component: resolve => require(['@/pages/login/forgetPassword'], resolve),
        meta: {
            requireAuth: false
        }
    },
    {
        path: '/register',
        name: 'register',
        // component: HelloWorld
        component: resolve => require(['@/pages/login/register'], resolve),
        meta: {
            requireAuth: false
        }
    },
    {
        path: '/bankRegister',
        name: 'bankRegister',
        // component: HelloWorld
        component: resolve => require(['@/pages/login/bankRegister'], resolve),
        meta: {
            requireAuth: false
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