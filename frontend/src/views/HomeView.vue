<template>
  <div class="main">
    <div class="todos">
      <div class="todos__title">
        <h1>todos</h1>
      </div>
      <div class="todos__add__item">
        <div class="todos__add__item__input">
          <input type="checkbox" @change="select" class="todo__checkbox" />
          <input
            placeholder="What needs to be done?"
            @keyup.enter.exact="eventListener"
            v-model.trim="input"
            class="todo__input"
          />
        </div>
        <span class="help__text">{{
          isError ? "Please enter your task" : ""
        }}</span>
      </div>
      <div class="todos__progress-bar__wrapper">
        <div class="todos__progress-bar">
          <div
            class="todos__progress-bar__select"
            :style="{
              width: `${
                (this.filterSelectedTodos.length / this.getAllTodos.length) *
                100
              }% !important`,
            }"
          ></div>
        </div>
        <div class="todos__progress-bar__action">
          <span
            >{{ filterTodos.length }}
            {{ filterTodos.length > 1 ? "items" : "item" }} left</span
          >
          <div class="todos__progress-bar__action__right">
            <button :class="active.all" @click="isActive('all')">ALL</button>
            <button :class="active.active" @click="isActive('active')">
              ACTIVE
            </button>
            <button :class="active.completed" @click="isActive('completed')">
              COMPLETED
            </button>
          </div>
        </div>
      </div>
      <div class="todos__list">
        <TodoList :todos="filterTodos" />
      </div>
      <button class="todos__delete" @click="clearComplete">
        CLEAR COMPLETED
      </button>
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
      active: {
        all: "active",
        active: false,
        completed: false,
      },
    };
  },
  methods: {
    ...mapActions([
      "addTodo",
      "updateTodo",
      "editInput",
      "clearCompleted",
      "selectAllTodos",
    ]),
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
    isActive(val) {
      this.active = {
        all: false,
        active: false,
        completed: false,
      };
      this.active[val] = "active";
    },
    clearComplete() {
      this.clearCompleted({
        filterSelectedTodos: this.filterSelectedTodos,
        filterActiveTodos: this.filterActiveTodos,
      });
    },
    select(val) {
      this.$store.state.selectAll = !this.$store.state.selectAll;
      this.selectAllTodos(val.target.checked);
    },
  },
  computed: {
    ...mapGetters([
      "getAllTodos",
      "getInput",
      "filterActiveTodos",
      "filterSelectedTodos",
    ]),
    filterTodos() {
      if (this.active.active !== false) return this.filterActiveTodos;
      if (this.active.completed !== false) return this.filterSelectedTodos;
      return this.getAllTodos;
    },
  },
  watch: {
    getInput() {
      if (this.getInput.input) this.input = this.getInput.input;
      else {
        this.input = "";
        this.isError = false;
      }
    },
    input(val) {
      if (this.getInput.input && val == "") {
        this.isError = true;
      } else {
        this.isError = false;
      }
    },
  },
  created() {
    this.$store.dispatch("getAllTodos");
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
      &__input {
        display: flex;
        width: 350px;
        margin: auto;
        background: white;

        .todo {
          &__input {
            background-color: white;
            height: 30px;
            font-size: 14px;
            padding: 5px 5px 5px 15px;
            display: flex;
            width: 320px;
            &:focus-visible {
              outline: none;
            }
          }
          &__input:hover {
            border: none;
          }

          &__checkbox {
            accent-color: #4dba87;
            margin-left: 10px;
            width: 20px;
          }
        }
      }
    }
    .help__text {
      width: 430px;
      font-size: 13px;
      color: red;
      height: 18px;
    }
    &__progress-bar {
      height: 7px;
      background-color: #caeadb;
      &__select {
        height: 7px;
        background-color: #4dba87;
      }
    }
    &__progress-bar__wrapper {
      height: 47px;
    }
    &__progress-bar__action {
      display: flex;
      justify-content: space-between;
      margin-right: 40px;
      height: 40px;
      align-items: center;
      span {
        font-size: 13px;
        color: #4dba87;
        margin-left: 20px;
      }
      &__right {
        display: flex;
        gap: 5px;
        .active {
          background-color: #caeadb;
          color: #4dba87 !important;
        }
        button {
          padding: 0 5px;
          color: #bbe5d1;
          height: 30px;
        }
        button:hover {
          color: #4dba87;
          cursor: pointer;
        }
      }
    }
    &__delete {
      margin-top: 10px;
      width: 100%;
      background-color: #4dba87;
      border-radius: 20px;
      height: 30px;
      color: white;
    }
  }
  button {
    font-size: 13px;
    font-weight: 500;
  }
}
</style>
