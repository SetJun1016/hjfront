import request from '@/utils/request'
// 登录
export function Login(data) {
    return request({
        url: `/apis/api/v1/shop_login?mobile=${data.mobile}&password=${data.password}`,
        method: 'get'
    })
}

// 忘记密码
export function Forgot(data) {
    return request({
        url: `/apis/api/v1/forgot`,
        method: 'post',
        data
    })
}

// 获取短信验证码
export function GetCode(data) {
    return request({
        url: `/apis/api/v1/sms`,
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