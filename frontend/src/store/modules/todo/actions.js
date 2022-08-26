import { mutation_types } from "./mutation_types";

export const actions = {
  addTodo({ commit, state }, newTodo) {
    commit(mutation_types.NEW_TODO, { ...newTodo, id: state.todos.length + 1 });
  },
  deleteTodo({ commit }, id) {
    commit(mutation_types.REMOVE_TODO, id);
  },
  updateTodo({ commit }, updateTodo) {
    commit(mutation_types.UPDATE_TODO, updateTodo);
  },
  selectTodo({ commit }, todo) {
    commit(mutation_types.SELECT_TODO, todo);
  },
  editInput({ commit }, data) {
    commit(mutation_types.UPDATE_INPUT, data);
  },
};
