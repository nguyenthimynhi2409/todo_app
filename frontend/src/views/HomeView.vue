<template>
  <div class="main">
    <div class="todos">
      <div class="todos__title">
        <h1>todos</h1>
      </div>
      <div class="todos__add__item">
        <input
          placeholder="Please enter your task"
          @keyup.enter="addNewTodo"
          v-model.trim="input"
        />
      </div>
      <div class="todos__list">
        <TodoList :todos="getAllTodos" />
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from "../components/TodoList.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "HomeView",
  components: {
    TodoList,
  },
  data() {
    return {
      input: "",
    };
  },
  methods: {
    ...mapActions(["addTodo", "updateTodo"]),
    addNewTodo() {
      this.addTodo({
        name: this.input,
      });
      this.input = "";
    },
  },
  computed: {
    ...mapGetters(["getAllTodos"]),
  },
};
</script>

<style lang="scss">
.main {
  padding-top: 70px;
  height: calc(100vh - 80px);
  .todos {
    margin: auto;
    background: aliceblue;
    width: 636px;
    padding: 15px;
    &__title {
      text-transform: uppercase;
      color: cadetblue;
      font-size: 20px;
    }
    &__add__item {
      margin-bottom: 30px;
      input {
        height: 20px;
        font-size: 14px;
        padding: 5px 5px 5px 15px;
        width: 312px;
      }
    }
  }
}
</style>
