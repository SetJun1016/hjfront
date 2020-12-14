import axios from 'axios'
import Vue from 'vue'
import {
    Dialog,
    Toast
} from 'vant'
import router from '../router'
Vue.prototype.$toast = Toast
Vue.use(Dialog)
let vm = new Vue({
    router
})
// import { Toast } from 'mand-mobile'

// const env = process.env.NODE_ENV

// const apiTestConfig = 'http://119.3.151.48'

// const apiProdConfig = 'http://app.haimiansiwei.com'

// let API_BASE_URL = ''

// if (env == 'development') {
//     API_BASE_URL = apiTestConfig;
// } else if (env == 'production') {
//     API_BASE_URL = apiProdConfig;
// }


const debug = process.env.NODE_ENV !== 'production'
// 创建一个axios实例
const axiosService = axios.create({
    baseURL: debug ? 'apis/api' : 'http://tui.wudaojz.com/api', // url = base url + request url
    // baseURL: 'api/', // url = base url + request url
    timeout: 20000 // 设置超时时间为5s
});

// request拦截器 ==> 对请求参数进行处理
axiosService.interceptors.request.use(
    config => {
        vm.$toast.loading({
            message: '加载中...',
            forbidClick: true,
            duration: 0
        })
        // 可以在发送请求之前做些事情
        // 比如请求参数的处理、在headers中携带token等等
        return config;
    }, error => {
        // 处理请求错误
        console.log(error); // for debug
        Promise.reject(error);
    }
);

// 响应拦截器
axiosService.interceptors.response.use(
    response => {
        if (response.status === 200) {
            vm.$toast.clear()
            console.log(response.data.code)
            if(response.data.code == -1) {
                vm.$toast.fail(response.data.msg)
            }
            if (response.data.code == 400) {
                let message = '您暂未登录账号或账号登录已过期，请重新登录'
                // vm.$router.go(-1)
                Dialog.alert({
                    message: message,
                    theme: 'round-button',
                }).then(() => {
                    // on close
                    vm.$router.push('/login')
                    // console.log('1121')
                });
            } else if(response.data.code == 403){
                let message = '您当前登录的角色为非推广人端，请重新登录'
                Dialog.alert({
                    message: message,
                    theme: 'round-button',
                }).then(() => {
                    // on close
                    vm.$router.push('/login')
                });
            }
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    error => {
        let text = ''
        console.log(error.response.status)
        switch (error.response.status) {
            case 404:
                text = '系统开小差了，请稍后再试'
                // console.log('11111')
                break;
            case 500:
                text = '系统繁忙，请联系客服'
                console.log('22222')
                break;
            default:
                text = '未知的错误，请联系客服'
                console.log('33333')
                break;
        }
        vm.$toast(text)
    }
)

// 将写好的axios实例暴露出去
export default axiosService;
// 微服务地址
// axios.defaults.baseURL = 'http://119.3.151.48'
// axios.defaults.baseURL = 'http://app.haimiansiwei.com'