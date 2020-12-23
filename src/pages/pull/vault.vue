<template>
    <div class="alipay">
        <pull-new-user :app='app' :is_active='is_active' :url='url' :smallTitle='smallTitle' title='京东小金库拉新' @active-code='activeCode()'
            content='请使用微信或浏览器扫一扫' detailImg='../../../static/img/xjk_detail.png' :detailShow='false'></pull-new-user>
    </div>
</template>

<script>
    import PullNewUser from '@/components/pull/PullNewUser'
    import {
        GetJdXjk,
        ActiveJdXjk
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
                app: 37,
                smallTitle: ''
            }
        },
        created() {
            GetJdXjk({
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
                    this.smallTitle = '京东小金库拉新啦'
                } else {
                    this.smallTitle = '京东小金库推广码'
                }
            })
        },
        methods: {
            activeCode() {
                ActiveJdXjk({
                    token: localStorage.getItem('token')
                }).then(res => {
                    console.log(res)
                    this.is_active = res.data.data[0].is_active
                    this.url = res.data.data[0].url
                    if (this.is_active === 0) {
                        this.smallTitle = '京东小金库拉新啦'
                    } else {
                        this.smallTitle = '京东小金库推广码'
                    }
                })
            }
        }
    }
</script>

<style scoped lang="scss">

</style>