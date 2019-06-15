import Vue from 'vue';
import Vuex from 'vuex'

// 启用应用状态管理
Vue.use(Vuex);
// 全局状态
const state = {
    count: 0
}

// state要改， actions 是交给你调用的， increment 不能直接修改state.count， state.count++  mutation
// 只有actions 才可以触发 mutations 改变，只有 mutations 才可以修改state
const mutations = {
    increment (state) {
        state.count++;
    }
}
const actions = {
    increment: ({ commit }) => commit('increment')
}
export default new Vuex.Store({
    state,
    mutations,
    actions
})