<template>
    <div class="withDrawal">
        <van-nav-bar title="余额提现" left-text="返回" left-arrow @click-left="$goBack()" />
        <div></div>
        <div class="mt10 money-box">
            <p>提现至支付宝（元）</p>
            <div class="money-input">
                <span class="money-ti">￥</span>
                <input type="text" v-model="money" :placeholder="'您有可提现金额' + balance + '元'">
            </div>
        </div>
        <div class="submit">
            <!-- <div class="submit-sure">确认提现</div> -->
            <van-button class="submit-sure" round block type="danger" @click="submit">
                提交
            </van-button>
        </div>
    </div>
</template>

<script>
    import {
        CashOutToBanlance
    } from '@/api/apiWallet'
    import {
        GetUserInfo
    } from '@/api/apiMy'
    export default {
        name: 'vueName',
        data() {
            return {
                msg: 'Welcome to your vueName',
                money: '',
                balance: ''
            }
        },
        created() {
            // this.$toast.clear()
            this.getUserInfo()
        },
        methods: {
            submit() {
                if(this.money == '') {
                    this.$toast.fail('请输入金额')
                    return
                }
                // console.log('12e12312')
                CashOutToBanlance({
                    token: localStorage.getItem('token'),
                    money: this.money
                }).then(res => {
                    console.log(res)
                    if(res.data.code == 0) {
                        this.$toast.success(res.data.msg)
                    } else {
                        this.$toast.fail(res.data.msg)
                    }
                })
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

<style scoped lang="scss">
    .withDrawal {
        background: #f8f8f8;
    }

    .money-box {
        // height: 3rem;
        background: #fff;
        border-bottom: .015rem solid #efefef;
        padding: .2rem 0 .4rem 0;

        p {
            font-size: .36rem;
            color: #aaa;
            padding: .4rem .3rem;
        }

        .money-input {
            position: relative;

            .money-ti {
                position: absolute;
                top: 50%;
                left: .2rem;
                font-size: .54rem;
                color: #000;
                font-weight: 700;
                transform: translateY(-50%);
            }
        }

        input {
            // border-bottom: .01rem solid #ccc;
            width: 65%;
            height: 1rem;
            font-size: 0.54rem;
            margin-bottom: .01rem;
            margin-right: auto;
            border: 0;
            margin-left: 1rem;
        }

        input::-webkit-input-placeholder {
            /* placeholder颜色  */
            color: #ddd;
            font-size: .36rem;
        }
    }

    .submit {
        background: #fff;
        padding: .2rem 0;

        .submit-sure {
            width: 90%;
            margin: 0 auto;
        }

        // .submit-sure {
        //     background: #fff;
        //     width: 90%;
        //     height: 1rem;
        //     line-height: 1rem;
        //     margin: .2rem auto;
        //     text-align: center;

        // }

    }
</style>