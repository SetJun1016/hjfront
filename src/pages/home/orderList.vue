<template>
    <div class="orderList">
        <header>
            <van-nav-bar fixed placeholder title="我的订单" left-text="返回" left-arrow @click-left="$goBack()" />
            <!-- <left-title title="我的订单"></left-title> -->
            <nav>
                <van-tabs sticky offset-top='46px' @click="onClick" v-model="active">
                    <van-tab title="全部">
                        <order-list :orderList='orderList' :active='active' @loadList='loadList' :meta='meta' :loading='loading' :finished='finished'></order-list>
                    </van-tab>
                    <van-tab title="待处理">
                        <order-list :orderList='orderList' :active='active' @loadList='loadList' :meta='meta' :loading='loading' :finished='finished'></order-list>
                    </van-tab>
                    <van-tab title="待发货">
                        <order-list :orderList='orderList' :active='active' @loadList='loadList' :meta='meta' :loading='loading' :finished='finished'></order-list>
                    </van-tab>
                    <van-tab title="发货中">
                        <order-list :orderList='orderList' :active='active' @loadList='loadList' :meta='meta' :loading='loading' :finished='finished'></order-list>
                    </van-tab>
                    <van-tab title="已完成">
                        <order-list :orderList='orderList' :active='active' @loadList='loadList' :meta='meta' :loading='loading' :finished='finished'></order-list>
                    </van-tab>
                    <van-tab title="订单异常">
                        <order-list :orderList='orderList' :active='active' @loadList='loadList' :meta='meta' :loading='loading' :finished='finished'></order-list>
                    </van-tab>
                </van-tabs>
            </nav>
        </header>
    </div>
</template>

<script>
    import orderList from '@/components/list/orderList.vue'
    // import { mockApi } from '@/api/apiPersonal'
    import { GetSupplyOrderList } from '@/api/apiOrder'
    // import { mockApi } from '@/api/apiPersonal'
    export default {
        components: {
            orderList
        },
        data() {
            return {
                active: 0,
                orderList: [],
                meta: {},
                loading: false,
                finished: false,
                page: 1
            }
        },
        created() {
            this.active = Number(this.$route.query.active)
            this.getSupplyOrderList()
        },
        methods: {
            onClick(name, title) {
                console.log(name)
                console.log(title)
                this.orderList = []
                this.meta = {}
                this.loading = false
                this.finished = false
                this.page = 1
                this.getSupplyOrderList()
            },
            // 获取订单列表
            getSupplyOrderList() {
                GetSupplyOrderList({
                    status: this.active,
                    page: this.page
                }).then(res => {
                    this.page ++
                    if(res.data.code == 422) {
                        this.orderList == []
                    } else {
                        this.orderList = this.orderList.concat(res.data.data.list)
                        this.meta = res.data.meta
                        if(this.meta.current_page >= this.meta.last_page) {
                            this.finished = true
                            // this.loading = true
                        } else {
                            this.loading = false
                        }
                    }
                })
            },
            loadList() {
                if(this.meta.current_page >= this.meta.last_page) {
                    this.finished = true
                }
                // console.log(page)
                this.getSupplyOrderList()
            }
        },
        watch: {
            // ['active'](val) {
            //     this.orderList = []
            //     this.meta = {}
            //     this.loading = false
            //     this.finished = false
            //     this.page = 1
            //     this.getSupplyOrderList()
            // }
        }
    }
</script>

<style lang='scss' scoped>
    /deep/ .van-tab--active {
        color: #f00;
    }

    // .vanNav {
    //     position: fixed;
    //     top: 0;
    // }
</style>