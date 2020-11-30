<template>
    <div class="password">
        <van-nav-bar class="mb20" title="修改密码" left-text="返回" left-arrow @click-left="$goBack()" />
        <van-form validate-first @submit="submit" ref="vanForm">
            <!-- 通过 pattern 进行正则校验 -->
            <van-field v-model="params.old_password" label="旧密码" name="pattern" placeholder="请输入新密码" clearable :rules="[{ validator, message: '请输入大于等于6位数的密码' }]" />
            <!-- 通过 validator 进行函数校验 -->
            <van-field v-model="params.new_password" label="新密码" name="validator" placeholder="请输入旧密码" clearable :rules="[{ validator, message: '请输入大于等于6位数的密码' }]" />
            <div style="margin: 16px;">
                <van-button round block type="danger" native-type="submit">
                    提交
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
    import { ResetPassword } from '../../api/apiPersonal'
    export default {
        data() {
            return {
                pattern: /\d{6}/,
                params: {
                    old_password: '',
                    new_password: '',
                    token: localStorage.getItem('token')
                }
            };
        },
        methods: {
            // 校验函数返回 true 表示校验通过，false 表示不通过
            validator(val) {
                return val.length >= 6;
            },
            onFailed(errorInfo) {
                console.log('failed', errorInfo);
            },
            submit() {
                // console.log('验证通过了')
                this.$toast.loading({
                    message: '加载中...',
                    forbidClick: true,
                    duration: 0
                })
                ResetPassword({
                    token: this.params.token,
                    old_password: this.$md5(this.params.old_password),
                    new_password: this.$md5(this.params.new_password)
                }).then(res => {
                    console.log(res)
                    if(res.data.code == 200) {
                        this.$toast.success('修改完成')
                        Object.assign(this.$data, this.$options.data()) // 重置表单所有信息
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