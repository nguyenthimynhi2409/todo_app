<template>
  <div class="todo__item__wrapper">
    <div class="left-side">
      <span>{{ todo.name }}</span>
    </div>
    <div class="right-side"></div>
  </div>
</template>
<script>
export default {
  name: "TodoItem",
  props: { todo: Object },
};
</script>
<style lang="scss">
.todo__item__wrapper {
  .left-side {
    display: flex;
  }
}
</style>
