<template>
  <div class="main">
    <div class="todos">
      <div class="todos__title">
        <h1>todos</h1>
      </div>
      <div class="todos__add__item">
        <div class="todo__add__item__input">
          <input
            placeholder="What needs to be done?"
            @keyup.enter.exact="eventListener"
            v-model.trim="input"
          />
        </div>
        <span class="help__text">{{
          isError ? "Please enter your task" : ""
        }}</span>
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
      isError: false,
    };
  },
  methods: {
    ...mapActions(["addTodo", "updateTodo", "editInput"]),
    addNewTodo() {
      if (this.input || this.getInput.input || this.input !== "") {
        this.addTodo({
          name: this.input,
        });
        this.input = "";
      }
    },
    editTodo() {
      if (this.input || this.input !== "") {
        this.isError = false;
        this.updateTodo({
          id: this.getInput.id,
          name: this.input,
        });
        this.editInput({ input: this.input });
        this.getInput.input = undefined;
        this.getInput.id = undefined;
        this.input = "";
      } else {
        this.isError = true;
      }
    },
    eventListener() {
      if (this.getInput.input) this.editTodo();
      else this.addNewTodo();
    },
  },
  computed: {
    ...mapGetters(["getAllTodos", "getInput"]),
  },
  watch: {
    getInput() {
      if (this.getInput.input) this.input = this.getInput.input;
      else this.input = "";
    },
    input(val) {
      if (this.getInput.input && val == "") {
        this.isError = true;
      } else {
        this.isError = false;
      }
    },
  },
};
</script>

<style lang="scss">
.main {
  padding-top: 40px;
  min-height: calc(100vh - 150px);
  margin-bottom: 30px;
  .todos {
    margin: auto;
    background: aliceblue;
    width: 636px;
    padding: 5px 15px 25px 15px;
    &__title {
      text-transform: uppercase;
      color: cadetblue;
      font-size: 20px;
    }
    &__add__item {
      display: flex;
      flex-direction: column;
      margin-bottom: 5px;
      input {
        height: 20px;
        font-size: 14px;
        padding: 5px 5px 5px 15px;
        width: 312px;
      }
    }
    .help__text {
      width: 430px;
      font-size: 13px;
      color: red;
      height: 18px;
    }
  }
}
</style>
