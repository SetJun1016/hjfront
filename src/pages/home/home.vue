<template>
    <div class="home">
        <div class="title">
            <div>首页</div>
            <van-icon @click="toastDev()" name="setting-o" size="25px" color="#000" />
        </div>
        <div class="userInfo mt10">
            <img src="http://119.3.151.48/storage/app/images/1597369090472009.jpg" alt="">
            <div class="userInfo-title">
                <p>田亩信息网络有限公司</p>
                <p>手机号: 183****4573</p>
            </div>
        </div>
        <div class="order">
            <div class="order-list">
                <p>我的订单</p>
                <div class="order-view" @click="$router.push({ path: '/orderList', query: {active: 0} })">
                    <span>查看全部订单</span>
                    <van-icon class="icon" name="arrow" />
                </div>
            </div>
            <div class="order-img">
                <div class="order-img-list" @click="$router.push({ path: '/orderList', query: {active: 1} })">
                    <img src="@/assets/img/pending.png" alt="">
                    <div v-show="supplyCoount.unHandleCount" v-text="supplyCoount.unHandleCount > 99 ? '99+' : supplyCoount.unHandleCount"></div>
                    <p>待处理</p>
                </div>
                <div class="order-img-list" @click="$router.push({ path: '/orderList', query: {active: 2} })">
                    <img src="@/assets/img/stayGoods.png" alt="">
                    <div v-show="supplyCoount.unSendCount" v-text="supplyCoount.unSendCount > 99 ? '99+' : supplyCoount.unSendCount"></div>
                    <p>待发货</p>
                </div>
                <div class="order-img-list" @click="$router.push({ path: '/orderList', query: {active: 3} })">
                    <img src="@/assets/img/transit.png" alt="">
                    <div v-show="supplyCoount.sendingCount" v-text="supplyCoount.sendingCount > 99 ? '99+' : supplyCoount.sendingCount"></div>
                    <p>发货中</p>
                </div>
                <div class="order-img-list" @click="$router.push({ path: '/orderList', query: {active: 4} })">
                    <img src="@/assets/img/successOrder.png" alt="">
                    <div v-show="supplyCoount.receivedCount" v-text="supplyCoount.receivedCount > 99 ? '99+' : supplyCoount.receivedCount"></div>
                    <p>已完成</p>
                </div>
                <div class="order-img-list" @click="$router.push({ path: '/orderList', query: {active: 5} })">
                    <img src="@/assets/img/errorOrder.png" alt="">
                    <div v-show="supplyCoount.exceptionCount" v-text="supplyCoount.exceptionCount > 99 ? '99+' : supplyCoount.exceptionCount"></div>
                    <p>异常订单</p>
                </div>
            </div>
        </div>
        <div class="order">
            <div class="order-list">
                <p>个人中心</p>
            </div>
            <div class="order-img">
                <div class="order-img-list" v-for="(item, index) in personal" :key="index" @click="chooseCloumn(item.type, item.url)">
                    <img :src="item.img" alt="">
                    <p v-text="item.name"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { GetSupplyOrderCount } from '@/api/apiOrder'
    export default {
        data() {
            return {
                personal: [
                    {
                        id: 1,
                        name: '修改密码',
                        img: '../../../static/img/modifyPassword.png',
                        url: '/password',
                        type: 'push'
                    },
                    {
                        id: 2,
                        name: '修改手机号',
                        img: '../../../static/img/modifyPhone.png',
                        url: '/phone',
                        type: 'push'
                    },
                    {
                        id: 3,
                        name: '问题反馈',
                        img: '../../../static/img/problem.png',
                        url: '/problem',
                        type: 'dev'
                    },
                    {
                        id: 4,
                        name: '推出登录',
                        img: '../../../static/img/signOut.png',
                        url: '/login',
                        type: 'pushCh'
                    }
                ],
                supplyCoount: {
                    unHandleCount: 0,
                    unSendCount: 0,
                    sendingCount: 0,
                    receivedCount: 0,
                    exceptionCount: 0
                }
            }
        },
        created() {
            GetSupplyOrderCount().then(res => {
                console.log(res)
                this.supplyCoount = res.data
                // this.supplyCoount.unHandleCount = 101
            })
        },
        methods: {
            chooseCloumn(type, url) {
                if(type == 'push') {
                    this.$router.push(url)
                } else if(type == 'pushCh') {
                    this.signOut()
                } else if(type == 'dev') {
                    this.toastDev()
                }
            },
            // 退出登录
            signOut() {
                localStorage.clear();
                this.$router.replace('/login')
            },
            toastDev() {
                this.$toast('功能正在开发中...')
            }
        },
    }
</script>

<style lang='scss' scoped>
    .title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: .38rem;
        color: #000;
        background: #fff;
        height: 1rem;
        padding: 0 .2rem;
    }

    .userInfo {
        padding: 0 .3rem;
        height: 2.2rem;
        background: #fff;
        display: flex;
        align-items: center;

        img {
            width: 1.2rem;
            height: 1.2rem;
            border-radius: 50%;
        }

        &-title {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            // height: 100%;
            height: 1.8rem;
            margin: 0 0 0 .2rem;
            color: #000;
            font-size: .32rem;
        }
    }

    .order {
        height: 3rem;
        margin: .2rem;
        background: #fff;
        border-radius: 6px;

        .order-list {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 1rem;
            padding: 0 .2rem;
            border-bottom: .01rem solid #ddd;

            // color: #000;
            p:nth-child(1) {
                color: #000;
                font-size: .32rem;
            }

            .order-view {
                height: .4rem;
                // line-height: .4rem;
                display: flex;
                align-items: center;
            }
        }

        &-img {
            display: flex;
            align-items: center;
            justify-content: space-between;
            // flex-wrap: wrap;
            height: 2rem;
            padding: 0 .3rem;

            &-list {
                position: relative;
                width: 25%;
                text-align: center;
                img {
                    width: .7rem;
                    margin-bottom: .2rem;
                }

                div {
                    width: .4rem;
                    height: .4rem;
                    border-radius: 50%;
                    // border: .01rem solid #f00;
                    background: #f00;
                    position: absolute;
                    right: .2rem;
                    top: -.1rem;
                    color: #fff;
                    font-size: .24rem;
                    text-align: center;
                    line-height: .4rem;
                }
            }

            // &-listTwo {
            //     width: ;
            // }
        }
    }
</style>