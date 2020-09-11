<template>
    <div class="orderView">
        <van-nav-bar title="订单详情" left-text="返回" left-arrow @click-left="$goBack()" />
        <div class="order mt10">
            <div class="order-title">
                <span>订单信息</span>
            </div>
            <p v-text="'商品名称:' + (orderDetail.goodsName || '')"></p>
            <p v-text="'商品数量:' + (orderDetail.goodsNum || '')"></p>
            <p v-text="'商品单价:' + (orderDetail.price || '')"></p>
            <p v-text="'订单状态:' + (orderDetail.orderStatusName || '')"></p>
            <p v-text="'订单编号:' + (orderDetail.orderSn || '')"></p>
            <p v-if="orderDetail.deliverySn" v-text="'物流单号:' + orderDetail.deliverySn"></p>
        </div>
        <div class="order mt10">
            <div class="order-title">
                <span>收货人信息</span>
            </div>
            <p v-text="'收货人姓名：' + (orderDetail.receivePerson || '')"></p>
            <p v-text="'收货人手机号：' + (orderDetail.mobile || '')"></p>
            <p v-text="'收货人地址：' + (orderDetail.address || '')"></p>
        </div>
        <div class="orderBottom" v-if="!((orderDetail.orderStatus == 5 || orderDetail.orderStatus == 6) && !orderDetail.deliverySn || orderDetail.orderStatus == -1)">
            <van-button class="button" type="warning" @click="$router.push({path: '/delivery', query: {id: orderDetail.id, no: orderDetail.deliverySn}})" v-show="(orderDetail.orderStatus == 5 || orderDetail.orderStatus == 6) && orderDetail.deliverySn">查看物流</van-button>
            <van-button v-show="orderDetail.orderStatus == 3" class="button" type="danger" @click="reject">拒绝接单</van-button>
            <van-button v-show="orderDetail.orderStatus == 3" class="button" type="primary" @click="cofirm">立即接单</van-button>
            <van-button v-show="orderDetail.orderStatus == 4" class="button" type="primary" @click="cofirmDeliver">确认发货</van-button>
        </div>
        <van-dialog v-model="show" :title="orderDetail.orderStatus == 3 ? '拒绝接单' : '发货确认'" show-cancel-button :before-close="orderDetail.orderStatus == 3 ? chargeBtn : chargeBtn4" :lock-scroll='true'>
            <div class="m-l-r-20">
                <div class="m-t-b-10" v-show="orderDetail.orderStatus == 3">您确定拒绝本次接单吗？</div>
                <div class="m-t-b-10" v-show="orderDetail.orderStatus == 4">确认发货？需填写好订单号或配送方式，点击确认按钮</div>
                <van-field v-show="orderDetail.orderStatus == 3" v-model="params.reason" rows="2" autosize label="拒接理由" type="textarea" maxlength="50" placeholder="请填写拒绝理由（理由必填）" show-word-limit />
                <van-cell class="m-t-b-20" v-show="orderDetail.orderStatus == 4" is-link title="配送方式" :value='actionStatus' @click="actionSheetShow = true" />
                <van-action-sheet v-show="orderDetail.orderStatus == 4" v-model="actionSheetShow" :actions="actions" @select="onSelect" />
                <van-cell-group v-show="orderDetail.orderStatus == 4 && params.delivery_type == 1" class="mb30">
                    <van-field v-model="params.delivery_sn" label="物流单号" placeholder="请输入物流单号" />
                </van-cell-group>
            </div>
        </van-dialog>
    </div>
</template>

<script>
    import { GetShopOperateOrder, GetSupplyOrderDetail } from '../../api/apiOrder'
    export default {
        data() {
            return {
                id: '',
                orderDetail: {},
                show: false,
                params: {
                    id: '',
                    type: '',
                    status: '',
                    reason: '',
                    delivery_type: '',
                    delivery_sn: '',
                    token: localStorage.getItem('token')
                },
                actionSheetShow: false,
                actions: [{ name: '线下配送', delivery_type: 0 }, { name: '物流配送', delivery_type: 1 }],
                actionStatus: ''
            }
        },
        created() {
            console.log('加载')
            this.id = this.$route.query.id
            GetSupplyOrderDetail(this.id).then(res => {
                console.log(res)
                this.orderDetail = res.data.data.data
                console.log(this.orderDetail)
            })
        },
        methods: {
            cofirm() {
                [this.params.id, this.params.type, this.params.status] = [this.orderDetail.id, 0, 1]
                this.$Dialog.confirm({
                        title: '接单确认',
                        message: '确认立即接单？接单后请尽快给顾客发货哦，别让客户等太久啦',
                    })
                    .then(() => {
                        GetShopOperateOrder(this.params).then(res => {
                            if(res.data.code == 200) {
                                this.$toast.success('已成功接单')
                            } else {
                                this.$toast(res.data.msg)
                            }
                        })
                        // on confirm
                    })
                    .catch(() => {
                        // on cancel
                    });
            },
            reject() {
                this.show = true
            },
            // 确认发货
            cofirmDeliver(id, type, status) {
                [this.params.id, this.params.type, this.params.status] = [this.orderDetail.id, 1, 1]
                this.show = true
            },
            onSelect(item) {
                // 默认情况下点击选项时不会自动收起
                // 可以通过 close-on-click-action 属性开启自动收起
                this.actionSheetShow = false;
                this.actionStatus = item.name
                this.params.delivery_type = item.delivery_type
                console.log(this.params.delivery_type)
                // this.$toast(item.name);
            },
            // 拒绝接单
            chargeBtn(action, done) {
                [this.params.id, this.params.type, this.params.status] = [this.orderDetail.id, 0, 0]
                if (action == 'confirm') {
                    if (this.params.reason == '') {
                        this.$toast('请填写拒绝原因')
                        done(false)
                    } else {
                        this.$toast.loading('加载中')
                        GetShopOperateOrder(this.params).then(res => {
                            console.log(res)
                            if (res.data.code == 200) {
                                this.$toast.success('已拒绝接单')
                            } else {
                                this.$toast.fail(res.data.msg)
                            }
                            done()
                        })
                    }
                } else {
                    // console.log('121212312')
                    // // return
                    done()
                }
            },
            chargeBtn4(action, done) {
                if (action == 'confirm') {
                    if (this.params.delivery_type === '') {
                        // console.log(this.params.delivery_type)
                        // console.log(typeof(this.params.delivery_type))
                        this.$toast('请选择配送方式')
                        done(false)
                    } else if (this.params.delivery_type !== 0 && this.params.delivery_sn === '') {
                        console.log(this.params.delivery_type === 0)
                        console.log(this.params.delivery_sn === '')
                        console.log(typeof (this.params.delivery_type))
                        this.$toast('请填写物流单号')
                        done(false)
                    } else {
                        this.$toast.loading('加载中')
                        GetShopOperateOrder(this.params).then(res => {
                            console.log(res)
                            if (res.data.code == 200) {
                                this.$toast.success('已完成发货')
                                done()
                            } else {
                                this.$toast(res.data.msg)
                                done(false)
                            }
                        })
                    }
                } else {
                    done()
                }
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

    /deep/ .van-field__label {
        width: 4em,
    }

    /deep/ .van-cell {
        padding: 10px 0;
    }

    .m-t-b-10 {
        font-size: .28rem;
    }
</style>