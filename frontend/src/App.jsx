import { useEffect, useContext } from 'react'
import { getTodos } from './services'
import { TodoContext } from './context/TodoContext'
import { Form, Render } from './components';
import { Container, Title, SubTitle } from './style/App.style'

const App = () => {
  const { todos, setTodos, todo } = useContext(TodoContext)

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await getTodos()
      setTodos(todos)
    }
    fetchTodos()
  }, [todo])

  return (
    <Container>
      <Title>Todo List with MongoDB</Title>
      <Form />
      {todos.length > 0 ? <Render /> : <SubTitle>Here there is nothing to do.</SubTitle>}
    </Container>
  )
}
export default App