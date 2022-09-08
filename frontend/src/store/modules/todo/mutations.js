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
  [mutation_types.SELECT_TODO]: (state, id) => {
    const index = state.todos.findIndex((todo) => todo.id === id);
    state.todos[index].isSelected = !state.todos[index].isSelected;
  },
  [mutation_types.UPDATE_INPUT]: (state, data) => (state.input = data),
  [mutation_types.GET_ALL_TODO]: (state, data) => (state.todos = data),
  [mutation_types.CLEAR_COMPLETED]: (state, data) => (state.todos = data),
  [mutation_types.SELECT_ALL_TODOS]: (state, data) =>
    state.todos.map((todo) => {
      if (todo.isSelected !== data) todo.isSelected = !todo.isSelected;
    }),
};
