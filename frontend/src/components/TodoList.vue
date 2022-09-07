<template>
  <div class="todos__list__wrapper">
    <div class="todos__list__item" v-for="todo in todos" :key="todo.id">
      <TodoItem :todo="todo" />
    </div>
  </div>
</template>
<script>
import TodoItem from "./TodoItem.vue";
export default {
  components: { TodoItem },
  name: "TodoList",
  props: { todos: Array },
};
</script>
<style lang="scss">
.todos__list {
  height: 100%;
  overflow: hidden;
  border: solid 1px #4dba87;
  &__wrapper {
    height: 250px;
    overflow: auto;
    padding: 0 20px;
    &::-webkit-scrollbar {
      width: 5px !important;
      height: 10px;
    }
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 2px grey;
      border-radius: 7px;
    }
    &::-webkit-scrollbar-thumb {
      background: grey;
      border-radius: 10px;
    }
  }
  &__item {
    padding: 5px 0;
  }
}
</style>
