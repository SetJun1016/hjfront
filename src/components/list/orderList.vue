<template>
    <div class="ord">
        <div class="list">
            <p>商品名称：天地精华矿泉水</p>
            <p>商品数量：30箱</p>
            <p>订单编号：20200901152934121213</p>
            <p class='pcolor' v-show="active == 1">建议先查看一下订单详情再确定接单哦</p>
            <p class='pcolor' v-show="active == 2">接单后请尽快发货，别让顾客等太久哦</p>
            <p class='pcolor' v-show="active == 3">线下配送至客户手中，您可以点击确认送达按钮</p>
            <p class='pcolor' v-show="active == 4">您已完成本次接单，并成功完成配送</p>
            <div class="buttonX">
                <van-button class="button" type="info" @click="$router.push('/orderView')">查看详情</van-button>
                <van-button class="button" v-show="active == 3 || active == 4" type="warning">查看物流</van-button>
                <van-button class="button" v-show="active == 1" @click="cofirm" type="primary">立即接单</van-button>
                <van-button class="button" v-show="active == 2" @click="cofirmDeliver" type="primary">确认发货</van-button>
                <van-button class="button" v-show="active == 3" @click="cofirmSuccess" type="primary">确认送达</van-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            active: {
                type: Number,
                default: 1
            }
        },
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
            },
            cofirmDeliver() {
                this.$Dialog.confirm({
                        title: '发货确认',
                        message: '确认发货？需填写好订单号或配送方式，点击确认按钮',
                    })
                    .then(() => {
                        // on confirm
                        this.$toast.success('已成功发货')
                    })
                    .catch(() => {
                        // on cancel
                        this.$toast.fail('请填写好订单号')
                    });
            },
            cofirmSuccess() {
                this.$Dialog.confirm({
                        title: '送达确认',
                        message: '请确保货物已送至客户手中，如已送达，可点击确认按钮进行确认',
                    })
                    .then(() => {
                        // on confirm
                        this.$toast.success('已成功发货')
                    })
                    .catch(() => {
                        
                    });
            }
        }
    }
</script>

<style lang='scss' scoped>
    .ord {
        padding: .3rem;

        .list {
            // position: relative;
            display: flex;
            // align-items: center;
            flex-wrap: wrap;
            flex-direction: column;
            justify-content: space-between;
            height: 2.6rem;
            color: #000;
            font-size: .3rem;
            background: #fff;
            border-radius: 8px;
            padding: .5rem .3rem .5rem;

            .buttonX {
                text-align: right;
            }

            .button {
                height: .6rem;
                border-radius: 20px;
                margin-right: .1rem;
            }

            .pcolor {
                color: #E1846C;
                font-size: .24rem;
            }
        }
    }
</style>