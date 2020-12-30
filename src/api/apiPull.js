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
// 获取京东白天条推广码
export function GetJdWhiteQr(data) {
    return request({
        url: 'jdWhiteOR',
        method: 'post',
        data
    })
}
// 获取云闪付推广码
export function GetYunCode(data) {
    return request({
        url: 'bankUnionQR',
        method: 'post',
        data
    })
}

// 获取苏宁推广码
export function GetSnCode(data) {
    return request({
        url: 'suNingQR',
        method: 'post',
        data
    })
}

// 激活苏宁推广码
export function ActiveSnCode(data) {
    return request({
        url: 'snActive',
        method: 'post',
        data
    })
}

// 激活云闪付推广码
export function ActiveYunCode(data) {
    return request({
        url: 'bankUnionActive',
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

// 激活京东推白条广码
export function ActiveJdWhite(data) {
    return request({
        url: 'jdWhiteActive',
        method: 'post',
        data
    })
}

// 获取京东小金库推广码
export function GetJdXjk(data) {
    return request({
        url: 'jdVaultQR',
        method: 'post',
        data
    })
}

// 激活京东小金库
export function ActiveJdXjk(data) {
    return request({
        url: 'jdVaultActive',
        method: 'post',
        data
    })
}

// 获取快手极速版拉新推广码
export function GetKs(data) {
    return request({
        url: 'kuaiShouQR',
        method: 'post',
        data
    })
}

// 激活快手极速版推广码
export function ActiveKs(data) {
    return request({
        url: 'kuaiShouActive',
        method: 'post',
        data
    })
}

// 获取招商银行掌上生活
export function GetZssh(data) {
    return request({
        url: 'chinaMerchantsBankQR',
        method: 'post',
        data
    })
}

// 激活招商银行掌上生活推广码
export function ActivechinaMerchants(data) {
    return request({
        url: 'chinaMerchantsBankActive',
        method: 'post',
        data
    })
}