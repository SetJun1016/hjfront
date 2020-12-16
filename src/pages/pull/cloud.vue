<template>
    <div class="alipay">
        <pull-new-user :app='app' :is_active='is_active' :url='url' :smallTitle='smallTitle' @active-code='activeCode()' title='云闪付拉新' content='请使用云闪付APP扫一扫' :beCareful='beCareful' detailImg=''></pull-new-user>
    </div>
</template>

<script>
    import PullNewUser from '@/components/pull/PullNewUser'
    import {
        GetYunCode,
        ActiveYunCode
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
                // app: 31,
                smallTitle: '',
                app: 21,
                beCareful: ['1、客户的银行卡及预留手机号、身份证、注册手机号需一致且为同一人，否则会造成无效客户！;','2、需要绑定62开头的银行卡或者信用卡、绑定其他开头的卡片有概率造成绑定不上或者支付不了的情况。','3、所有扫描推广码完成流程的新用户必须使用云闪付扫描付款码交易一笔。']
            }
        },
        created() {
            GetYunCode({
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
                    this.smallTitle = '云闪付拉新'
                } else {
                    this.smallTitle = '云闪付推广码'
                }
            })
        },
        methods: {
            activeCode() {
                ActiveYunCode({
                    token: localStorage.getItem('token')
                }).then(res => {
                    console.log(res)
                    if(res.data.data.length == 0) {
                        this.$toast.fail(res.data.msg)
                        return
                    }
                    this.is_active = res.data.data[0].is_active
                    this.url = res.data.data[0].url
                })
            }
        }
    }
</script>

<style scoped lang="scss">

</style>