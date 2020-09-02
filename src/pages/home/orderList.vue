<template>
    <div class="orderList">
        <header>
            <!-- <left-title title="我的订单"></left-title> -->
            <van-nav-bar title="我的订单" left-text="返回" left-arrow @click-left="$goBack()" />
            <nav>
                <van-tabs v-model="active">
                    <van-tab title="全部">
                        <order-list :active='active'></order-list>
                    </van-tab>
                    <van-tab title="待处理">
                        <order-list :active='active'></order-list>
                    </van-tab>
                    <van-tab title="待发货">
                        <order-list :active='active'></order-list>
                    </van-tab>
                    <van-tab title="发货中">
                        <order-list :active='active'></order-list>
                    </van-tab>
                    <van-tab title="已完成">
                        <order-list :active='active'></order-list>
                    </van-tab>
                </van-tabs>
            </nav>
        </header>
    </div>
</template>

<script>
    import orderList from '@/components/list/orderList.vue' 
    import { mockApi } from '@/api/apiPersonal'
    export default {
        components: {
            orderList
        },
        created() {
            mockApi({
                pageIndex: 0,
                pageSize: 10
            }).then(res => {
                console.log(res)
            })
        },
        data() {
            return {
                active: 1
            }
        },
        beforeMount() {
            this.active = Number(this.$route.query.active)
        },
    }
</script>

<style lang='scss' scoped>
    /deep/ .van-tab--active {
        color: #f00;
    }
</style>