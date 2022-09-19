import { StrictMode } from 'react'
import { TodoProvider } from './context/TodoContext'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyle } from './style/Global'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoProvider>
      <GlobalStyle />
      <App />
    </TodoProvider>
  </StrictMode>
)
