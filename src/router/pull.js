// 拉新板块
export default [
    {
        path: '/alipay',
        name: 'alipay',
        component: resolve => require(['@/pages/pull/alipay'], resolve),
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/mt',
        name: 'mt',
        component: resolve => require(['@/pages/pull/mt'], resolve),
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/jd',
        name: 'jd',
        component: resolve => require(['@/pages/pull/jd'], resolve),
        meta: {
            requireAuth: true
        }
    }
]