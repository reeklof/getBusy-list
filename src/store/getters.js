export default {
    todos(state) {
        return state.dataToChild;
    },
    finishTodos(state) {
        return state.dataToChild.filter(todo => todo.done == true);
    }
}