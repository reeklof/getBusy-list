<template>
    <main id="todos">
        <header>
            <h1>Get Busy</h1>
            <p>get things done...</p>
        </header>
        <section class="content">
            <todo v-for="(todoData, index) in dataToChild" :key="index" :index="index" :todo="todoData"/><!--index visar positionen-->
        </section>
        <footer>
            <a href="#" class="btn" v-touch:swipe.left="swipe">Swipe to add new</a>
        </footer>
    </main>
</template>

<script>
import todo from '@/components/Todo';

export default {
    name: "dataToChild",
    computed: {
        dataToChild() {
            return this.$store.state.dataToChild;
        }
    },
    methods: {
        swipe() {
            this.$store.commit('swipe', 1);
        }
    },
    components: {
        todo
    }
}
</script>

<style lang='scss'>
#todos{
    background: rgb(245, 171, 142); 

    header {

        h1 {
            margin: 0;
            padding: 0;
            font-weight: 700;
        }
        p {
            margin: 0;
            font-style: italic;
        }
    }
    footer {
        display: flex; 
        flex-direction: column; 
        justify-content: flex-end; 

        a.btn {
            display: flex;
            justify-content: center; 
            align-items: center; 
            background: #222;
            color: white;
            font-weight: 700;
            text-decoration: none; 
            height: 3rem;
            border-radius: 99rem;
        }
    }
}

</style>