<template>
    <div class="frozen">
        <van-nav-bar title="余额账户" left-text="返回" fixed placeholder class="mb10" left-arrow @click-left="$goBack()" />
        <div class="frozen-box" v-for="(item, index) in list" :key="index">
            <p class="dfb">
                <span v-text='item.desc'></span>
                <span v-text="item.is_cash == 1 ? '-' + item.score.toFixed(2) : '+' + item.score.toFixed(2)"></span>
            </p>
            <p v-text="item.status"></p>
        </div>
    </div>
</template>

<script>
import { BalanceRecord } from '@/api/apiWallet'
export default {
    data() {
        return {
            list:[
                {
                    score:200,
                    cash_outed:7,
                    created_at:"2020-09-16 07:33:24",
                    is_cash:1,
                    status:"提现中",
                    bank_name:"东台营业部",
                    valid_count:"",
                    occur_date:"",
                    detail:"",
                    desc:"提现至支付宝"
                },
                {
                    score:25,
                    cash_outed:5,
                    created_at:"2020-09-14 16:50:54",
                    is_cash:0,
                    status:"入账成功",
                    bank_name:"东台营业部",
                    valid_count:1,
                    occur_date:"2020-09-13 00:00:00",
                    detail:"支付宝拉新",
                    desc:"支付宝拉新入账"
                },
                {
                    score:200,
                    cash_outed:7,
                    created_at:"2020-09-16 07:33:24",
                    is_cash:1,status:"提现中",
                    bank_name:"东台营业部",
                    valid_count:"",
                    occur_date:"",
                    detail:"",
                    desc:"提现至支付宝"
                },
                {
                    score:25,
                    cash_outed:5,
                    created_at:"2020-09-14 16:50:54",
                    is_cash:0,
                    status:"入账成功",
                    bank_name:"东台营业部",
                    valid_count:1,
                    occur_date:"2020-09-13 00:00:00",
                    detail:"支付宝拉新",
                    desc:"支付宝拉新入账"
                },
                {
                    score:200,
                    cash_outed:7,
                    created_at:"2020-09-16 07:33:24",
                    is_cash:1,status:"提现中",
                    bank_name:"东台营业部",
                    valid_count:"",
                    occur_date:"",
                    detail:"",
                    desc:"提现至支付宝"
                },
                {
                    score:25,
                    cash_outed:5,
                    created_at:"2020-09-14 16:50:54",
                    is_cash:0,
                    status:"入账成功",
                    bank_name:"东台营业部",
                    valid_count:1,
                    occur_date:"2020-09-13 00:00:00",
                    detail:"支付宝拉新",
                    desc:"支付宝拉新入账"
                }
            ]
        }
    }
}
</script>

<style lang='scss' scoped>
    .frozen-box {
        height: 2rem;
        padding: .4rem .3rem;
        background: #fff;
        margin-top: .3rem;
        
        P {
            line-height: .4rem;
        }

        p:first-child {
            font-size: .38rem;
            font-weight: 600;
            color: #000;
        }
    }
</style>