<template>
    <div class="pullNew">
        <!-- <van-nav-bar :left-text="title" class="red" left-arrow @click-left="$goBack()" /> -->
        <div class="navbar"
            :class="app == 21 ? 'cloud' : app == 22 ? 'alipay' : app == 31 ? 'mt' : app == 23 ? 'jd' : app == 29 ? 'jdbt' : app == 34 ? 'snyg' : ''">
            <van-icon @click="$router.go(-1)" name="arrow-left" />
            <p @click="$router.go(-1)" v-text="title"></p>
        </div>
        <div ref="title" class="title"
            :class="app == 21 ? 'cloud' : app == 22 ? 'alipay' : app == 31 ? 'mt' : app == 23 ? 'jd' : app == 29 ? 'jdbt' : app == 34 ? 'snyg' : ''"
            v-text="smallTitle"></div>
        <div class="sector"
            :class="app == 21 ? 'cloud' : app == 22 ? 'alipay' : app == 31 ? 'mt' : app == 23 ? 'jd' : app == 29 ? 'jdbt' : app == 34 ? 'snyg' : ''">
        </div>
        <div class='code-box'
            :class="app == 21 ? 'cloudborder' : app == 22 ? 'alipayborder' : app == 31 ? 'mtborder' : app == 23 ? 'jdborder' : app == 29 ? 'jdbtborder' : app == 34 ? 'snygborder' : ''">
            <vue-qr v-if="is_active == 1" class="vue-qr" :logoSrc='config.logo'
                :style="{ width: '100%', height: '100%' }" :text="url" :logoScale="50" :size="300"></vue-qr>
            <img v-else @click="$emit('active-code')" :style="{ width: '80%', height: '80%', padding: '10%' }"
                src="../../../static/img/goData.jpg" alt="">
        </div>
        <div class="code-tip" v-if="is_active == 1" v-text="content"></div>
        <div class="code-tip" v-else @click="$emit('active-code')">点击激活</div>
        <div class="take-out-content mt20"
            :class="app == 21 ? 'cloud' : app == 22 ? 'alipay' : app == 31 ? 'mt' : app == 23 ? 'jd' : app == 29 ? 'jdbt' : app == 34 ? 'snyg' : ''">
            <div v-if="app == 21" @click="local">
                <div class="cloud box-cloud">
                    <p>云闪付拉新视频教程</p>
                    <div class="start">
                        <img src="../../../static/img/start.png" alt="">
                    </div>
                </div>
            </div>
            <div v-if="app == 31" @click="local">
                <div class="mt-box box-cloud">
                    <p>美团拉新视频教程</p>
                    <div class="start">
                        <img src="../../../static/img/start.png" alt="">
                    </div>
                </div>
            </div>
            <div v-if="app != 31 && app != 34" class="take-out-content-one"
                :class="app == 21 ? 'cloudb' : app == 22 ? 'alipayb' : app == 31 ? 'mtb' : app == 23 ? 'jdb' : app == 29 ? 'jdbtb' : app == 34 ? 'snyg' : ''">
                <div class="take-out-content-two">
                    <div class="take-out-content-two-header">
                        <span>
                            拉新注意事项
                        </span>
                    </div>
                    <div class="take-out-content-two-con">
                        <p v-for="(item, index) in beCareful" :key="index" v-text="item"></p>
                    </div>
                    <!-- <div class="take-out-content-two-header mt25">
                        <span>
                            支付宝拉新操作流程
                        </span>
                    </div> -->
                </div>
            </div>
        </div>
        <div v-if="app == 21" class="cloud" :style="{ padding: '.3rem 0 .5rem 0' }">
            <p class="tc" :style="{ padding: '.3rem', color: '#fff', fontSize: '0.45rem' }">云闪付付款码</p>
            <!-- <img :style="{width: '100%' }" src="../../../static/img/pay.jpg" alt=""> -->
            <vue-qr class="vue-qr" :logoSrc='config.logo' :style="{ width: '80%', height: '80%', marginLeft: '10%' }"
                text="https://mf.jlpay.com/?qrCode=84934014816K04N2020081818273710314701" :logoScale="50" :size="300">
            </vue-qr>
            <!-- <div>打开云闪付APP、银行APP</div> -->
        </div>
        <div class="take-out-content-two-con">
            <img :src="detailImg" alt="">
        </div>
        <div v-if="app == 29" @click="local">
            <div class="bt box-cloud">
                <p>京东金融普通版白条拉新视频教程</p>
                <div class="start">
                    <img src="../../../static/img/start.png" alt="">
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
        created() {
            console.log(this.app)
            if (this.app == 21) {
                this.config.logo = '../../../static/img/cloudIcon.png'
            } else if (this.app == 22) {
                this.config.logo = '../../../static/img/alipayIcon.png'
            } else if (this.app == 23) {
                this.config.logo = '../../../static/img/jdIcon.png'
            } else if (this.app == 31) {
                this.config.logo = '../../../static/img/mtIcon.png'
            } else if (this.app == 29) {
                this.config.logo = '../../../static/img/jdbtIcon.png'
            } else if (this.app == 34) {
                this.config.logo = '../../../static/img/snyg.png'
            }
        },
        props: {
            title: {
                type: String,
                default: ''
            },
            smallTitle: {
                type: String,
                default: ''
            },
            is_active: {
                type: Number,
                default: 0
            },
            url: {
                type: String,
                default: ''
            },
            app: {
                type: Number,
                default: 100
            },
            content: {
                type: String,
                default: ''
            },
            beCareful: {
                type: Array,
                default: () => []
            },
            detailImg: {
                type: String,
                default: ''
            },
            detailShow: {
                type: Boolean,
                default: true
            }
        },
        methods: {
            onClickLeft() {

            },
            local() {
                if (this.app == 21) {
                    window.location.href =
                        'http://mp.weixin.qq.com/mp/video?__biz=MzkzNDE4ODE5Mg==&mid=100000005&sn=4c71aafd6698aa25a1470a5b2184c0af&vid=wxv_1651734696180940801&idx=1&vidsn=0446b1964070fa7463d57a0f0c325c76&fromid=1&xtrack=1&scene=0&subscene=93&clicktime=1608128272&enterid=1608128272&sessionid=0&ascene=7&realreporttime=1608128272631&forceh5=1'
                } else if (this.app == 29) {
                    window.location.href =
                        'http://mp.weixin.qq.com/mp/video?__biz=MzkzNDE4ODE5Mg==&mid=100000007&sn=8b135daef608343cdb284f43c93464f5&vid=wxv_1651774212530864131&idx=1&vidsn=6f95f1826ec9387a4c4d4e4b2de20313&fromid=1&xtrack=1&scene=0&subscene=93&clicktime=1608130944&enterid=1608130944&sessionid=0&ascene=7&realreporttime=1608130945081&forceh5=1'
                } else if (this.app == 31) {
                    window.location.href =
                        'http://mp.weixin.qq.com/mp/video?__biz=MzkzNDE4ODE5Mg==&mid=100000004&sn=f97dfe8cf5bac77f11cbffd30cb0b6a5&vid=wxv_1651729536264273925&idx=1&vidsn=36fc692f0239a996e1580cf9bbc92598&fromid=1&xtrack=1&scene=0&subscene=93&clicktime=1608131568&enterid=1608131568&sessionid=0&ascene=7&realreporttime=1608131568618&forceh5=1'
                }
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
        background-image: linear-gradient(to right, #FFB225, #FFB225);
    }

    .navbar {
        // width: 100%;
        height: .9rem;
        padding: 0 .3rem;
        display: flex;
        align-items: center;
        color: #fff;
        font-size: .32rem;
        // justify-content: ;
        background-image: linear-gradient(to right, #FFB225, #FFB225);

        p {
            margin-left: .1rem;
            // font-size: .32rem;
        }
    }

    .title {
        font-size: .4rem;
        height: .6rem;
        line-height: .6rem;
        padding: .4rem 0;
        color: #fff;
        text-align: center;
        background: linear-gradient(to right, #FFB225, #FFB225);
    }

    .sector {
        border-radius: 0 0 100% 100%;
        width: 100%;
        height: 3rem;
        // background: #f00;
        background-image: linear-gradient(to right, #FFB225, #FFB225);
    }

    .code-box {
        width: 5rem;
        height: 5rem;
        margin: -3rem auto 0;
        border: 0.2rem solid #F83C28;
        background: #fff;
        box-sizing: border-box;
    }

    .bt {
        background: #3493D5;
    }

    .mt-box {
        background: #FE6F0F;
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

    .box-cloud {
        height: 4rem;
        color: #fff;
        text-align: center;
        font-size: .34rem;
        padding: .3rem 0;

        .start {
            width: 80%;
            margin: .5rem auto;
            background: #000;
            height: 3rem;
            border-radius: 6px;
            // line-height: 3rem;

            img {
                width: 1rem;
                height: 1rem;
                margin-top: 1rem;
            }
        }
    }

    .take-out-content {
        width: 90%;
        // height: 6rem;
        background: #FFB225;
        padding: 5%;

        // margin-bottom: 1rem;
        .take-out-content-one {
            width: 94%;
            height: 94%;
            background: #FFB225;
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
                        color: #F83C28;
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

    .snyg {
        background: #2481FA;
    }

    .cloud {
        background: #E4373B;
    }

    .snygborder {
        border: .2rem solid #2481FA !important;
    }

    .mt {
        background: #FE6F0F;
    }

    .mtb {
        background: #FFD387 !important;
    }

    .mtborder {
        border: 0.2rem solid #FFD387 !important;
    }

    .jd {
        background: #F8100A;
    }

    .jdb {
        background: #FE7968 !important;
    }

    .jdborder {
        border: 0.2rem solid #FFD387 !important;
    }

    .jdbt {
        background: #BE2D30;
    }

    .jdbtb {
        background: #FE5F49 !important;
    }

    .jdbtborder {
        border: 0.2rem solid #FE5F49 !important;
    }

    .take-out-content-two-con {
        width: 100%;

        img {
            width: 100%;
        }
    }
</style>