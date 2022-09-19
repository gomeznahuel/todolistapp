import axios from 'axios'

export const deleteTodo = async (id) => {
  const data = await axios.delete(`${import.meta.env.VITE_APP_BASE}/todos/${id}`);
  return data
}