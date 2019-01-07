import Vue from 'vue'
import Vuex from 'vuex'
import * as action from './action'
import * as getters from './getters'

Vue.use(Vuex)

// 应用初始状态
const state = {
  count: 10
}

// 定义所需 mutations
const mutations = {
  INCREMENT (state) {
    state.count++
  },
  DECREMENT (state) {
    state.count--
  }
}

// 创建store实例
export default new Vuex.Store({
  action,
  getters,
  state,
  mutations
})
