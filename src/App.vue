<template>
    <div id="app">
        <router-view />
        <!-- <keep-alive v-if="$route.meta.keepAlive">
            <router-view></router-view>
        </keep-alive>
        <router-view v-else></router-view> -->
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style lang='scss'>
    body {
        font-family: "Microsoft Yahei",
            Arial, "Helvetica Neue",
            Helvetica, sans-serif;
        color: #666;
        font-size: .28rem;
        background: #fff;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: .28rem;
        width: 100%;
        height: 100%;
		background: #fff;

        .Router {
            position: absolute;
            width: 100%;
            height: 100%;
            transition: all .337s ease;
            box-sizing: border-box;
            overflow: auto;
            background: #fff;
            z-index: 9999;
        }

        .slide-left-enter {
            -webkit-transform: translate(-100%, 0);
            transform: translate(-100%, 0);
        }

        .slide-left-leave-active {
            -webkit-transform: translate(-100%, 0);
            transform: translate(-100% 0);
        }

        .slide-right-enter {
            // opacity: 0;
            -webkit-transform: translate(100%, 0);
            transform: translate(100% 0);
            // background: #fff;
            // z-index: 9999;
        }

        .slide-right-leave-active {
            // opacity: 0;
            -webkit-transform: translate(100%, 0);
            transform: translate(100%, 0);
            // background: #fff;
            // z-index: 9999;
        }
    }
</style>