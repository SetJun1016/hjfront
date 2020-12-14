<template>
    <div class="pullNew">
        <!-- <van-nav-bar :left-text="title" class="red" left-arrow @click-left="$goBack()" /> -->
        <div class="navbar"
            :class="app == 21 ? 'cloud' : app == 22 ? 'alipay' : app == 31 ? 'mt' : app == 23 ? 'jd' : app == 29 ? 'jdbt' : ''">
            <van-icon @click="$router.go(-1)" name="arrow-left" />
            <p @click="$router.go(-1)" v-text="title"></p>
        </div>
        <div ref="title" class="title"
            :class="app == 21 ? 'cloud' : app == 22 ? 'alipay' : app == 31 ? 'mt' : app == 23 ? 'jd' : app == 29 ? 'jdbt' : ''"
            v-text="smallTitle"></div>
        <div class="sector"
            :class="app == 21 ? 'cloud' : app == 22 ? 'alipay' : app == 31 ? 'mt' : app == 23 ? 'jd' : app == 29 ? 'jdbt' : ''"></div>
        <div class='code-box'
            :class="app == 21 ? 'cloudborder' : app == 22 ? 'alipayborder' : app == 31 ? 'mtborder' : app == 23 ? 'jdborder' : app == 29 ? 'jdbtborder' : ''">
            <vue-qr v-if="is_active == 1" class="vue-qr" :logoSrc='config.logo'
                :style="{ width: '100%', height: '100%' }" :text="url" :logoScale="50" :size="300"></vue-qr>
            <img v-else @click="$emit('active-code')" :style="{ width: '80%', height: '80%', padding: '10%' }"
                src="../../../static/img/goData.jpg" alt="">
        </div>
        <div class="code-tip" v-if="is_active == 1" v-text="content"></div>
        <div class="code-tip" v-else @click="$emit('active-code')">点击激活</div>
        <div v-if="detailShow" class="take-out-content mt20"
            :class="app == 21 ? 'cloud' : app == 22 ? 'alipay' : app == 31 ? 'mt' : app == 23 ? 'jd' : app == 29 ? 'jdbt' : ''">
            <div class="take-out-content-one"
                :class="app == 21 ? 'cloudb' : app == 22 ? 'alipayb' : app == 31 ? 'mtb' : app == 23 ? 'jdb' : app == 29 ? 'jdbtb' : ''">
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
        <div class="take-out-content-two-con"  :class="detailShow ? '' : 'mt20'">
            <img :src="detailImg" alt="">
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
            } else if(this.app == 29) {
                this.config.logo = '../../../static/img/jdbtIcon.png'
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
        background-image: linear-gradient(to right, #FFB225,#FFB225);
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
        background-image: linear-gradient(to right,#FFB225, #FFB225);

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
        background: linear-gradient(to right,#FFB225,#FFB225);
    }

    .sector {
        border-radius: 0 0 100% 100%;
        width: 100%;
        height: 3rem;
        // background: #f00;
        background-image: linear-gradient(to right,#FFB225, #FFB225);
    }

    .code-box {
        width: 5rem;
        height: 5rem;
        margin: -3rem auto 0;
        border: 0.2rem solid #F83C28;
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

    .mt {
        background: #F7A623;
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