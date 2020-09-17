<template>
    <div class="password">
        <van-nav-bar title="绑定支付宝账号" left-text="返回" left-arrow @click-left="$goBack()" />
        <div class="bankUpDateMatters mb20">
            <div>
                1、您所填写的姓名与身份证号码必须一致，一旦验证通过将无法进行修改
            </div>
            <div>
                2、您的支付宝账户所有者必须与您填写的姓名一致，否则将影响您的提现
            </div>
            <div>
                3、之前有填写支付宝账户和姓名的用户的用户，需尽快完善您的身份证信息，否则将影响您的提现
            </div>
            <div>
                4、您的支付宝绑定必须与银行卡绑定是同一姓名和身份证号
            </div>
        </div>
        <van-form validate-first @submit="submit" ref="vanForm">
            <!-- 通过 pattern 进行正则校验 -->
            <van-field v-model.trim="params.alipay_username" label="姓名" name="validator3" placeholder="请输入您的真实姓名" clearable :rules="[{ required: true, message: '请正确输入您的姓名' }]" />
            <!-- 通过 validator 进行函数校验 -->
            <van-field v-model.trim="params.alipay_account" label="支付宝账号" name="validator2" placeholder="请输入支付宝账号" clearable :rules="[{ validator: validator2, message: '请正确输入您的支付宝账号' }]" />
            <van-field v-model.trim="params.id_card" label="身份证账号" name="validator" placeholder="请输入身份证号码" clearable :rules="[{ validator, message: '请正确输入您的身份证号码' }]" />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">
                    提交
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
    import { checkIdCard, checkAlipay } from '../../utils/regular'
    import { FormatVerifyId, UpdateAlipayAccount } from '../../api/apiWallet'
    export default {
        data() {
            return {
                params: {
                    alipay_username: '',
                    alipay_account: '',
                    id_card: '',
                    token: localStorage.getItem('token')
                }
            };
        },
        created() {
            console.log(JSON.parse(this.$store.getters.userInfo))
            this.params.alipay_username = JSON.parse(this.$store.getters.userInfo).alipay_username
            this.params.alipay_account = JSON.parse(this.$store.getters.userInfo).alipay_account
            this.params.id_card = JSON.parse(this.$store.getters.userInfo).id_card
        },
        methods: {
            // 校验函数返回 true 表示校验通过，false 表示不通过
            validator(val) {
                return checkIdCard(val);
            },
            validator2(val) {
                return checkAlipay(val);
            },
            submit() {
                // console.log('验证通过了')
                this.$toast.loading({
                    message: '加载中...',
                    forbidClick: true,
                    duration: 0
                })
                // 进行实名验证
                FormatVerifyId({
                    realName: this.params.alipay_username,
                    idCard: this.params.id_card
                }).then(res => {
                    console.log(res)
                    if(res.data.code == 200) {
                        UpdateAlipayAccount(this.params).then(res => {
                            console.log(res)
                            if(res.data.code == 200) {
                                this.$toast.success('绑定成功')
                                this.$store.dispatch('handle_userInfo', JSON.stringify(res.data.data))
                            } else {
                                this.$toast.fail(res.data.msg)
                            }
                        })
                    } else {
                        this.$toast(res.data.msg)
                    }
                })
            }
        },
    }
</script>

<style lang='scss' scoped>
    /deep/ .van-cell {
        padding: .5rem .32rem;
        // border-radius: 6px;

        /deep/ .van-field__error-message {
            position: absolute;
            bottom: -.4rem;
        }
    }

    /deep/ .van-field__label {
        width: 5.2em;
        font-size: .24rem;
    }

    .bankUpDateMatters {
        padding: 0.2rem;
        background: #FFF7DB;
        color: #Ffa65B;
        font-size: 0.24rem;
        line-height: 0.36rem;
    }
</style>