import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 1000
  },
  mutations: {
    increment(state){
      state.counter++;
    },
    decrement(state){
      state.counter--;
    }
  },
  actions: {
  },
  getters:{
    powerCounter(state){
      return state.counter * state.counter
    }
  },
  modules: {
  }
})
