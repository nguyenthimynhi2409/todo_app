export const getters = {
  getAllTodos: (state) => state.todos,
  filterSelectedTodos: (state) => state.todos.filter((todo) => todo.isSelected),
  filterActiveTodos: (state) => state.todos.filter((todo) => !todo.isSelected),
  getInput: (state) => state.input,
};
