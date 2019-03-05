export default {
  async newTodo(ctx, todo) {
    if (todo.text != '') {
      ctx.commit('addTodo', todo);
      ctx.commit('swipe', 0);
      await localStorage.setItem('todos', JSON.stringify(ctx.state.dataToChild))
    }
  },
  async updateTodo(ctx, index) {
    ctx.commit('updateTodo', index);
    await localStorage.setItem('todos', JSON.stringify(ctx.state.dataToChild))
  }, 
  async getTodos(ctx){
    let getMyTodo = await localStorage.getItem('todos');
    let to = JSON.parse(getMyTodo);
    ctx.commit('setTodos', to);
  }
}