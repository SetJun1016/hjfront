import request from '@/utils/request'

// 获取用户推广人基本信息
// user_info
export function GetUserInfo(data) {
    return request({
        url: 'user_info',
        method: 'post',
        data
    })
}

export function EditUserPassword(data) {
    return request({
        url: 'edit_user_password',
        method: 'post',
        data
    })
}

export function EditPhone(data) {
    return request({
        url: 'edit_phone',
        method: 'post',
        data
    })
}

export function AccountInfo(data) {
    return request({
        url: 'account_info',
        method: 'post',
        data
    })
}

// bind_account  添加支付宝账号
export function BindAccount(data) {
    return request({
        url: 'bind_account',
        method: 'post',
        data
    })
}

// 修改支付宝账号
export function EditAccount(data) {
    return request({
        url: 'edit_account',
        method: 'post',
        data
    })
}