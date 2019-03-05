import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataToChild: [], 
    activeSlide: 0
  },
  mutations: {
    addTodo(state, todo){
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
    newTodo(ctx, todo) {
      if (todo.text != ''){
        ctx.commit('addTodo', todo);
        ctx.commit('swipe', 0);
      } 
    }
  },
  getters: { 
    todos(state) {
      return state.dataToChild;
    },
    finishTodos(state) {
      return state.dataToChild.filter(todo=>todo.done == true);
    }
  }
})
