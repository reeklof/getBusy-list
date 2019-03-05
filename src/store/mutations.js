export default {
    addTodo(state, todo) {
        state.dataToChild.push(todo);
    },
    updateTodo(state, index) {
        state.dataToChild[index].done = !state.dataToChild[index].done;
    },
    swipe(state, activeSlide) {
        state.activeSlide = activeSlide;
    },
    setTodos (state, localTodo) {
        state.dataToChild = localTodo;
    }
}