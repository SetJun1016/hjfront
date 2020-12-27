<template>
    <div class="home">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item, index) in banner_list" :key="index">
                <img :src="item.image" alt="">
            </van-swipe-item>
            <!-- <van-swipe-item>
                <div class="rows-swiper">
                    <div class="rows-swiper-title">
                        本月累计发放酬金（元）
                    </div>
                    <div class="rows-swiper-amount">
                        32422.80
                    </div>
                    <div class="dfl rows-swiper-size mt15">
                        <p>
                            昨日累计发放酬金
                        </p>
                        <p>
                            2320.2
                        </p>
                    </div>
                    <div class="dfl rows-swiper-size mt15">
                        <p>
                            昨日收入榜首
                        </p>
                        <p class="ml20">
                            张 **
                        </p>
                        <p>
                            2320.2
                        </p>
                    </div>
                </div>
            </van-swipe-item> -->
        </van-swipe>
        <van-notice-bar left-icon="volume-o" :scrollable="false">
            <van-swipe vertical class="notice-swipe" :autoplay="3000" :show-indicators="false">
                <van-swipe-item v-for="(item, index) in tipList" :key="index"
                    v-text="item.name  + item.day + '推广' + item.app + '有效户' + item.valid_user_count + '户'">
                </van-swipe-item>
            </van-swipe>
        </van-notice-bar>
        <van-grid square column-num="4" class="mt10">
            <van-grid-item @click="goApp(item.app, item.is_checked)" v-for="(item, index) in app" :key="index" :icon="item.image"
                :text="item.name" />
        </van-grid>
        <!-- <div class="mt10"> -->
            <!-- <div>云闪付</div> -->
        <!-- </div> -->
        <div class="mt10 task">
            <div class="task-title">任务推荐</div>
            <div class="task-box mt10" v-for="(item, index) in app" :key="index">
                <div class="task-box-title" v-text="item.name + '拉新'"></div>
                <div class="task-box-detail">
                    <!-- <p>支付宝新用户，领取话费红包、线下支付红包等任一新人红包并完成核销后，即可获得拉新奖励。</p> -->
                    <p v-text="item.desc"></p>
                    <p @click="goApp(item.app, item.is_checked)">立即领取</p>
                </div>
                <div class="task-box-price mt5">佣金单价:{{ item.unit_price + '元/有效户' }}</div>
                <!-- <div class="task-box-content mt5"> -->
                <!-- <div class="dfl contentW50">
                        <p>有效用户数:</p>
                        <p class="ml5" v-text="item.valid_user_count"></p>
                    </div> -->
                <!-- <div class="dfl contentW50">
                        <p>有效确认用户数:</p>
                        <p class="ml5" v-text="item.valid_confirm_user_count"></p>
                    </div> -->
                <!-- </div> -->
                <div class="task-box-content mt15">
                    <!-- <div class="dfl contentW50">
                        <p>领取人数:</p>
                        <p class="ml5" v-text="item.receive_user_count"></p>
                    </div> -->
                    <div class="dfl contentW50">
                        <p>发放酬金:</p>
                        <p class="ml5" v-text="item.grant_price + '元'"></p>
                    </div>
                </div>
                <div class="dfs task-box-bottom">
                    <div class="bottom-group">
                        <p>高酬金</p>
                        <p>推荐</p>
                        <p>热门</p>
                    </div>
                    <!-- <div class="bottom-right">已报名: 正在统计中...</div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        GetIndex
    } from '@/api/apiIndex'
    export default {
        name: 'vueName',
        data() {
            return {
                msg: 'Welcome to your vueName',
                app: [],
                banner_list: [],
                tipList: [],
                firstName: "赵钱孙李周吴郑王冯陈褚卫蒋沈韩杨朱秦尤许何吕施张孔曹严华金魏陶姜戚谢邹喻柏水窦章云苏潘葛奚范彭郎鲁韦昌马苗凤花方俞任袁柳酆鲍史唐费廉岑薛雷贺倪汤滕殷罗毕郝邬安常乐于时傅皮卞齐康伍余元卜顾孟平黄和穆萧尹姚邵湛汪祁毛禹狄米贝明臧计伏成戴谈宋茅庞熊纪舒屈项祝董梁杜阮蓝闵席季麻强贾路娄危江童颜郭梅盛林刁钟徐邱骆高夏蔡田樊胡凌霍虞万支柯咎管卢莫经房裘缪干解应宗宣丁贲邓郁单杭洪包诸左石崔吉钮龚程嵇邢滑裴陆荣翁荀羊於惠甄魏加封芮羿储靳汲邴糜松井段富巫乌焦巴弓牧隗山谷车侯宓蓬全郗班仰秋仲伊宫宁仇栾暴甘钭厉戎祖武符刘姜詹束龙叶幸司韶郜黎蓟薄印宿白怀蒲台从鄂索咸籍赖卓蔺屠蒙池乔阴郁胥能苍双闻莘党翟谭贡劳逄姬申扶堵冉宰郦雍却璩桑桂濮牛寿通边扈燕冀郏浦尚农温别庄晏柴瞿阎充慕连茹习宦艾鱼容向古易慎戈廖庚终暨居衡步都耿满弘匡国文寇广禄阙东殴殳沃利蔚越夔隆师巩厍聂晁勾敖融冷訾辛阚那简饶空曾毋沙乜养鞠须丰巢关蒯相查后江红游竺权逯盖益桓公万俟司马上官欧阳夏侯诸葛闻人东方赫连皇甫尉迟公羊澹台公冶宗政濮阳淳于仲孙太叔申屠公孙乐正轩辕令狐钟离闾丘长孙慕容鲜于宇文司徒司空亓官司寇仉督子车颛孙端木巫马公西漆雕乐正壤驷公良拓拔夹谷宰父谷粱晋楚阎法汝鄢涂钦段干百里东郭南门呼延归海羊舌微生岳帅缑亢况后有琴梁丘左丘东门西门商牟佘佴伯赏南宫墨哈谯笪年爱阳佟第五言福百家姓续",
                girl: "秀娟英华慧巧美娜静淑惠珠翠雅芝玉萍红娥玲芬芳燕彩春菊兰凤洁梅琳素云莲真环雪荣爱妹霞香月莺媛艳瑞凡佳嘉琼勤珍贞莉桂娣叶璧璐娅琦晶妍茜秋珊莎锦黛青倩婷姣婉娴瑾颖露瑶怡婵雁蓓纨仪荷丹蓉眉君琴蕊薇菁梦岚苑婕馨瑗琰韵融园艺咏卿聪澜纯毓悦昭冰爽琬茗羽希宁欣飘育滢馥筠柔竹霭凝晓欢霄枫芸菲寒伊亚宜可姬舒影荔枝思丽伟刚勇毅俊峰强军平保东文辉力明永健世广志义兴良海山仁波宁贵福生龙元全国胜学祥才发武新利清飞彬富顺信子杰涛昌成康星光天达安岩中茂进林有坚和彪博诚先敬震振壮会思群豪心邦承乐绍功松善厚庆磊民友裕河哲江超浩亮政谦亨奇固之轮翰朗伯宏言若鸣朋斌梁栋维启克伦翔旭鹏泽晨辰士以建家致树炎德行时泰盛雄琛钧冠策腾楠榕风航弘甄魏加封芮羿储靳汲邴糜松井段富巫乌焦巴弓牧隗山谷车侯宓蓬全郗班仰秋仲伊宫宁仇栾暴甘钭厉戎祖武符刘姜詹束龙叶幸司韶郜黎蓟薄印宿白怀蒲台从鄂索咸籍赖卓蔺屠蒙池乔阴郁胥能苍双闻莘党翟谭贡劳逄姬申扶堵冉宰郦雍却璩桑桂濮牛寿通边扈文寇广禄阙东殴殳沃利蔚越夔隆师巩厍聂晁勾敖融冷訾辛阚那简饶空曾毋沙乜养鞠须丰巢关蒯相查后江红游竺权逯盖益桓公万俟司马上官欧阳夏侯诸葛闻人东方赫连皇甫尉迟公羊澹台公冶宗政濮阳淳于仲孙太叔申屠公孙乐正轩辕令狐钟离闾丘长孙慕",
                apps: ['支付宝', '云闪付', '苏宁易购', '京东小金库', ],
                cloumnNum: 5
            }
        },
        created() {
            this.$toast.loading({
                message: '加载中...',
                forbidClick: true,
                duration: 0
            })
            let token = localStorage.getItem('token')
            if (token) {

            }
            GetIndex({
                token: localStorage.getItem('token')
            }).then(res => {
                console.log(res)
                this.app = res.data.data.app
                // if (this.app.length <= 5) {
                //     this.cloumnNum = this.app.length
                // } else if (this.app.length <= 8) {
                //     this.cloumnNum = 4
                // } else if (this.app.length < 10) {
                //     this.cloumnNum = 5
                // } else {
                //     this.cloumnNum = 6
                // }
                this.banner_list = res.data.data.banner_list
                // console.log(this.data)
            })
            for (let k = 0; k < 20; k++) {
                this.tipList.push(this.getRandomText())
            }
        },
        methods: {
            goApp(app, is_checked) {
                if(is_checked == 2) {
                    this.$toast.fail('正在维护中...')
                } else if (app == 21) {
                    // Toast('正在开发中')
                    // this.$toast('正在维护中...')
                    this.$router.push('yun')
                } else if (app == 22) {
                    this.$router.push('alipay')
                } else if (app == 31) {
                    this.$router.push('mt')
                } else if (app == 23) {
                    this.$router.push('jd')
                } else if (app == 29) {
                    this.$router.push('jdbt')
                } else if(app == 34) {
                    this.$router.push('snyg')
                } else if(app == 37) {
                    this.$router.push('vault')
                } else {
                    this.$toast.fail('正在维护中...')
                }
            },
            getRandomText() {
                // console.log(Math.floor(Math.random() * 568))
                // console.log(this.firstName.length)
                // console.log(this.girl.length)
                let sum = Math.floor(Math.random() * 519)
                let sum2 = Math.floor(Math.random() * 568)
                // let sum3 = Math.floor(Math.random() * 568)
                let t = this.firstName.substring(sum, sum + 1)
                let t2 = this.girl.substring(sum2, sum2 + 1)
                // let t3 = this.girl.substring(sum3, sum3 + 1)
                let name = t + '**' + t2
                let app = this.apps[Math.floor(Math.random() * 4)]
                let day = '昨日'
                let valid_user_count = Math.floor(Math.random() * 40)
                // console.log(t)
                // console.log(this.boy.length)
                return {
                    name: name,
                    app: app,
                    day: day,
                    valid_user_count: valid_user_count
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .my-swipe {
        width: 100%;
        height: 3.5rem;

        img {
            width: 100%;
            height: 3.5rem;
        }
    }

    .my-swipe .van-swipe-item {
        // color: #fff;
        // font-size: 20px;
        height: 3.5rem;
        // background-color: #39a9ed;

        .rows-swiper {
            width: 100%;
            height: 100%;
            color: #fff;
            background: linear-gradient(to right, #FF5E5E, #FF1B1B);
            display: flex;
            flex-direction: column;
            // align-items: center;

            &-title {
                padding: .6rem .3rem .2rem;
                font-size: .35rem;
            }

            &-amount {
                font-size: .45rem;
                padding: 0 .3rem;
            }

            &-size {
                padding: 0rem .3rem;

                :last-child {
                    font-size: .32rem;
                    margin-left: .5rem;
                }
            }


        }
    }


    .home {
        width: 100%;
        background: #f8f8f8;
        margin-bottom: 1.2rem;
    }

    /deep/ .van-grid-item__text {
        font-size: .2rem !important;
        // overflow: hidden;
    }

    // .icon-box {
    //     // height: 1.8rem;
    //     background: #fff;
    //     display: flex;
    //     align-items: center;
    //     flex-wrap: wrap;
    //     justify-content: space-around;
    //     padding: 0 .3rem;

    //     .icon-box-img {
    //         width: 1.2rem;
    //         height: 1.4rem;
    //         text-align: center;
    //         font-size: .24rem;
    //         // margin-top: .2rem;

    //         img {
    //             width: .8rem;
    //             height: .8rem;
    //             // height: 100%;
    //         }

    //         p {
    //             margin-top: .1rem;
    //         }
    //     }
    // }

    /deep/ .van-grid {
        background: #fff;
    }

    .task {
        background: #fff;
        padding: .3rem;

        &-title {
            color: #000;
            font-size: .32rem;
        }

        &-box {
            width: 100%;
            // height: 4rem;
            padding: .25rem;
            border-left: .1rem solid #FF1B1B;
            box-sizing: border-box;
            box-shadow: 0 0 10px #e5e5e5;

            &-title {
                font-size: .32rem;
                color: #000;
            }

            &-detail {
                padding: .1rem 0;
                font-size: .22rem;
                color: #888;
                display: flex;
                justify-content: space-between;
                align-items: center;

                :first-child {
                    width: 75%;
                    line-height: .3rem;
                }

                :last-child {
                    width: 20%;
                    height: .6rem;
                    background: linear-gradient(to right, #FF5E5E, #FF1B1B);
                    border-radius: 20px;
                    line-height: .6rem;
                    text-align: center;
                    color: #fff;
                }
            }

            &-price {
                font-size: .3rem;
                color: #FF5E5E;
            }

            &-content {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                font-size: .26rem;
                padding-bottom: .2rem;
                border-bottom: .015rem dashed #ddd;

                .contentW50 {
                    width: 50%;
                    margin-top: .1rem;
                    color: #8B8B8B;
                }
            }

            &-bottom {
                padding: .2rem 0 0;

                .bottom-group {
                    display: flex;

                    p {
                        width: .8rem;
                        height: .4rem;
                        color: #fff;
                        text-align: center;
                        line-height: .4rem;
                        font-size: .22rem;
                        border: .015rem solid #FF1B1B;
                        color: #FF1B1B;
                        // background:  #FF1B1B;
                        margin-right: .1rem;
                    }
                }

                .bottom-right {
                    font-size: .22rem;
                    color: #FF1B1B;
                }
            }
        }
    }

    .notice-swipe {
        height: .7rem;
        line-height: .7rem;
        font-size: .24rem;
        color: #FF1B1B;
        // background: #fff;
        // margin-top: .2;
    }

    /deep/ .van-notice-bar {
        margin-top: .2rem;
        background: #fff;
        color: #FF1B1B;
    }
</style>