<template>
    <div class="delivery">
        <van-nav-bar title="物流信息" class="mb10" left-text="返回" left-arrow @click-left="$goBack()" />
        <div class="m-l-r-10 bgf content">
            <div class="delivery-title p10">{{ result.expName || '暂无物流信息' }} {{ no }}</div>
            <van-empty v-if="resultShow" description="暂未查到您的物流信息" />
            <van-steps v-else direction="vertical" :active="0">
                <van-step v-for="(item, index) in result.list" :key="index">
                    <h3>{{ item.status }}</h3>
                    <p>{{ item.time }}</p>
                </van-step>
            </van-steps>
        </div>
    </div>
</template>

<script>
    import { GetSupplyOrderDetail, GetDelivery } from '../../api/apiOrder'
    export default {
        data() {
            return {
                id: '',
                no: '',
                result: {},
                resultShow: false
            }
        },
        created() {
            this.id = this.$route.query.id
            this.no = this.$route.query.no
            // GetSupplyOrderDetail(this.id).then(res => {
            //     console.log(res)
            // })
            GetDelivery({
                no: this.no
            }).then(res => {
                console.log(res)
                if(res.data.status == '0') {
                    this.resultShow = false
                    this.result = res.data.result
                } else {
                    this.resultShow = true
                }
            })
        },
        methods: {

        }
    }
</script>

<style lang='scss' scoped>
    .content {
        border-radius: 6px;
    }

    .delivery {
        &-title {
            background: #F9FCFE;
        }
    }
</style>