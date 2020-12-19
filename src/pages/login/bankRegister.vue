<template>
    <div class="bankRegister">
        <div class="bank-header" v-text="type === 'bank' ? '银行推广人' : '非银行推广人'"></div>
        <van-form class="mt20">
            <van-field label-width='4em' class="brt" v-model="params.name" left-icon='manager' name="用户名" label="用户号"
                placeholder="请输入用户名" :rules="[{ required: true, message: '请填写正确的用户名' }]" />
            <van-field label-width='4em' class="brt" v-model="params.phone" left-icon='../../../static/img/phone.png'
                name="手机号" label="手机号" placeholder="请输入手机号" :rules="[{ required: true, message: '请填写11位数字的手机号' }]" />
            <van-field label-width='4em' class="brt" v-model="params.invite_code"
                left-icon='../../../static/img/codeM.png' name="手机号" label="邀请码" placeholder="请输入邀请码"
                :rules="[{ required: true, message: '请填写邀请码' }]" />
            <van-field label-width='4em' v-show="type === 'bank'" class="brt" v-model="params.mobile"
                left-icon='../../../static/img/bank.png' name="手机号" label="网点" placeholder="请选择网点名称"
                :rules="[{ required: true, message: '请选择正确网点' }]" />
            <van-field label-width='4em' class="brb" v-model="params.code" left-icon='info' center clearable label="验证码"
                placeholder="请输入短信验证码" :rules="[{ required: true, message: '请输入验证码' }]">
                <template #button>
                    <van-button @click="getCode" native-type="button" :disabled='timeShow' size="small" type="primary">
                        {{ timeShow ? time + '秒': '获取验证码' }}
                    </van-button>
                </template>
            </van-field>
            <van-field label-width='4em' class="brb" v-model="params.password" left-icon='lock' type="password"
                name="密码" label="密码" placeholder="请输入登录密码" :rules="[{ required: true, message: '请填写6位以上的密码' }]" />
            <van-field label-width='4em' class="brb" v-model="newPass" left-icon='lock' type="password" name="确认密码"
                label="确认密码" placeholder="请再次输入登录密码" :rules="[{ required: true, message: '请填写6位以上的密码' }]" />
            <div class="mt40">
                <van-button round block type="danger" @click="register">
                    确定
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
    import {
        GetCode,
        Register
    } from '@/api/apiLogin'
    export default {
        name: 'vueName',
        data() {
            return {
                msg: 'Welcome to your vueName',
                params: {
                    phone: '', // 手机号
                    name: '', // 用户名
                    scope: 38, // 
                    code: '', // 验证码
                    invite_code: '', // 验证码
                    password: '' // 密码
                },
                type: 'bank',
                timeShow: false,
                newPass: '',
                time: 60,
                timeCheck: ''
            }
        },
        created() {
            this.type = this.$route.query.type
            console.log(this.type)
        },
        methods: {
            getCode() {
                GetCode({
                    phone: this.params.phone
                }).then(res => {
                    console.log(res)
                    if (res.data.code == 0) {
                        this.$toast.success('发送成功')
                        this.timeShow = true
                        this.time = 60
                        this.timeCheck = setInterval(() => {
                            if (this.time == 0) {
                                clearInterval(this.timeCheck)
                                this.timeShow = false
                            }
                            this.time--
                        }, 1000)
                    }
                })
            },
            register() {
                if (this.newPass != this.params.password) {
                    this.$toast.fail('两次输入的密码不一致')
                    return
                }
                this.$toast.loading({
                    message: '加载中...',
                    forbidClick: true,
                    duration: 0
                })
                Register(this.params).then(res => {
                    console.log(res)
                    if (res.data.code == 0) {
                        this.$toast.success('注册成功,正在前往登录页')
                        setTimeout(() => {
                            this.$router.replace('login')
                        }, 2000)
                    } else {
                        this.$toast.fail(res.data.msg)
                    }
                })
            },
            onSubmit() {
                console.log('123123')
                this.register()
            }
        }
    }
</script>

<style scoped lang="scss">
    .bankRegister {
        // width: 100%;
        padding: 0 .2rem 1rem;
    }

    .bank-header {
        margin-top: 1.2rem;
        font-size: .7rem;
        color: #FF1B1B;
        text-align: center;
    }

    // /deep/ .van-button {
    //     color: #fff;
    //     background: linear-gradient(to right, #FF5E5E, #FF1B1B);
    // }

    /deep/ .van-cell {
        padding: .5rem .32rem;
        // border-radius: 6px;

        /deep/ .van-field__error-message {
            position: absolute;
            bottom: -.3rem;
        }
    }

    /deep/ .van-field__label {
        font-size: .24rem;
    }

    /deep/ .van-field__control {
        font-size: .24rem;
    }
</style>