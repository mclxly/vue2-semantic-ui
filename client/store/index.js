import Vue from 'vue'
import Vuex from 'vuex'
import {INCREMENT} from './mutations'
import {incrementAsync} from './actions'

Vue.use(Vuex)

const state = {
  count: 0,
  artists: [],
  isBusy: false
}

const mutations = {
  INCREMENT
}

const actions = {
  incrementAsync
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
