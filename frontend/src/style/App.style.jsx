import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  padding: 2rem 0 0 0;
`;

const Title = styled.h1`
  font-size: 2.6rem;
  margin-bottom: 1rem;
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export { Container, Title, SubTitle };