<template>
    <div class="lewis">

        <div class="my">
            <div class="my-header">
                <img src="../../../static/img/pic.png" alt="">
                <div class="info">
                    <p v-text="'用户名：' + name"></p>
                    <p v-text="'手机号：' + phone"></p>
                    <p v-text="'身份：' + (scope == 38 ? '社会推广人' : '')"></p>
                </div>
            </div>
            <div class="list-list dfs" @click="$router.push('walletCenter')">
                <div class="dfl">
                    <img src="../../../static/img/bag.png" alt="">
                    <p class="ml10">我的钱包</p>
                </div>
                <van-icon name="arrow" />
            </div>
            <div class="list-list dfs" @click="$router.push('alipayBind')">
                <div class="dfl">
                    <img src="../../../static/img/alipay-info.png" alt="">
                    <p class="ml10">支付宝绑定</p>
                </div>
                <van-icon name="arrow" />
            </div>
            <!-- <div class="list-list dfs" @click="$router.push('bankCardBind')">
            <div class="dfl">
                <img src="../../../static/img/card.png" alt="">
                <p class="ml10">银行卡绑定</p>
            </div>
            <van-icon name="arrow" />
        </div> -->
            <div class="list-list dfs" @click="$router.push('password')">
                <div class="dfl">
                    <img src="../../../static/img/password.png" alt="">
                    <p class="ml10">修改密码</p>
                </div>
                <van-icon name="arrow" />
            </div>
            <div class="list-list dfs" @click="$router.push('phone')">
                <div class="dfl">
                    <img src="../../../static/img/info.png" alt="">
                    <p class="ml10">修改手机号</p>
                </div>
                <van-icon name="arrow" />
            </div>
            <div class="mt20 lout" @click="goOut()">
                退出登录
            </div>
        </div>
    </div>
</template>

<script>
    import {
        GetUserInfo
    } from '@/api/apiMy'
    export default {
        name: 'vueName',
        data() {
            return {
                msg: 'Welcome to your vueName',
                name: '',
                phone: '',
                scope: ''
            }
        },
        created() {
            this.$toast.loading({
                message: '加载中...',
                forbidClick: true,
                duration: 0
            })
            GetUserInfo({
                token: localStorage.getItem('token')
            }).then(res => {
                console.log(res)
                this.name = res.data.data.name
                this.phone = res.data.data.phone
                this.scope = res.data.data.scope
            })
        },
        methods: {
            goOut() {
                this.$router.push('login')
                localStorage.removeItem('token')
            }
        }
    }
</script>

<style scoped lang="scss">
    .lewis {
        width: 100%;
        height: 100%;
        // background: #efefef;
    }
    .my {
        // background: #f8f8f8;

        &-header {
            display: flex;
            align-items: center;
            // width: 100%;
            padding: .3rem;
            height: 2rem;
            background: linear-gradient(to right, #FF5E5E, #FF1B1B);
            color: #fff;

            img {
                width: 1.2rem;
                height: 1.2rem;

            }

            .info {
                font-size: .28rem;
                margin-left: .2rem;

                p+p {
                    margin-top: .2rem;
                }
            }
        }
    }

    .list-list {
        padding: .3rem .3rem;
        background: #fff;
        border-bottom: .015rem solid #efefef;

        img {
            width: .5rem;
            height: .5rem;
        }
    }

    .lout {
        width: 90%;
        height: .7rem;
        text-align: center;
        background: linear-gradient(to right, #FF5E5E, #FF1B1B);
        margin: .4rem auto;
        color: #fff;
        line-height: .7rem;
        border-radius: 20px;
    }
</style>