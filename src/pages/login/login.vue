<template>
    <div class="login">
        <img src="@/assets/img/hi.png" alt="">
        <div class="small-title">欢迎来到供应链系统</div>
        <div class="mt10 ls">赶快登录查看吧</div>
        <van-form class="mt40" @submit="onSubmit">
            <van-field class="brt" v-model="params.mobile" left-icon='manager' name="手机号" label="手机号" placeholder="请输入手机号" :rules="[{ required: true, message: '请填写11位数字的手机号' }]" />
            <van-field class="brb" v-model="params.password" left-icon='lock' type="password" name="密码" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写6位以上的密码' }]" />
            <div class="mt15 tr">
                <router-link to='/forgetPassword'>忘记密码？</router-link>
            </div>
            <div class="mt20">
                <van-button round block type="info" native-type="submit">
                    登录
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
    import { Login } from '@/api/apiLogin'
    export default {
        name: 'login',
        data() {
            return {
                value1: '',
                params: {
                    mobile: '',
                    password: ''
                }
            }
        },
        created() {

        },
        methods: {
            onSubmit() {
                Login({
                    mobile: this.params.mobile,
                    password: this.$md5(this.params.password)
                }).then(res => {
                    // console.log(res)
                    if (res.data.code == 200) {
                        localStorage.setItem('token', res.data.data.token)
                        this.$store.dispatch('handle_userInfo', JSON.stringify(res.data.data))
                        console.log(JSON.parse(this.$store.getters.userInfo))
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
        padding: 0 .3rem;

        img {
            width: 1.1rem;
            height: 1.1rem;
            margin: 1.4rem 0 0 0;
        }

        .small-title {
            margin-top: .2rem;
            font-size: .4rem;
            color: #000;
            font-weight: 600;
            letter-spacing: .02rem;
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
            width: 4.2em;
        }

        .brt {
            border-radius: 6px 6px 0 0;
        }

        .brb {
            border-radius: 0 0 6px 6px;
        }
    }
</style>