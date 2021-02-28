<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Welcome to Pete's Vue.js front-end App" /> -->
  <!-- <HelloWorld msg="Welcome to Pete's Vue.js front-end App" /> -->
  <div class="app">
    <div class="container">
      <h1>Pete's Todo List Manager</h1>
      <h6>Powered by Vue 3 | Vuex 4 | Axios | Ruby on Rails 6 | SQLite 3 | Jest for test ;-)</h6>
      <AddTodo />
      <Todos />
    </div>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Todos from "@/components/Todos.vue"
import AddTodo from "@/components/AddTodo.vue"
export default {
  name: "App",
  components: {
    // HelloWorld
    AddTodo,
  }
};
</script>

<style>

body {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  list-style: 1.6;
  background: #eaf7f0;
}

.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}



/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
