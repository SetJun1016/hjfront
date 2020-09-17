import request from '@/utils/request'
// 实名验证
export function FormatVerifyId(data) {
    return request({
        url: `apis/api/v1/verify_id`,
        method: 'post',
        data
    })
}

// 绑定支付宝账号
export function UpdateAlipayAccount(data) {
    return request({
        url: `apis/api/v1/update_alipay_account`,
        method: 'post',
        data
    })
}

// 添加银行卡号
export function AddBankCard(data) {
    return request({
        url: `apis/api/v1/add_bank_card`,
        method: 'post',
        data
    })
}

// 账户明细查询 （可用账户 0 / 冻结账户 1）
export function BalanceRecord(token, page, date) {
    return request({
        url: `apis/api/v1/balance_record?token=${token}&page=${page}&date=${date}`,
        method: 'get'
    })
}