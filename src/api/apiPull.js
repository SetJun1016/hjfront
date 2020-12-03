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