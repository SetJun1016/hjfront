export default [
    {
        path: '/list',
        name: 'list',
        component: resolve => require(['@/pages/list/list'], resolve),
        meta: {
            requireAuth: true
        }
    }
]