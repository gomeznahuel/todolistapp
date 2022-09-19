import styled from 'styled-components';

// Show TodoList
export const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 60%;
  margin: 1rem auto;
  border-radius: 10px;
  padding: 0 0 0 2rem;
`;

// Show Todo
export const TodoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  border-bottom: 2px solid #000;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: .5rem 0
`;

// Todo Buttons
export const ButtonContainer = styled.button`
  width: 100%;
  padding: 10px;
  padding-top: .5rem;
  border: none;
  border-radius: 5px;
  background-color: #000;
  color: #fff;
  font-size: 1.2rem;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #05160d40;
  }
`;