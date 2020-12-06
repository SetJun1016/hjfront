<template>
    <div class="wallet">
        <van-nav-bar title="我的钱包" left-text="返回" left-arrow @click-left="$goBack()" />
        <div class="wallet-title">
            <div class="walletA mb5">当前余额（元）</div>
            <div class="walletA walletB mb15">{{ moneyShow ? balance : '****' }}</div>
            <div class="timeDiv dfl">
                <div class="time mr5">2020-09-14 17:02:03</div>
                <img @click="imgRefresh" class="mr5" :class="refreshShow ? 'imgAnimation' : ''"
                    src="../../../static/img/refresh.png" alt="">
                <img @click="moneyShowClick"
                    :src="moneyShow ? '../../../static/img/visble.png' : '../../../static/img/unvisble.png'" alt="">
            </div>
        </div>
        <van-grid class="mb20 oneGrid" :column-num="2" direction="horizontal">
            <van-grid-item icon="../../../static/img/viewBill.png" @click="$router.push('/frozen')" text="查看明细" />
            <van-grid-item icon="../../../static/img/shou.png" @click="$router.push('Withdrawal')" text="提现" />
        </van-grid>
        <div class="bind">
            <div class="bind-title">
                个人服务类
            </div>
            <van-grid :column-num="3">
                <van-grid-item icon="../../../static/img/alipay-info.png" to='/alipayBind' text="支付宝绑定" />
                <van-grid-item icon="../../../static/img/card.png" @click="$dev()" text="银行卡绑定" />
            </van-grid>
        </div>
    </div>
</template>

<script>
    import {
        GetUserInfo
    } from '@/api/apiMy'
    export default {
        data() {
            return {
                refreshShow: false,
                moneyShow: true,
                balance: 0.00
            }
        },
        created() {
            this.getUserInfo()
        },
        methods: {
            // 刷新
            imgRefresh() {
                this.getUserInfo()
                this.refreshShow = true
                setTimeout(() => {
                    this.refreshShow = false
                }, 2000)
            },
            // 是否可见当前余额   存本地缓存
            moneyShowClick() {
                this.moneyShow = !this.moneyShow
                if (this.moneyShow == true) {
                    localStorage.setItem('moneyShow', 1)
                } else {
                    localStorage.setItem('moneyShow', 0)
                }
            },
            // 获取用户信息
            getUserInfo() {
                GetUserInfo({
                    token: localStorage.getItem('token')
                }).then(res => {
                    console.log(res)
                    this.balance = res.data.data.balance
                })
            }
        }
    }
</script>

<style lang='scss' scoped>
    /deep/ .van-nav-bar__left {
        color: #fff !important;
    }

    /deep/ .van-nav-bar__text,
    /deep/ .van-nav-bar .van-icon,
    /deep/ .van-nav-bar__title {
        color: #fff;
    }

    /deep/ .van-nav-bar {
        background: #FF5E5E !important;
    }

    .wallet {
        color: #fff;

        &-title {
            padding: .6rem .3rem .3rem;
            background: linear-gradient(to bottom, #FF5E5E, #FF1B1B) !important;
        }
    }

    .walletA {
        font-size: .4rem;
        color: #fff;
    }

    .walletB {
        font-size: .7rem;
    }

    @keyframes go {
        0% {
            transform: rotateZ(0);
        }

        100% {
            transform: rotateZ(360deg);
        }
    }

    .timeDiv {
        img {
            width: .3rem;
            height: .3rem;
        }

        .imgAnimation {
            animation-name: go;
            animation-duration: 1s;
            animation-iteration-count: infinite
        }
    }

    .oneGrid {
        /deep/ .van-grid-item__content--center {
            background: #FF1B1B !important;
            padding: .25rem;
            color: #fff;
        }
    }

    /deep/ .oneGrid .van-grid-item__text {
        color: #fff;
        font-size: .28rem;
    }

    .bind {
        margin: 0 .2rem;
        height: 4rem;
        background: #fff;
        border-radius: 8px;

        &-title {
            height: 1rem;
            line-height: 1rem;
            color: #aaa;
            padding: 0 .3rem;
            // border-bottom: .01rem solid #ddd;
        }

        /deep/ .van-grid-item__content--center {
            padding: .5rem;
            color: #fff;
        }
    }
</style>