<template>
  <div class="todo__item__wrapper">
    <div class="left__side">
      <input
        type="checkbox"
        @change="select"
        :checked="this.todo.isSelected"
        :id="this.todo.id"
      />
      <span :title="todo.name">{{ todo.name }}</span>
    </div>
    <div class="right__side">
      <button v-show="isShow" @click="editTodo" class="btn__edit">Edit</button>
      <button
        v-show="!isShow"
        @click="cancelEditTodo"
        class="btn__edit btn__cancel"
      >
        Cancel
      </button>
      <button @click="removeTodo" class="btn__delete">Delete</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TodoItem",
  props: { todo: Object },
  data() {
    return {
      isShow: true,
    };
  },
  methods: {
    ...mapActions(["editInput", "deleteTodo", "selectTodo"]),
    editTodo() {
      this.isShow = false;
      this.editInput({
        id: this.todo.id,
        input: this.todo.name,
      });
    },
    cancelEditTodo() {
      this.isShow = true;
      this.editInput({
        input: undefined,
      });
    },
    removeTodo() {
      this.editInput({
        input: undefined,
      });
      this.deleteTodo(this.todo.id);
    },
    select() {
      this.selectTodo(this.todo.id);
    },
  },
  computed: {
    ...mapGetters(["getInput"]),
  },
  watch: {
    todo() {
      if (this.getInput.input) this.isShow = !this.isShow;
    },
    getInput() {
      if (!!this.getInput.id && this.getInput.id !== this.todo.id)
        this.isShow = true;
    },
    isShow() {
      console.log(this.isShow);
    },
  },
  destroyed() {
    this.getInput.input = undefined;
  },
};
</script>
<style lang="scss">
.todo__item__wrapper {
  display: flex;
  justify-content: space-between;
  .left__side {
    display: flex;
    width: 70%;
    align-items: center;
    gap: 5px;
    input {
      width: 20px;
      height: 40px;
      accent-color: #4dba87;
    }
    span {
      width: 365px;
      text-align: start;
      display: inline;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 13px;
    }
  }
  .right__side {
    display: flex;
    justify-content: end;
    gap: 10px;
    width: 30%;
    font-size: 13px;
    .btn {
      &__edit {
        padding: 10px;
        width: 70px;
        background-color: aquamarine;
        border: none;
      }
      &__cancel {
        padding: 10px;
        background-color: gray;
        color: white;
      }
      &__delete {
        width: 70px;
        padding: 10px;
        background: red;
        border: none;
        color: white;
      }
    }
  }
}
</style>
