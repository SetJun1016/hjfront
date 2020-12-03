<template>
    <div class="alipay">
        <pull-new-user :is_active='is_active' :url='url' @active-code='activeCode()'></pull-new-user>
    </div>
</template>

<script>
    import PullNewUser from '@/components/pull/PullNewUser'
    import {
        GetAlipayCode,
        ActiveAlipayCode
    } from '@/api/apiPull'
    export default {
        components: {
            PullNewUser
        },
        name: 'alipay',
        data() {
            return {
                msg: 'Welcome to your vueName',
                is_active: 0,
                url: ''
            }
        },
        created() {
            GetAlipayCode({
                token: localStorage.getItem('token')
            }).then(res => {
                if(res.data.code == 400) {
                    this.$toast(res.data.msg)
                    return
                }
                console.log(res)
                this.is_active = res.data.data[0].is_active
                this.url = res.data.data[0].url
            })
        },
        methods: {
            activeCode() {
                ActiveAlipayCode({
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