// 我的订单
export default [
    {
        path: '/orderList',
        name: 'orderList',
        // component: HelloWorld
        component: resolve => require(['@/pages/home/orderList'], resolve),
        meta: {
            requireAuth: true
        },
    },
    {
        path: '/orderView',
        name: 'orderView',
        // component: HelloWorld
        component: resolve => require(['@/pages/home/orderView'], resolve),
        meta: {
            requireAuth: true
        },
    },
    {
        path: '/delivery',
        name: 'delivery',
        // component: HelloWorld
        component: resolve => require(['@/pages/home/delivery'], resolve),
        meta: {
            requireAuth: true
        },
    },
]