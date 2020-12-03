import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  border-bottom: 2rem;
  margin-top: 1rem;
  position: relative;
  max-width: 50rem;
  padding: 0 1rem;
  margin: 0 auto;

  h1 {
    font-family: var(--type-second);
    line-height: 1;
    font-size: 3rem;
    margin: 1rem 0;
    position: relative;
    z-index: 1;
  }

  h1::after {
    content: '';
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background: #fb1;
    position: absolute;
    bottom: 5px;
    left: -5px;
    border-radius: 0.2rem;
    z-index: -1;
  }
`;
