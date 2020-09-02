import request from '@/utils/request'
// 个人中心
// 重置密码
export function ResetPassword(data) {
    return request({
        url: `/apis/api/v1/reset_password`,
        method: 'post',
        data
    })
}
// 修改绑定人手机号
export function UpdatePhone(data) {
    return request({
        url: `/apis/api/v1/update_phone`,
        method: 'post',
        data
    })
}

export function mockApi(data) {
    return request({
        url: `/apis/api/v1/list`,
        method: 'post',
        data
    })
}