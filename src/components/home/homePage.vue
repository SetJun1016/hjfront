<template>
    <div class="home">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item, index) in banner_list" :key="index">
                <img :src="item.image" alt="">
            </van-swipe-item>
            <!-- <van-swipe-item>
                <div class="rows-swiper">
                    <div class="rows-swiper-title">
                        本月累计发放酬金（元）
                    </div>
                    <div class="rows-swiper-amount">
                        32422.80
                    </div>
                    <div class="dfl rows-swiper-size mt15">
                        <p>
                            昨日累计发放酬金
                        </p>
                        <p>
                            2320.2
                        </p>
                    </div>
                    <div class="dfl rows-swiper-size mt15">
                        <p>
                            昨日收入榜首
                        </p>
                        <p class="ml20">
                            张 **
                        </p>
                        <p>
                            2320.2
                        </p>
                    </div>
                </div>
            </van-swipe-item> -->
        </van-swipe>
        <van-notice-bar left-icon="volume-o" :scrollable="false">
            <van-swipe vertical class="notice-swipe" :autoplay="3000" :show-indicators="false">
                <van-swipe-item v-for="(item, index) in tipList" :key="index"
                    v-text="item.name + '**' + item.day + '推广' + item.app + item.valid_user_count + '有效户'">
                </van-swipe-item>
            </van-swipe>
        </van-notice-bar>
        <div class="mt10 icon-box">
            <div class='icon-box-img' @click="goApp(item.app)" v-for="(item, index) in app" :key="index">
                <img :src="item.image" alt="">
                <p v-text="item.name"></p>
            </div>
        </div>
        <div class="mt10 task">
            <div class="task-title">任务推荐</div>
            <div class="task-box mt10" v-for="(item, index) in app" :key="index">
                <div class="task-box-title" v-text="item.name + '拉新'"></div>
                <div class="task-box-detail">
                    <!-- <p>支付宝新用户，领取话费红包、线下支付红包等任一新人红包并完成核销后，即可获得拉新奖励。</p> -->
                    <p v-text="item.desc"></p>
                    <p @click="goApp(item.app)">立即报名</p>
                </div>
                <div class="task-box-price mt5">佣金单价</div>
                <div class="task-box-content mt5">
                    <div class="dfl contentW50">
                        <p>有效用户数:</p>
                        <p class="ml5" v-text="item.valid_user_count"></p>
                    </div>
                    <div class="dfl contentW50">
                        <p>有效确认用户数:</p>
                        <p class="ml5" v-text="item.valid_confirm_user_count"></p>
                    </div>
                </div>
                <div class="task-box-content mt15">
                    <div class="dfl contentW50">
                        <p>领取人数:</p>
                        <p class="ml5" v-text="item.receive_user_count"></p>
                    </div>
                    <div class="dfl contentW50">
                        <p>发放酬金:</p>
                        <p class="ml5" v-text="item.grant_price"></p>
                    </div>
                </div>
                <div class="dfs task-box-bottom">
                    <div class="bottom-group">
                        <p>高酬金</p>
                        <p>推荐</p>
                        <p>热门</p>
                    </div>
                    <div class="bottom-right">已报名: 32412</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        GetIndex
    } from '@/api/apiIndex'
    export default {
        name: 'vueName',
        data() {
            return {
                msg: 'Welcome to your vueName',
                app: [],
                banner_list: [],
                tipList: [{
                        name: '李',
                        app: '支付宝',
                        day: '一天前',
                        valid_user_count: 20
                    },
                    {
                        name: '王',
                        app: '云闪付',
                        day: '一天前',
                        valid_user_count: 30
                    },
                    {
                        name: '何',
                        app: '京东',
                        day: '一天前',
                        valid_user_count: 10
                    },
                    {
                        name: '张',
                        app: '美团',
                        day: '一天前',
                        valid_user_count: 15
                    }
                ]
            }
        },
        created() {
            this.$toast.loading({
                message: '加载中...',
                forbidClick: true,
                duration: 0
            })
            GetIndex().then(res => {
                console.log(res)
                this.app = res.data.data.app
                this.banner_list = res.data.data.banner_list
                // console.log(this.data)
            })

        },
        methods: {
            goApp(app) {
                if (app == 21) {
                    // Toast('正在开发中')
                    this.$toast('正在开发中...')
                } else if (app == 22) {
                    this.$router.push('alipay')
                } else if (app == 31) {
                    this.$router.push('mt')
                } else if (app == 23) {
                    this.$router.push('jd')
                } else {
                    this.$toast('正在开发中...')
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .my-swipe {
        width: 100%;
        height: 3.5rem;

        img {
            width: 100%;
            height: 3.5rem;
        }
    }

    .my-swipe .van-swipe-item {
        // color: #fff;
        // font-size: 20px;
        height: 3.5rem;
        // background-color: #39a9ed;

        .rows-swiper {
            width: 100%;
            height: 100%;
            color: #fff;
            background: linear-gradient(to right, #FF5E5E, #FF1B1B);
            display: flex;
            flex-direction: column;
            // align-items: center;

            &-title {
                padding: .6rem .3rem .2rem;
                font-size: .35rem;
            }

            &-amount {
                font-size: .45rem;
                padding: 0 .3rem;
            }

            &-size {
                padding: 0rem .3rem;

                :last-child {
                    font-size: .32rem;
                    margin-left: .5rem;
                }
            }


        }
    }


    .home {
        width: 100%;
        background: #f8f8f8;
        margin-bottom: 1.2rem;
    }

    .icon-box {
        height: 1.8rem;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 0 .3rem;

        .icon-box-img {
            width: 1.2rem;
            height: 1.4rem;
            text-align: center;
            font-size: .24rem;
            // margin-top: .2rem;

            img {
                width: .8rem;
                height: .8rem;
                // height: 100%;
            }

            p {
                margin-top: .1rem;
            }
        }
    }

    .task {
        background: #fff;
        padding: .3rem;

        &-title {
            color: #000;
            font-size: .32rem;
        }

        &-box {
            width: 100%;
            // height: 4rem;
            padding: .25rem;
            border-left: .1rem solid #FF1B1B;
            box-sizing: border-box;
            box-shadow: 0 0 10px #e5e5e5;

            &-title {
                font-size: .32rem;
                color: #000;
            }

            &-detail {
                padding: .1rem 0;
                font-size: .22rem;
                color: #888;
                display: flex;
                justify-content: space-between;
                align-items: center;

                :first-child {
                    width: 75%;
                    line-height: .3rem;
                }

                :last-child {
                    width: 20%;
                    height: .6rem;
                    background: linear-gradient(to right, #FF5E5E, #FF1B1B);
                    border-radius: 20px;
                    line-height: .6rem;
                    text-align: center;
                    color: #fff;
                }
            }

            &-price {
                font-size: .3rem;
                color: #FF5E5E;
            }

            &-content {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                font-size: .26rem;
                padding-bottom: .2rem;
                border-bottom: .015rem dashed #ddd;

                .contentW50 {
                    width: 50%;
                    margin-top: .1rem;
                    color: #8B8B8B;
                }
            }

            &-bottom {
                padding: .2rem 0 0;

                .bottom-group {
                    display: flex;

                    p {
                        width: .8rem;
                        height: .4rem;
                        color: #fff;
                        text-align: center;
                        line-height: .4rem;
                        font-size: .22rem;
                        border: .015rem solid #FF1B1B;
                        color: #FF1B1B;
                        // background:  #FF1B1B;
                        margin-right: .1rem;
                    }
                }

                .bottom-right {
                    font-size: .22rem;
                    color: #FF1B1B;
                }
            }
        }
    }

    .notice-swipe {
        height: .7rem;
        line-height: .7rem;
        font-size: .24rem;
        color: #FF1B1B;
        // background: #fff;
        // margin-top: .2;
    }

    /deep/ .van-notice-bar {
        margin-top: .2rem;
        background: #fff;
        color: #FF1B1B;
    }
</style>