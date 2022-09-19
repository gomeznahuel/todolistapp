import axios from 'axios'

export const addTodo = async (product) => {
  const { data } = await axios.post(`${import.meta.env.VITE_APP_BASE}/todos`, product);
  return data;
};