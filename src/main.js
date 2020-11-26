// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import './styles/index.css'
import { store } from './store/store.js'
import { goBack } from '@/utils/goBack.js'
import { dev } from '@/utils/dev.js'
import { IsValidToken } from '@/api/apiLogin'
import { Field, Form, Button, Toast, Icon, NavBar, Tab, Tabs, Dialog, DropdownMenu, DropdownItem } from 'vant'
import { List, ActionSheet, Cell, CellGroup, Empty, Step, Steps, Grid, GridItem, Picker, Popup, Collapse, CollapseItem } from 'vant'
require('../mock/mock.js')
//引用md5插件
import md5 from 'js-md5'
Vue.use(Field);
Vue.use(Cell);
Vue.use(Step);
Vue.use(Steps);
Vue.use(CellGroup);
Vue.use(Form);
Vue.use(Button);
Vue.use(Icon);
Vue.use(NavBar);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Empty);
Vue.use(Dialog);
Vue.use(List);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(ActionSheet);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Picker);
Vue.use(Popup);
Vue.use(Collapse);
Vue.use(CollapseItem);

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$toast = Toast
Vue.prototype.$Dialog = Dialog
Vue.prototype.$goBack = goBack
Vue.prototype.$dev = dev
//将md5绑定到全局
Vue.prototype.$md5 = md5
// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>',
    mounted() { setRem() }
})

//  rem适配
function setRem() {
    var whdef = 100 / 750 // 表示750的设计图,使用100PX的默认值
    var bodyWidth = document.body.clientWidth // 当前窗口的宽度
    var rem = bodyWidth * whdef // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
    document.getElementsByTagName('html')[0].style.fontSize = rem + 'px'
}

window.addEventListener('load', setRem)
window.addEventListener('resize', setRem)