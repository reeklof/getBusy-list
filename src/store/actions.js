export default {
  newTodo(ctx, todo) {
    if (todo.text != '') {
      ctx.commit('addTodo', todo);
      ctx.commit('swipe', 0);
    }
  },
  updateTodo(ctx, index) {
    ctx.commit('updateTodo', index);
  }
}