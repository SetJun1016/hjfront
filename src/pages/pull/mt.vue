<template>
    <div class="alipay">
        <pull-new-user :app='app' :is_active='is_active' :url='url' :smallTitle='smallTitle' title='美团拉新' @active-code='activeCode()'
            content='请使用美团App扫一扫'></pull-new-user>
    </div>
</template>

<script>
    import PullNewUser from '@/components/pull/PullNewUser'
    import {
        GetMtCode,
        ActiveMtCode
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
                smallTitle: ''
            }
        },
        created() {
            GetMtCode({
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
                    this.smallTitle = '美团用户拉新啦'
                } else {
                    this.smallTitle = '美团推广码'
                }
            })
        },
        methods: {
            activeCode() {
                ActiveMtCode({
                    token: localStorage.getItem('token')
                }).then(res => {
                    console.log(res)
                    this.is_active = res.data.data[0].is_active
                    this.url = res.data.data[0].url
                    if (this.is_active === 0) {
                        this.smallTitle = '美团用户拉新啦'
                    } else {
                        this.smallTitle = '美团推广码'
                    }
                })
            }
        }
    }
</script>

<style scoped lang="scss">

</style>