import request from '@/utils/request'
// 供应链订单列表
export function GetSupplyOrderList(data) {
    return request({
        url: `/apis/api/v1/supply_order_list?token=${localStorage.getItem('token')}&status=${data.status}&page=${data.page}`,
        method: 'get'
    })
}

// 供应链订单详情
export function GetSupplyOrderDetail(id) {
    return request({
        url: `/apis/api/v1/supply_order_detail?token=${localStorage.getItem('token')}&id=${id}`,
        method: 'get'
    })
}

// 接单
export function GetShopOperateOrder(data) {
    return request({
        url: `/apis/api/v1/shop_operate_order`,
        method: 'post',
        data
    }) 
}

// 查看物流
export function GetDelivery(data) {
    return request({
        url: `/apis/api/v1/score_delivery?no=${data.no}&token=${localStorage.getItem('token')}`,
        method: 'get'
    })
}

// 查看各个状态下的订单数
export function GetSupplyOrderCount(data) {
    return request({
        url: `/apis/api/v1/supply_order_count?token=${localStorage.getItem('token')}`,
        method: 'get'
    })
}