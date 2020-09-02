<template>
    <div class="password">
        <van-nav-bar class="mb20" title="修改绑定手机号" left-text="返回" left-arrow @click-left="$goBack()" />
        <van-form validate-first @submit="submit" ref="vanForm">
            <!-- 通过 pattern 进行正则校验 -->
            <van-field v-model="params.phone" label="新手机号" left-icon='manager' name="pattern" placeholder="请输入要绑定的手机号" clearable :rules="[{ validator, message: '请输入正确的手机号码' }]" />
            <!-- 通过 validator 进行函数校验 -->
            <van-field class="brb" v-model="params.captcha" left-icon='info' center clearable label="短信验证码" placeholder="请输入短信验证码" :rules="[{ required: true, message: '请输入正确的短信验证码' }]">
                <template #button>
                    <van-button @click="getCode" native-type="button" :disabled='timeShow' size="small" type="primary">{{ timeShow ? time + '秒后重新获取' : '发送验证码' }}</van-button>
                </template>
            </van-field>
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">
                    提交
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
    import { GetCode } from '../../api/apiLogin'
    import { UpdatePhone } from '../../api/apiPersonal'
    export default {
        data() {
            return {
                params: {
                    phone: '',
                    captcha: '',
                    token: localStorage.getItem('token')
                },
                timeShow: false, // 倒计时时间是否显示
                time: 60
            };
        },
        methods: {
            // 校验函数返回 true 表示校验通过，false 表示不通过
            validator(val) {
                return (/^1[3456789]\d{9}$/.test(val));
            },
            // 获取验证码
            getCode() {
                if (this.params.phone == '') {
                    console.log('2222')
                    this.$toast('请输入手机号')
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
            },
            submit() {
                // console.log('验证通过了')
                this.$toast.loading({
                    message: '加载中...',
                    forbidClick: true,
                    duration: 0
                })
                UpdatePhone(this.params).then(res => {
                    console.log(res)
                    if(res.data.code == 200) {
                        this.$toast.success('修改完成')
                        Object.assign(this.$data, this.$options.data()) // 重置表单所有信息
                    } else {
                        this.$toast.fail(res.data.msg)
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
            bottom: -.3rem;
        }
    }

    /deep/ .van-field__label {
        width: 5.2em;
        font-size: .24rem;
    }
</style>