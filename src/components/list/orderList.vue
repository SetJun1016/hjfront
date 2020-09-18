<template>
    <div class="ord">
        <van-empty v-if="orderList.length == 0" description="暂无订单信息"></van-empty>
        <van-list v-if="orderList.length != 0" v-model="loadings" :finished="finished" :immediate-check="false" finished-text="没有更多了" @load="onLoad" :offset="10">
            <div class="list" v-for="(item, index) in orderList" :key="index">
                <div class="statusName" v-if="active == 0">{{ item.statusName || ''}}</div>
                    <p v-text="'商品名称：' + item.goods_name"></p>
                    <p v-text="'商品数量：' + item.goods_num"></p>
                    <p v-text="'商品价格：' + item.price"></p>
                    <p v-text="'订单编号：' + item.order_sn"></p>
                    <p class='pcolor' v-show="item.status == 3">建议先查看一下订单详情再确定接单哦</p>
                    <p class='pcolor' v-show="item.status == 4">接单后请尽快发货，别让顾客等太久哦</p>
                    <p class='pcolor' v-show="item.status == 5 && !item.delivery_sn">您当前的配送方式为线下配送，无法查看物流</p>
                    <p class='pcolor' v-show="item.status == 5 && item.delivery_sn">您当前的配送方式为物流配送，可实时查看物流信息</p>
                    <p class='pcolor' v-show="item.status == 6">您已完成本次接单，并成功完成配送</p>
                    <p class='pcolor' v-show="item.status == 7">异常订单状态，拒绝接单或客户拒收</p>
                    <div class="buttonX">
                        <van-button class="button" type="info" @click="$router.push({path: '/orderView', query: {id: item.id}})">查看详情</van-button>
                        <van-button class="button" v-show="(item.status == 5 || item.status == 6) && item.delivery_sn" @click="$router.push({path: '/delivery', query: {id: item.id, no: item.delivery_sn}})" type="warning">查看物流</van-button>
                        <van-button class="button" v-if="item.status == 3" @click="cofirm(item.id, 0, 0, index)" type="danger">拒绝接单</van-button>
                        <van-button class="button" v-if="item.status == 3" @click="cofirm(item.id, 0, 1, index)" type="primary">立即接单</van-button>
                        <van-button class="button" v-if="item.status == 4" @click="cofirmDeliver(item.id, 1, 1, index)" type="primary">确认发货</van-button>
                        <!-- <van-button class="button" v-show="item.status == 5" @click="cofirmSuccess" type="primary">确认送达</van-button> -->
                    </div>
                    <van-dialog v-model="show" :title="showType == 0 ? '拒绝接单' : '发货确认'" show-cancel-button :before-close="showType == 0 ? chargeBtn : chargeBtn4" :lock-scroll='true'>
                        <div class="m-l-r-20">
                            <div class="m-t-b-10" v-show="showType == 0">您确定拒绝本次接单吗？</div>
                            <div class="m-t-b-10" v-show="showType == 1">确认发货？需填写好订单号或配送方式，点击确认按钮</div>
                            <van-field v-show="showType == 0" v-model="params.reason" rows="2" autosize label="拒接理由" type="textarea" maxlength="50" placeholder="请填写拒绝理由（理由必填）" show-word-limit />
                            <van-cell class="m-t-b-20" v-show="showType == 1" is-link title="配送方式" :value='actionStatus' @click="actionSheetShow = true" />
                            <van-action-sheet v-show="showType == 1" v-model="actionSheetShow" :actions="actions" @select="onSelect" />
                            <van-cell-group v-show="showType == 1 && params.delivery_type == 1" class="mb30">
                                <van-field v-model="params.delivery_sn" label="物流单号" placeholder="请输入物流单号" />
                            </van-cell-group>
                        </div>
                    </van-dialog>
                </div>
        </van-list>
    </div>
</template>

<script>
    import { GetShopOperateOrder } from '../../api/apiOrder'
    export default {
        props: {
            active: {
                type: Number,
                default: 1
            },
            orderList: {
                type: Array,
                default: () => []
            },
            meta: {
                type: [Object, Array],
                default: () => {}
            },
            loading: {
                type: Boolean,
                default: false
            },
            finished: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                params: {
                    id: '',
                    type: '',
                    status: '',
                    reason: '',
                    delivery_type: '',
                    delivery_sn: '',
                    token: localStorage.getItem('token')
                },
                show: false,
                actionSheetShow: false,
                actions: [{ name: '线下配送', delivery_type: 0 }, { name: '物流配送', delivery_type: 1 }],
                actionStatus: '',
                index: '',
                loadings: false,
                showType: ''
                // finished: false,
                //请求第几页
                // itemList: [],
            }
        },
        methods: {
            cofirm(id, type, status, index) {
                this.params.id = id
                this.params.type = type
                this.params.status = status
                this.index = index
                if (status == 1) {
                    this.$Dialog.confirm({
                            title: '接单确认',
                            message: '确认立即接单？接单后请尽快给顾客发货哦，别让客户等太久啦',
                        })
                        .then(() => {
                            GetShopOperateOrder(this.params).then(res => {
                                console.log(res)
                                if (res.data.code == 200) {
                                    this.$toast.success('已成功接单')
                                    this.orderList.splice(this.index, 1)
                                } else {
                                    this.$toast.fail(res.data.msg)
                                }
                            })
                            // on confirm
                        })
                        .catch(() => {
                            // on cancel
                        });
                } else {
                    this.showType = 0
                    // console.log('拒绝')
                    this.show = true

                }
            },
            cofirmDeliver(id, type, status, index) {
                this.params.id = id
                this.params.type = type
                this.params.status = status
                this.index = index
                this.showType = 1
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
            chargeBtn(action, done) {
                // console.log(action)
                // console.log('1111')
                if (action == 'confirm') {
                    if (this.params.reason == '') {
                        this.$toast.fail('请填写拒绝原因')
                        done(false)
                    } else {
                        this.$toast.loading('加载中')
                        GetShopOperateOrder(this.params).then(res => {
                            console.log(res)
                            if (res.data.code == 200) {
                                this.$toast.success('已拒绝接单')
                                this.orderList.splice(this.index, 1)
                                done()
                            } else {
                                this.$toast.fail(res.data.msg)
                                done(false)
                            }
                        })
                    }
                } else {
                    console.log('121212312'),
                        // return
                        done()
                }
            },
            chargeBtn4(action, done) {
                // console.log('123121312321312')
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
                                this.orderList.splice(this.index, 1)
                            } else {
                                this.$toast(res.data.msg)
                            }
                            done()
                        })
                    }
                } else {
                    done()
                }
            },
            onLoad() {
                // console.log('11111211212121')
                this.$emit('loadList')
            }
        },
        watch: {
            loading() {
                this.loadings = this.loading
            }
        }
    }
</script>

<style lang='scss' scoped>
    .ord {
        padding: .3rem;

        .list {
            position: relative;
            display: flex;
            // align-items: center;
            flex-wrap: wrap;
            flex-direction: column;
            justify-content: space-between;
            // height: 2.6rem;
            color: #000;
            font-size: .3rem;
            background: #fff;
            border-radius: 8px;
            padding: .5rem .3rem .5rem;
            margin-bottom: .4rem;

            p {
                line-height: .5rem;
            }

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

            .statusName {
                position: absolute;
                top: .3rem;
                right: .3rem;
                color: #f00;
            }
        }
    }

    /deep/ .van-overlay {
        background-color: rgba(0, 0, 0, .1);
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