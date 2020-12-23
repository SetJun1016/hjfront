<template>
    <div class="list">
        <div class="list-title">
            <!-- <img src="../../../static/img/list_top.png" alt=""> -->
            <div class="list-title-name">拉新数据</div>
            <!-- <div class="list-title-box">
                <img src="../../../static/img/pic.png" class="list-title-img" />
                <div class="list-img"></div>
                <div class="list-bottom mt20">
                    <div>
                        <p>30</p>
                        <p>已提现收益</p>
                    </div>
                    <div>
                        <p>50</p>
                        <p>待提现收益</p>
                    </div>
                    <div>
                        <p>80</p>
                        <p>累计收益</p>
                    </div>
                </div>
            </div> -->
            <div class="list-box" :class="index == 0 ? 'mt100' : ''" v-for="(item, index) in listData" :key="index" @click="$router.push({path: '/list', query: { app: item.name }})">
                <div class="list-box-img dfl">
                    <img :src="item.image" alt="">
                    <p v-text="item.name"></p>
                </div>
                <div class="line-bottom">
                    <div>
                        <p v-text="item.yesterday"></p>
                        <p v-text="item.yesterday_name"></p>
                    </div>
                    <div>
                        <p v-text="item.month"></p>
                        <p v-text="item.month_name"></p>
                    </div>
                    <div>
                        <p v-text="item.year"></p>
                        <p v-text="item.year_name"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        GetList
    } from '@/api/apiList'
    export default {
        name: 'vueName',
        data() {
            return {
                msg: 'Welcome to your vueName',
                listData: []
            }
        },
        created() {
            this.$toast.loading({
                message: '加载中...',
                forbidClick: true,
                duration: 0
            })
            GetList({
                token: localStorage.getItem('token')
            }).then(res => {
                console.log(res)
                this.listData = res.data.data.app
            })
        }
    }
</script>

<style scoped lang="scss">
    .list {
        margin-bottom: 2rem;

        &-title {
            width: 100%;
            // height: 3rem;
            min-height: 5rem;
            background: url(../../../static/img/list_top.png);
            background-size: 100%;
            background-repeat: no-repeat;
            position: relative;

            &-img {
                position: absolute;
                top: -.5rem;
                left: 50%;
                transform: translateX(-50%);
                width: 1rem;
                height: 1rem;
                border-radius: 50%;
            }

            &-name {
                // width: 100%;
                text-align: center;
                padding-top: .6rem;
                color: #fff;
                font-size: .42rem;
            }

            &-box {
                width: 92%;
                height: 2.5rem;
                margin: .7rem auto .3rem;
                background: #fff;
                border-radius: 8px;
                box-shadow: 0 0.08rem 0.48rem rgba(19, 104, 158, 0.2);
                position: relative;
            }

            .list-img {
                width: 100%;
                height: .5rem;
            }

            .list-bottom {
                display: flex;
                justify-content: space-between;
                // padding-top: 1.3rem;
                border-top: .01rem solid #efefef;
                padding: .4rem 0;

                div {

                    box-sizing: border-box;
                    width: 33%;
                    text-align: center;

                    p+p {
                        margin-top: .1rem;
                    }
                }

                div+div {
                    border-left: .015rem solid #efefef;
                }
            }
        }

        .mt100 {
            margin-top: .8rem;
            z-index: 2;
        }

        &-box {
            width: 88%;
            height: 2.2rem;
            padding: .2rem 2%;
            margin: .3rem auto .3rem;
            background: #fff;
            border-radius: 8px;
            box-shadow: 0 0.08rem 0.48rem rgba(19, 104, 158, 0.2);

            &-img {
                padding: 0 0 .15rem 0;
                border-bottom: .015rem solid #efefef;

                img {
                    width: .8rem;
                    height: .8rem;
                    margin-right: .2rem;
                    margin-left: .1rem;
                    border-radius: 50%;
                }

            }

            .line-bottom {
                display: flex;
                justify-content: space-between;
                padding: .4rem 0;

                div {

                    box-sizing: border-box;
                    width: 33%;
                    text-align: center;

                    p+p {
                        margin-top: .1rem;
                    }
                }

                div+div {
                    border-left: .015rem solid #efefef;
                }
            }
        }
    }
</style>