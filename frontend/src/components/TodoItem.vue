<template>
  <div class="todo__item__wrapper">
    <div class="left__side">
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
    ...mapActions(["editInput", "deleteTodo"]),
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
  },
  computed: {
    ...mapGetters(["getInput"]),
  },
  watch: {
    todo() {
      if (this.todo.name) this.isShow = !this.isShow;
    },
    getInput() {
      if (!!this.getInput.id && this.getInput.id !== this.todo.id)
        this.isShow = true;
    },
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
    span {
      display: inline;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
  .right__side {
    display: flex;
    justify-content: end;
    gap: 10px;
    width: 30%;
    .btn {
      &__edit {
        padding: 10px;
        width: 80px;
        font-size: 15px;
        background-color: aquamarine;
        border: none;
      }
      &__cancel {
        background-color: gray;
        color: white;
      }
      &__delete {
        width: 80px;
        background: red;
        border: none;
        color: white;
      }
    }
  }
}
</style>
