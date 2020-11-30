<template>
    <div class="lewis">
        <home-page v-if="active == 0"></home-page>
        <list-page v-if="active == 1"></list-page>
        <my-page v-if="active == 2"></my-page>
        <van-tabbar v-model="active">
            <van-tabbar-item icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item icon="bar-chart-o" dot>数据</van-tabbar-item>
            <van-tabbar-item icon="setting-o" badge="20">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import homePage from '@/components/home/homePage'
import listPage from '@/components/home/listPage'
import myPage from '@/components/home/myPage'
    export default {
        name: 'home',
        components: {
            homePage,
            listPage,
            myPage
        },
        data() {
            return {
                msg: 'Welcome to your vueName',
                active: 0
            }
        }
    }
</script>

<style scoped lang="scss">
    .lewis {
        width: 100%;
        height: 100%;
        background: #f8f8f8;
    }
</style>