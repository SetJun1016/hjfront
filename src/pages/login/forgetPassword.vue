<template>
    <div class="forget">
        <header class="tc">忘记密码</header>
        <van-form class="mt40" @submit="onSubmit">
            <van-field class="brt" v-model="params.phone" type='number' left-icon='manager' name="手机号" label="手机号" placeholder="请输入手机号" :rules="[{ required: true, message: '请填写11位数字的手机号' }]" />
            <van-field v-model="params.password" left-icon='lock' type="password" name="请输入密码" label="新密码" placeholder="请输入新密码" :rules="[{ required: true, message: '请填写6位及以上的密码' }]" />
            <van-field class="brb" v-model="params.captcha" left-icon='info' center clearable label="短信验证码" placeholder="请输入短信验证码" :rules="[{ required: true, message: '请输入验证码' }]">
                <template #button>
                    <van-button @click="getCode" native-type="button" :disabled='timeShow' size="small" type="primary">{{ timeShow ? time + '秒后重新获取' : '发送验证码' }}</van-button>
                </template>
            </van-field>
            <div class="mt15 tr">
                <router-link to='/login'>去登陆</router-link>
            </div>
            <div class="mt20">
                <van-button round block type="info" native-type="submit">
                    确定
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
    import { Forgot, GetCode } from '@/api/apiLogin'
    export default {
        data() {
            return {
                params: {
                    phone: '',
                    captcha: '',
                    password: ''
                },
                timeShow: false, // 倒计时时间是否显示
                time: 60
            }
        },
        methods: {
            onSubmit() {
                Forgot({
                    phone: this.params.phone,
                    captcha: this.params.captcha,
                    password: this.$md5(this.params.password)
                }).then(res => {
                    console.log(res)
                })
            },
            // 获取验证码
            getCode() {
                if (this.params.phone == '' || this.params.password == '') {
                    console.log('2222')
                    return
                }
                // 调获取验证码接口
                GetCode({
                    phone: this.params.phone
                }).then(res => {
                    console.log(res)
                    if (res.data.code == 200) {
                        this.timeShow = true
                        this.$toast('已发送短信');
                        var auth_timetimer = setInterval(() => {
                            this.time--
                            if (this.time <= 0) {
                                this.timeShow = false
                                clearInterval(auth_timetimer)
                            }
                        }, 1000)
                    } else {
                        this.$toast(res.data.msg);
                    }
                })
            }
        }
    }
</script>

<style lang='scss' scoped>
    .forget {
        padding: 0 .3rem;
    }

    header {
        color: #0485fe;
        font-size: .62rem;
        margin-top: 2.5rem;
    }

    /deep/ .van-cell {
        padding: .5rem .32rem;
        // border-radius: 6px;

        /deep/ .van-field__error-message {
            position: absolute;
            bottom: -.3rem;
        }
    }

    /deep/ .van-field__label {
        width: 5.2em;
        font-size: .24rem;
    }

    .brt {
        border-radius: 6px 6px 0 0;
    }

    .brb {
        border-radius: 0 0 6px 6px;
    }

    /deep/ .van-button--small {
        width: 1.56rem;
    }
</style>