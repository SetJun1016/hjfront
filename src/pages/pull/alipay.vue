<template>
    <div class="alipay">
        <pull-new-user :app='app' :is_active='is_active' :url='url' :smallTitle='smallTitle' content='请使用支付宝App扫一扫' title='支付宝拉新'
            @active-code='activeCode()' :beCareful='beCareful' detailImg='../../../static/img/alipayDetail.jpg'></pull-new-user>
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
                url: '',
                app: 22,
                smallTitle: '',
                beCareful: ["1、首次领取福利码的用户需要用支付宝进行扫码完成激活操作。","2、需要打开位置权限，将位置权限选为始终允许。",'3、确保客户手机上下载的支付宝为最新版本。','4、在操作过程中，一定要在4G网络下操作，同一个IP地址下注册多个账号，支付宝系统会判断为刷单、风控数据。', '5、登录支付宝后，请勿领取支付宝首页的花费红包，必须扫福利码拉新，不然无法捕捉到数据。', '6、注意提醒客户次日至第七天内再登录一支付宝APP。']
            }
        },
        created() {
            GetAlipayCode({
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
                    this.smallTitle = '激活码'
                } else {
                    this.smallTitle = '支付宝推广码'
                }
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
                    if (this.is_active === 0) {
                        this.smallTitle = '激活码'
                    } else {
                        this.smallTitle = '支付宝推广码'
                    }
                })
            }
        }
    }
</script>

<style scoped lang="scss">

</style>