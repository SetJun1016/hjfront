import Vue from 'vue'
import Router from 'vue-router'
import personal from './personal'
import login from './login'
import home from './home'
import wallet from './wallet'
import pull from './pull'

Vue.use(Router)

export default new Router({
    routes: [
        ...personal, // 个人中心
        ...login, // 登录
        ...home, // 主页
        ...wallet, // 我的钱包
        ...pull
    ]
})