<template>
  <div class="main">
    <div class="todos">
      <div class="todos__title">
        <h1>todos</h1>
      </div>
      <div class="todos__add__item">
        <input
          placeholder="What needs to be done?"
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
    ...mapActions(["addTodo", "updateTodo", "editInput"]),
    addNewTodo() {
      if (this.input || this.getInput) {
        this.addTodo({
          name: this.input,
        });
        this.input = "";
      }
    },
    editTodo() {
      if (this.input) {
        this.updateTodo({
          name: this.input,
        });
        this.editInput({ input: this.input });
        this.getInput = "";
      }
    },
  },
  computed: {
    ...mapGetters(["getAllTodos", "getInput"]),
  },
  watch: {
    getInput() {
      if (this.getInput) this.input = this.getInput;
    },
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
