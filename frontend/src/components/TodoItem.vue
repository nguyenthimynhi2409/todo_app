<template>
  <div class="todo__item__wrapper">
    <div class="left-side">
      <span>{{ todo.name }}</span>
    </div>
    <div class="right-side">
      <button @click="editTodo">Clone</button>
      <button @click="removeTodo">X</button>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "TodoItem",
  props: { todo: Object },
  methods: {
    ...mapActions(["editInput", "deleteTodo"]),
    editTodo() {
      this.editInput({
        input: this.todo.name,
      });
    },
    removeTodo() {
      this.deleteTodo(this.todo.id);
    },
  },
};
</script>
<style lang="scss">
.todo__item__wrapper {
  display: flex;
  justify-content: space-between;
  .left-side {
    display: flex;
  }
}
</style>
