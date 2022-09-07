import todoApi from "@/api/todoApi";
import { mutation_types } from "./mutation_types";

export const actions = {
  // addTodo({ commit, state }, newTodo) {
  //   commit(mutation_types.NEW_TODO, { ...newTodo, id: state.todos.length + 1 });
  // },
  // deleteTodo({ commit }, id) {
  //   commit(mutation_types.REMOVE_TODO, id);
  // },
  // updateTodo({ commit }, updateTodo) {
  //   commit(mutation_types.UPDATE_TODO, updateTodo);
  // },
  // selectTodo({ commit }, todo) {
  //   commit(mutation_types.SELECT_TODO, todo);
  // },
  // editInput({ commit }, data) {
  //   commit(mutation_types.UPDATE_INPUT, data);
  // },
  async getAllTodos({ commit }) {
    const response = await todoApi.fetchTodos();
    commit(mutation_types.GET_ALL_TODO, response.data);
  },
  async addTodo({ commit }, newTodo) {
    const response = await todoApi.addTodo(newTodo);
    commit(mutation_types.NEW_TODO, response.data);
  },
  async deleteTodo({ commit }, id) {
    await todoApi.deleteTodo(id);
    commit(mutation_types.REMOVE_TODO, id);
  },
  async updateTodo({ commit }, updateTodo) {
    await todoApi.updateTodo(updateTodo);
    commit(mutation_types.UPDATE_TODO, updateTodo);
  },
  selectTodo({ commit }, id) {
    commit(mutation_types.SELECT_TODO, id);
  },
  editInput({ commit }, data) {
    commit(mutation_types.UPDATE_INPUT, data);
  },
};
