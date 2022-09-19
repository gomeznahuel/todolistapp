import { useContext } from 'react'
import { TodoContext } from '../../context/TodoContext'
import { deleteTodo } from '../../services'
import { TodoListContainer, TodoContainer, ButtonsContainer, ButtonContainer } from '../../style/Render.style'

export const Render = () => {
  const { setTodo, todos, setTodos } = useContext(TodoContext)

  const handleDelete = async (id) => {
    await deleteTodo(id)
    setTodos(todos.filter((todo) => todo._id !== id))
  }

  const handleUpdate = async (id) => {
    const todo = todos.find((todo) => todo._id === id);
    setTodo(todo);
  }

  return (
    <TodoListContainer>
      {todos.map((todo) => (
        <TodoContainer key={todo._id}>
          <h3>{todo.title}</h3>
          <ButtonsContainer>
            <ButtonContainer onClick={() => handleUpdate(todo._id)}>Update</ButtonContainer>
            <ButtonContainer onClick={() => handleDelete(todo._id)}>Delete</ButtonContainer>
          </ButtonsContainer>
        </TodoContainer>
      ))}
    </TodoListContainer>
  )
}