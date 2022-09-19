import axios from 'axios';

export const updateTodo = async (id, product) => {
  const { data } = await axios.put(`${import.meta.env.VITE_APP_BASE}/todos/${id}`, product);
  return data;
};