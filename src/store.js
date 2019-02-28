import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataToChild: [], 
    activeSlide: 0
  },
  mutations: {
    addTodo(state, todos){
      state.dataToChild.push(todos);
    },
    updateTodo(state, index){
      state.dataToChild[index].done = !state.dataToChild[index].done;
    },
    swipe(state, index){
      state.activeSlide = index;
    }
  },
  actions: {
    newTodo(ctx, todo) {
      if (todo.text != ''){
        ctx.commit('addTodo', todo)
      } 
    }
  },
  getters: {
    todos(state) {
      return state.dataToChild;
    },
    finishTodos(state) {
      return state.dataToChild.filter(todo=>todo.done);
    }
  }
})
