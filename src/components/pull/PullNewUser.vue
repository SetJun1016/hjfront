<template>
    <div class="pullNew">
        <van-nav-bar :left-text="title" left-arrow @click-left="$goBack()" />
        <div class="title" v-text="is_active == 1 ? '推广码' : '支付宝拉新'"></div>
        <div class="sector"></div>
        <div class='code-box'>
            <vue-qr v-if="is_active == 1" class="vue-qr" :logoSrc='config.logo' :style="{ width: '100%', height: '100%' }" :text="url" :logoScale="50" :size="300"></vue-qr>
        </div>
        <div class="code-tip" v-if="is_active == 1">请使用支付宝APP扫一扫</div>
        <div class="code-tip" v-else @click="$emit('active-code')">点击激活</div>
        <div class="take-out-content mt20">
            <div class="take-out-content-one">
                <div class="take-out-content-two">
                    <div class="take-out-content-two-header">
                        <span>
                            拉新注意事项
                        </span>
                    </div>
                    <div class="take-out-content-two-con">
                        <p>1、务必先通过浏览器扫码完成手机号的领奖，再去注册登录，保证领取到对应的奖品。若遇部分浏览器扫码后无法跳转激活，切换其他浏览器扫码。</p>
                        <p>2、务必先通过浏览器扫码完成手机号的领奖，再去注册登录，保证领取到对应的奖品。若遇部分浏览器扫码后无法跳转激活，切换其他浏览器扫码。</p>
                        <p>3、务必先通过浏览器扫码完成手机号的领奖，再去注册登录，保证领取到对应的奖品。若遇部分浏览器扫码后无法跳转激活，切换其他浏览器扫码。</p>
                    </div>
                    <div class="take-out-content-two-header mt25">
                        <span>
                            支付宝拉新操作流程
                        </span>
                    </div>
                    <div class="take-out-content-two-con">
                        <img src="http://jho2o.oss-cn-beijing.aliyuncs.com/test/2Oh4E92m.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import VueQr from 'vue-qr'
    export default {
        components: {
            VueQr
        },
        name: 'vueName',
        data() {
            return {
                config: {
                    logo: '../../../static/img/alipayIcon.png', //默认二维码中间图片
                    text: this.url //二维码内容,编码格式默认使用base64
                }
            }
        },
        props: {
            title: {
                type: String,
                default: '支付宝拉新'
            },
            is_active: {
                type: Number,
                default: 0
            },
            url: {
                type: String,
                default: ''
            }
        },
        methods: {
            onClickLeft() {

            }
        },
    }
</script>

<style scoped lang="scss">
    /deep/ .van-nav-bar .van-icon,
    /deep/ .van-nav-bar__text,
    /deep/ .van-nav-bar__title {
        color: #fff;
    }

    /deep/ .van-nav-bar__content {
        // background: #f00;
        background-image: linear-gradient(to right, #06b4fd, #6ABBFB);
    }

    .title {
        font-size: .4rem;
        padding: .4rem 0;
        color: #fff;
        text-align: center;
        background: linear-gradient(to right, #06b4fd, #6ABBFB);
    }

    .sector {
        border-radius: 0 0 100% 100%;
        width: 100%;
        height: 3rem;
        // background: #f00;
        background-image: linear-gradient(to right, #06b4fd, #6ABBFB);
    }

    .code-box {
        width: 5rem;
        height: 5rem;
        margin: -3rem auto 0;
        border: 0.2rem solid #A2D1FF;
        background: #fff;
        box-sizing: border-box;
    }

    .code-tip {
        width: 5rem;
        height: .8rem;
        line-height: .8rem;
        text-align: center;
        margin: 0 auto;
        box-shadow: 0 0 10px #e5e5e5;
        box-sizing: border-box;
    }

    .take-out-content {
        width: 90%;
        // height: 6rem;
        background: #06b4fd;
        padding: 5%;

        // margin-bottom: 1rem;
        .take-out-content-one {
            width: 94%;
            height: 94%;
            background: #6ABBFB;
            padding: 3%;
            border-radius: 4px;

            .take-out-content-two {
                width: 90%;
                height: 94%;
                background: #fff;
                padding: 5% 5% 0.5rem;
                border-radius: 4px;

                .take-out-content-two-header {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0.2rem 0;

                    span {
                        font-size: 0.36rem;
                        margin: 0 0.1rem;
                        color: #06b4fd;
                        font-weight: 700;
                        letter-spacing: .015rem;
                    }
                }

                .mt25 {
                    margin-top: .5rem;
                }

                .take-out-content-two-con {
                    color: #000;
                    font-size: 0.28rem;
                    line-height: 0.45rem;

                    img {
                        width: 100%;
                    }
                }
            }
        }
    }
</style>