import Vue from 'vue'
import Router from 'vue-router'
import personal from './personal'
import login from './login'
import home from './home'
import order from './order'

Vue.use(Router)

export default new Router({
    routes: [
        ...personal, // 个人中心
        ...login, // 登录
        ...home, // 主页
        ...order // 我的订单
    ]
})