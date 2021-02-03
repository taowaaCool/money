import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store =  new Vuex.Store({
  state: {
    count: 1,
  },
  mutations: {
    increment(state, n:number) {
      state.count += n;
    }
  }

});

console.log(store.state.count);
store.commit('increment', 4);
console.log(store.state.count);

export default store;