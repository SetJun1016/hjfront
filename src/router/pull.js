// 拉新板块
export default [
    {
        path: '/alipay',
        name: 'alipay',
        component: resolve => require(['@/pages/pull/alipay'], resolve),
        meta: {
            requireAuth: true
        }
    }
]