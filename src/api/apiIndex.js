import request from '@/utils/request'

// 获取首页
export function GetIndex(data) {
    return request({
        url: 'index',
        method: 'post',
        data
    })
}