<template>
    <div class="alipay">
        <pull-new-user :app='app' :is_active='is_active' :url='url' :smallTitle='smallTitle' @active-code='activeCode()' title='京东网页版拉新' content='请使用京东App扫一扫'></pull-new-user>
    </div>
</template>

<script>
    import PullNewUser from '@/components/pull/PullNewUser'
    import {
        GetJdCode,
        ActiveJdCode
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
                app: 31,
                smallTitle: '',
                app: 23
            }
        },
        created() {
            GetJdCode({
                token: localStorage.getItem('token')
            }).then(res => {
                if(res.data.code == 400) {
                    this.$toast(res.data.msg)
                    return
                }
                console.log(res)
                this.is_active = res.data.data[0].is_active
                this.url = res.data.data[0].url
                if(this.is_active === 0) {
                    this.smallTitle = '京东网页版拉新'
                } else {
                    this.smallTitle = '京东网页版推广码'
                }
            })
        },
        methods: {
            activeCode() {
                ActiveJdCode({
                    token: localStorage.getItem('token')
                }).then(res => {
                    console.log(res)
                    this.is_active = res.data.data[0].is_active
                    this.url = res.data.data[0].url
                })
            }
        }
    }
</script>

<style scoped lang="scss">

</style>