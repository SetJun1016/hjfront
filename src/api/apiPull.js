import request from '@/utils/request'

// 获取支付宝推广码
export function GetAlipayCode(data) {
    return request({
        url: 'alipay_index',
        method: 'post',
        data
    })
}

// 激活支付宝推广码
export function ActiveAlipayCode(data) {
    return request({
        url: 'alipayCodeQrActive',
        method: 'post',
        data
    })
}

// 获取美团推广码
export function GetMtCode(data) {
    return request({
        url: 'meTuanQR',
        method: 'post',
        data
    })
}

// 激活美团推广码
export function ActiveMtCode(data) {
    return request({
        url: 'mtActive',
        method: 'post',
        data
    })
}

// 获取京东推广码
export function GetJdCode(data) {
    return request({
        url: 'jdOR',
        method: 'post',
        data
    })
}

// 激活京东推广码
export function ActiveJdCode(data) {
    return request({
        url: 'jdStoreActive',
        method: 'post',
        data
    })
}