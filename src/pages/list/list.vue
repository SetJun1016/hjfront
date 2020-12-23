<template>
    <div class="list">
        <van-nav-bar :title=" app + '数据总览'" left-text="返回" left-arrow @click-left="$goBack()" />
        <div class="header">
            <p>累计确认有效用户数：0</p>
            <!-- <p>累计确认用户数：50</p>
            <p>累计确认用户数：50</p>
            <p>累计确认用户数：50</p> -->
        </div>
        <div class="content">
            <p class="content-title">数据明细</p>
            <van-empty description="您暂无拉新数据" />
            <!-- <div class="row">
                <div>
                    <p>用户名</p>
                    <p>小张***</p>
                </div>
                <div>
                    <p>确认用户数</p>
                    <p>12</p>
                </div>
                <div>
                    <p>领取用户数</p>
                    <p>12</p>
                </div>
                <div>
                    <p>核销用户数</p>
                    <p>15</p>
                </div>
                <div>
                    <p>有效用户数</p>
                    <p>16</p>
                </div>
                <div>
                    <p>推广时间</p>
                    <p>2020/12/21 20:12:12</p>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
    // import {
    //     GetAlipayData
    // } from '@/api/apiData'
    export default {
        name: 'vueName',
        data() {
            return {
                app: ''
            }
        },
        created() {
            this.app = this.$route.query.app
            this.$toast.clear()
            // GetAlipayData({
            //     token: localStorage.getItem('token')
            // }).then(res => {
            //     console.log(res)
            // })
        }
    }
</script>

<style scoped lang="scss">
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        border-top: .1rem solid #efefef;
        border-bottom: .1rem solid #efefef;
        padding: .2rem .3rem;
        color: #000;

        p {
            line-height: .8rem;
        }
    }

    .content {
        &-title {
            font-size: .3rem;
            color: #000;
            font-weight: 700;
            padding: .2rem .3rem;
            border-bottom: .015rem solid #efefef;
        }

        .row {
            padding: .2rem 0;
            border-bottom: .015rem dashed #efefef;

            div {
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: .24rem;
                padding: 0 .3rem;
                line-height: .5rem;
                color: #000;
            }
        }
    }
</style>