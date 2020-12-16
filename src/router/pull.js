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
    },
    {
        path: '/jdbt',
        name: 'jdbt',
        component: resolve => require(['@/pages/pull/jdbt'], resolve),
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/yun',
        name: 'yun',
        component: resolve => require(['@/pages/pull/cloud'], resolve),
        meta: {
            requireAuth: true
        }
    },
]