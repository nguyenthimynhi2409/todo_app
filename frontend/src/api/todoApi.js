import axios from "axios";

const url = "https://63087f19722029d9ddd07f75.mockapi.io/todos";

const todoApi = {
  async addTodo(newTodo) {
    return await axios.post(url, {
      name: newTodo.name,
      isSelected: false,
    });
  },
  async updateTodo(newTodo) {
    return await axios.put(`${url}/${newTodo.id}`, {
      name: newTodo.name,
      isSelected: newTodo.isSelected,
    });
  },
  async deleteTodo(id) {
    return await axios.delete(`${url}/${id}`);
  },
  async fetchTodos() {
    return await axios.get(url);
  },
};

export default todoApi;
