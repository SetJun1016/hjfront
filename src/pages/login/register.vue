<template>
    <div class="register">
        <div class="header">注册账号</div>
        <!-- <div class="register-box mt50" @click="$router.push({path: 'bankRegister', query: {type: 'bank'}})">银行推广人</div> -->
        <div class="register-box mt50" @click="$toast.fail('正在开发中...')">银行推广人</div>
        <div class="register-box" @click="$router.push({path: 'bankRegister', query: {type: 'noBank'}})">非银行推广人</div>
    </div>
</template>

<script>
    export default {
        name: 'vueName',
        data() {
            return {
                msg: 'Welcome to your vueName'
            }
        }
    }
</script>

<style scoped lang="scss">
    .header {
        font-size: .7rem;
        // color: #1989FA;
        color: #FF1B1B;
        margin-top: 1.2rem;
        text-align: center;
        margin-bottom: 1.6rem;
    }

    .register-box {
        width: 92%;
        height: 1.2rem;
        text-align: center;
        line-height: 1.2rem;
        font-size: .42rem;
        border-radius: 30px;
        border: .02rem solid #FF1B1B;
        margin: .8rem auto;
        // color: #1989FA;
        color: #FF1B1B;
    }
</style>