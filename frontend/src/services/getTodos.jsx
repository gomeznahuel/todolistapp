import axios from 'axios';

export const getTodos = async () => {
  const { data } = await axios.get(`${import.meta.env.VITE_APP_BASE}/todos`);
  return data
}

