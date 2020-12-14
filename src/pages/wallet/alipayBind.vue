<template>
    <div class="password">
        <van-nav-bar title="绑定支付宝账号" left-text="返回" left-arrow @click-left="$goBack()" />
        <!-- <div class="bankUpDateMatters mb20">
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
        </div> -->
        <van-form validate-first @submit="submit" ref="vanForm">
            <!-- 通过 pattern 进行正则校验 -->
            <van-field v-model.trim="params.user_name" label="姓名" name="validator3" placeholder="请输入您的真实姓名" clearable
                :rules="[{ required: true, message: '请正确输入您的姓名' }]" />
            <!-- 通过 validator 进行函数校验 -->
            <van-field v-model.trim="params.card_num" label="支付宝账号" name="validator2" placeholder="请输入支付宝账号" clearable
                :rules="[{ validator: validator2, message: '请正确输入您的支付宝账号' }]" />
            <van-field v-model.trim="params.card_id" label="身份证账号" name="validator" placeholder="请输入身份证号码" clearable
                :rules="[{ validator, message: '请正确输入您的身份证号码' }]" />
            <div style="margin: 16px;">
                <van-button round block type="danger" native-type="submit">
                    提交
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
    import {
        checkIdCard,
        checkAlipay,
        
    } from '../../utils/regular'
    // import { FormatVerifyId, UpdateAlipayAccount } from '../../api/apiWallet'
    import {
        AccountInfo,
        BindAccount,
        EditAccount
    } from '@/api/apiMy'
    export default {
        data() {
            return {
                params: {
                    user_name: '',
                    card_num: '',
                    card_id: '',
                    token: localStorage.getItem('token')
                },
                type: 'add'
            };
        },
        created() {
            AccountInfo({
                token: localStorage.getItem('token')
            }).then(res => {
                console.log(res)
                if (res.data.data.length !== 0) {
                    console.log('2121')
                    this.params.user_name = res.data.data.user_name
                    this.params.card_id = res.data.data.card_id
                    this.params.card_num = res.data.data.card_num
                    this.type = 'update'
                }
            })
            console.log(JSON.parse(this.$store.getters.userInfo))
            // this.params.user_name = JSON.parse(this.$store.getters.userInfo).user_name
            // this.params.card_num = JSON.parse(this.$store.getters.userInfo).card_num
            // this.params.card_id = JSON.parse(this.$store.getters.userInfo).card_id
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
                let data = {
                    token: localStorage.getItem('token'),
                    user_name: this.params.user_name,
                    type: 1,
                    card_id: this.params.card_id,
                    card_num: this.params.card_num
                }
                console.log(data)
                if(this.type == 'update') {
                    EditAccount(data).then(res => {
                        if(res.data.code == 0) {
                            this.$toast.success(res.data.msg)
                        } else {
                            this.$toast.fail(res.data.msg)
                        }
                    })
                } else if(this.type == 'add') {
                    BindAccount(data).then(res => {
                        console.log(res)
                        if(res.data.code == 0) {
                            this.$toast.success(res.data.msg)
                            this.type = 'update'
                        } else {
                            this.$toast.fail(res.data.msg)
                        }
                    })
                }
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