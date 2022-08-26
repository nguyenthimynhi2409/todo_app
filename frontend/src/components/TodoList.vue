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
  &__wrapper {
    padding: 0 20px;
  }
  &__item {
    padding: 5px 0;
  }
}
</style>
