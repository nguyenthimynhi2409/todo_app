import { mutation_types } from "./mutation_types";

export const mutations = {
  [mutation_types.NEW_TODO]: (state, todo) => state.todos.unshift(todo),
  [mutation_types.REMOVE_TODO]: (state, id) =>
    (state.todos = state.todos.filter((todo) => todo.id !== id)),
  [mutation_types.UPDATE_TODO]: (state, newTodo) => {
    const index = state.todos.findIndex((todo) => todo.id === newTodo.id);
    if (index !== -1) {
      state.todos.splice(index, 1, newTodo);
    } else state.todos[index] = newTodo;
  },
  [mutation_types.SELECT_TODO]: (state, index) => {
    state.todos[index].isSelected = !state.todos[index].isSelected;
  },
  [mutation_types.UPDATE_INPUT]: (state, data) => (state.input = data),
  [mutation_types.GET_ALL_TODO]: (state, data) => (state.todos = data),
};
