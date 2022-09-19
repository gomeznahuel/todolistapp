import { useContext } from 'react'
import { TodoContext } from '../../context/TodoContext'
import { addTodo, updateTodo } from '../../services'
import { FormContainer, InputContainer, ButtonContainer } from '../../style/Form.style'

export const Form = () => {
  const { todo, setTodo } = useContext(TodoContext)

  const handleInputChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validate if the input is empty, if it is, return an alert to the user.
    if (!todo.title) return alert('Please, write a todo')

    if (!todo._id) addTodo(todo)
    else updateTodo(todo._id, todo)

    setTodo({ title: '' })
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputContainer type="text" name="title" placeholder="title" onChange={handleInputChange} value={todo.title} />
      {todo._id ? <ButtonContainer type="submit">Update</ButtonContainer> : <ButtonContainer type="submit">Create</ButtonContainer>}
    </FormContainer>
  )
}