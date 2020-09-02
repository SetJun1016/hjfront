import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        user_info: '' || localStorage.getItem('user_info'),
    },
    getters: {
        userInfo: (state) => state.user_info,
    },
    mutations: {
        HANDLE_USERINFO: (state, user_info) => {
            state.user_info = user_info
            // 把登录的用户的名保存到localStorage中，防止页面刷新，导致vuex重新启动，用户名就成为初始值（初始值为空）的情况
            localStorage.setItem('user_info', user_info)
        },
    },
    actions: {
        handle_userInfo({ commit }, user_info) {
            commit('HANDLE_USERINFO', user_info)
        }
    }
})