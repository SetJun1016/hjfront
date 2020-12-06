<template>
    <div class="lewis">
        <my-page></my-page>
        <van-tabbar route>
            <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item replace to='/listPage' icon="bar-chart-o">数据</van-tabbar-item>
            <van-tabbar-item replace to='/my' icon="setting-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    import myPage from '@/components/home/myPage'
    export default {
        name: 'home',
        components: {
            myPage
        },
        data() {
            return {
                
            }
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