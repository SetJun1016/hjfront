<template>
    <div class="login">
        <!-- <img src="@/assets/img/hi.png" alt=""> -->
        <div class="login-title">推广端</div>
        <van-form class="mt40" @submit="onSubmit">
            <van-field label-width='4em' class="brt" v-model="params.phone" left-icon='manager' name="手机号" label="手机号"
                placeholder="请输入手机号" :rules="[{ required: true, message: '请填写11位数字的手机号' }]" />
            <van-field label-width='4em' class="brb" v-model="params.password" left-icon='lock' type="password"
                name="密码" label="密码" placeholder="请输入登录密码" :rules="[{ required: true, message: '请填写6位以上的密码' }]" />
            <div class="mt20 dfs">
                <!-- <router-link to='/register'>注册账号</router-link>  -->
                <!-- <div @click="$router.push({path: 'bankRegister', query: {type: 'noBank'}})">注册账号</div>  -->
                <div @click="$router.push('register')">注册账号</div>
                <router-link to='/forgetPassword'>忘记密码？</router-link>
            </div>
            <div class="mt40">
                <van-button round block native-type="submit">
                    确定
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
    import {
        Login
    } from '@/api/apiLogin'
    export default {
        name: 'login',
        data() {
            return {
                value1: '',
                params: {
                    phone: '',
                    password: ''
                }
            }
        },
        created() {

        },
        methods: {
            onSubmit() {
                this.$toast.loading({
                    message: '加载中...',
                    forbidClick: true,
                    duration: 0
                })
                Login({
                    phone: this.params.phone,
                    password: this.params.password
                }).then(res => {
                    // console.log(res)
                    if (res.data.code == 0) {
                        localStorage.setItem('token', res.data.data.token)
                        // this.$store.dispatch('handle_userInfo', JSON.stringify(res.data.data))
                        // console.log(JSON.parse(this.$store.getters.userInfo))
                        this.$router.replace('/')
                    } else {
                        this.$toast(res.data.msg)
                    }
                })
            }
        }
    }
</script>

<style lang='scss' scoped>
    .login {
        padding: 0 .2rem;

        &-title {
            margin-top: 1.4rem;
            font-size: .7rem;
            color: #FF1B1B;
            text-align: center;
        }

        /deep/ .van-cell {
            padding: .5rem .32rem;
            // border-radius: 6px;

            /deep/ .van-field__error-message {
                position: absolute;
                bottom: -.3rem;
            }
        }

        /deep/ .van-button {
            color: #fff;
            background: linear-gradient(to right, #FF5E5E, #FF1B1B);
        }

        /deep/ .van-field__label {
            font-size: .24rem;
        }

        /deep/ .van-field__control {
            font-size: .24rem;
        }

        .brt {
            border-radius: 6px 6px 0 0;
        }

        .brb {
            border-radius: 0 0 6px 6px;
        }
    }
</style>