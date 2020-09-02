<template>
    <div class="orderView">
        <van-nav-bar title="订单详情" left-text="返回" left-arrow @click-left="$goBack()" />
        <div class="order mt10">
            <div class="order-title">
                <span>订单信息</span>
            </div>
            <p>商品名称: 天地精华矿泉水</p>
            <p>商品数量: 30箱</p>
            <p>商品单价: 20元/箱</p>
            <p>订单状态: 未结单</p>
            <p>订单编号: 20200901160612341231</p>
            <p>物流单号: 暂无物流单号 / 未填写</p>
        </div>
        <div class="order mt10">
            <div class="order-title">
                <span>收货人信息</span>
            </div>
            <p>收货人姓名：何俊</p>
            <p>收货人手机号：18326174573</p>
            <p>收货人地址：安徽省合肥市包河区广电文化创业产业园产业基地2栋2301</p>
        </div>
        <div class="orderBottom">
            <van-button class="button" type="warning">查看物流</van-button>
            <van-button class="button" type="primary" @click="cofirm">立即接单</van-button>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            cofirm() {
                this.$Dialog.confirm({
                        title: '接单确认',
                        message: '确认立即接单？接单后请尽快给顾客发货哦，别让客户等太久啦',
                    })
                    .then(() => {
                        // on confirm
                        this.$toast.success('已成功接单')
                    })
                    .catch(() => {
                        // on cancel
                    });
            }
        }
    }
</script>

<style lang='scss' scoped>
    .order {
        // height: 3rem;
        color: #000;
        background: #fff;
        padding: .3rem;

        &-title {
            font-size: .32rem;
            margin-bottom: .2rem;
        }

        p {
            line-height: .6rem;
        }
    }

    .orderBottom {
        position: fixed;
        width: 90%;
        bottom: 0;
        height: 1.4rem;
        line-height: 1.4rem;
        background: #fff;
        padding: 0 5%;
        text-align: right;
    }

    .button {
        height: .6rem;
        border-radius: 20px;
        margin-right: .1rem;
    }
</style>