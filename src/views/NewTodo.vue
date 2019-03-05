<template>
  <main id="new-todo">
    <header></header>
    <section class="content">
      <input type="text" v-model="newTodo" @keydown.enter="addTodo">
    </section>
    <footer>
      <p>{{ newTodo.length }} / 30 tecken</p>
      <a href="#" class="btn" @click="addTodo">Add a new Busy Thing</a>
    </footer>
  </main>
</template>

<script>
export default {
  name: "newTodo",
  data() {
    return {
      newTodo: ""
    };
  },
  methods: {
    addTodo() {
      this.$store.dispatch("newTodo", {text: this.newTodo, done: false});
      this.newTodo = "";
      this.$store.commit("swipe", 0);
    }
  }
};
</script>

<style lang='scss'>
#new-todo {
  background: rgb(93, 176, 93);

  .content {
    display: flex;
    justify-content: center;
    align-items: center;

    input {
      font-size: 1.4rem;
      font-weight: 700;
      border: none;
      appearance: none;
      background: none;
      border: 1px solid white;
      text-align: center;
      padding: 0.25rem;

      &:focus {
        outline: none;
      }
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