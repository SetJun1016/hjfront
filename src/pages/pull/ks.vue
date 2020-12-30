<template>
    <div class="alipay">
        <pull-new-user :app='app' :is_active='is_active' :url='url' :smallTitle='smallTitle' title='快手极速版拉新' @active-code='activeCode()'
            content='请使用快手极速版App扫一扫' detailImg='../../../static/img/ksDetail.jpg' :detailShow='false'></pull-new-user>
    </div>
</template>

<script>
    import PullNewUser from '@/components/pull/PullNewUser'
    import {
        GetKs,
        ActiveKs
    } from '@/api/apiPull'
    export default {
        components: {
            PullNewUser
        },
        name: 'alipay',
        data() {
            return {
                is_active: 0,
                url: '',
                app: 38,
                smallTitle: ''
            }
        },
        created() {
            GetKs({
                token: localStorage.getItem('token')
            }).then(res => {
                if (res.data.code == 400) {
                    this.$toast(res.data.msg)
                    return
                }
                console.log(res)
                this.is_active = res.data.data[0].is_active
                this.url = res.data.data[0].url
                if (this.is_active === 0) {
                    this.smallTitle = '快手极速版拉新啦'
                } else {
                    this.smallTitle = '快手极速版推广码'
                }
            })
        },
        methods: {
            activeCode() {
                ActiveKs({
                    token: localStorage.getItem('token')
                }).then(res => {
                    console.log(res)
                    this.is_active = res.data.data[0].is_active
                    this.url = res.data.data[0].url
                    if (this.is_active === 0) {
                        this.smallTitle = '快手极速版拉新啦'
                    } else {
                        this.smallTitle = '快手极速版推广码'
                    }
                })
            }
        }
    }
</script>

<style scoped lang="scss">

</style>