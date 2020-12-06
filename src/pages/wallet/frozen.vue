<template>
    <div class="frozen">
        <van-nav-bar title="余额账户" left-text="返回" fixed placeholder class="mb10" left-arrow @click-left="$goBack()" />
        <div class="frozen-box" v-for="(item, index) in list" :key="index">
            <p class="dfb">
                <span v-text='item.desc'></span>
                <span v-text="item.is_cash == 1 ? '-' + item.score.toFixed(2) : '+' + item.score.toFixed(2)"></span>
            </p>
            <p v-text="item.status"></p>
            <p v-text="(item.is_cash == 0 ? '入账时间：' : '出账时间：') + (item.created_at || '无')"></p>
            <p v-show="item.bank_name" v-text="'所属网点：' + item.bank_name"></p>
            <p v-show="item.valid_count" v-text="'推广有效户：' + item.valid_count"></p>
            <p v-show="item.detail" v-text="'备注：' + item.detail"></p>
            <p v-show="item.occur_date" v-text="'推广时间：' + item.occur_date"></p>
        </div>
    </div>
</template>

<script>
    import {
        GetBalanceRecordList
    } from '@/api/apiWallet'
    export default {
        data() {
            return {
                list: [],
                page: 1
            }
        },
        created() {
            GetBalanceRecordList({
                token: localStorage.getItem('token'),
                page: this.page
            }).then(res => {
                console.log(res)
                this.list = res.data.data.data
            })
        }
    }
</script>

<style lang='scss' scoped>
    .frozen-box {
        height: 2rem;
        padding: .2rem .3rem;
        background: #fff;
        margin-top: .3rem;
        border-bottom: .015rem solid #efefef;

        P {
            line-height: .6rem;
        }

        p:first-child {
            font-size: .38rem;
            font-weight: 600;
            color: #000;
        }
    }
</style>