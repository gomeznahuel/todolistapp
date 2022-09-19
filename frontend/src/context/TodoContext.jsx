import { createContext, useState } from 'react';
const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState({ title: '' })

  const value = { todos, setTodos, todo, setTodo }

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };