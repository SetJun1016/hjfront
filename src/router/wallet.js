// 我的订单
export default [
    {
        path: '/walletCenter',
        name: 'walletCenter',
        // component: HelloWorld
        component: resolve => require(['@/pages/wallet/walletCenter'], resolve),
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/bankCardBind',
        name: 'bankCardBind',
        // component: HelloWorld
        component: resolve => require(['@/pages/wallet/bankCardBind'], resolve),
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/alipayBind',
        name: 'alipayBind',
        // component: HelloWorld
        component: resolve => require(['@/pages/wallet/alipayBind'], resolve),
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/frozen',
        name: 'frozen',
        component: resolve => require(['@/pages/wallet/frozen'], resolve),
        meta: {
            requireAuth: true
        }
    }
]