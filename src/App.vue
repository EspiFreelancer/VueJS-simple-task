<template>
  <div id="app">
    <b-jumbotron bg-variant="info" text-variant="white">
      <template slot="header">
        <b-container>App Task con Vuex</b-container>
      </template>
      <template slot="lead">
        <b-container>Realizado usando Boostrap-vue</b-container>
      </template>
    </b-jumbotron>

    <b-container>
      <div class="todo-page">
        <h2>Lista de Shopping</h2>
        <hr>
        <TodoList />
      </div>
    </b-container>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue'

export default {
  name: 'TodoView',
  components: {
    TodoList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
