import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataToChild: [], 
    activeSlide: 0
  },
  mutations: {
    newTodo(state, todo){
      state.dataToChild.push(todo);
    },
    updateTodo(state, index){
      state.dataToChild[index].done = !state.dataToChild[index].done;
    },
    swipe(state, activeSlide){
      state.activeSlide = activeSlide;
    }
  },
  actions: {

  }
})
