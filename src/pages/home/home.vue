<template>
    <div class="lewis">
        <home-page></home-page>
        <van-tabbar route>
            <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item replace to='/listPage' icon="bar-chart-o">数据</van-tabbar-item>
            <van-tabbar-item replace to='/my' icon="setting-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import homePage from '@/components/home/homePage'
    export default {
        name: 'home',
        components: {
            homePage
        },
        data() {
            return {
            }
        },
        created() {
            
        },
        watch: {
        
        }
    }
</script>

<style scoped lang="scss">
    .lewis {
        width: 100%;
        height: 100%;
        // background: #f8f8f8;
    }
</style>