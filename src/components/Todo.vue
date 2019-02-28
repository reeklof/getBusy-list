<template>
    <article class="todo" :class="{completed:todo.done}" v-touch:swipe="completed">
        <aside class="done">
            <img src="../assets/cheeck.svg" alt="done">
        </aside>
        <section class="text">
            {{todo.text}}
        </section>
    </article>
</template>

<script>
export default {
    name: 'todo',
    props: ['todo', 'index'],
    methods: {
        completed() {
            this.$store.commit('updateTodo', this.index);
        }
    }
}
</script>

<style lang="scss">

.todo {
    background: rgb(244, 190, 199); 
    padding: .25rem;     
    display: flex;  
    border-radius: 999rem;
    height: 3rem;
    margin: 0 0 1rem;

    &.completed {
        .text {
            color: rgb(194, 128, 196);
            text-decoration: line-through;
        }
    }

    aside {
        background: rgb(123, 192, 123); 
        width: 3rem; 
        height: 3rem; 
        display: flex; 
        justify-content: center; 
        align-items: center;
        border-radius: 999rem;
    }
    .text{
        flex:1;
        display: flex; 
        align-items: center; 
        padding: 0 0 0 1rem;
    }
}
</style>