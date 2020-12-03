import request from '@/utils/request'
// 登录
export function Login(data) {
    return request({
        url: 'login',
        method: 'post',
        data
    })
}

// 注册
export function Register(data) {
    return request({
        url: 'register',
        method: 'post',
        data
    })
}

// 忘记密码
export function Forgot(data) {
    return request({
        url: 'find_password',
        method: 'post',
        data
    })
}

// 获取短信验证码
export function GetCode(data) {
    return request({
        url: 'send_msg',
        method: 'post',
        data
    })
}

// 验证登录
export function IsValidToken() {
    return request({
        url: `/apis/api/v1/is_valid_token?token=${localStorage.getItem('token')}`,
        method: 'get'
    })
}