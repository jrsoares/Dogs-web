import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const animatedLeft = keyframes`
to {
  opacity: 1;
  transform: initial
}
`;

export const Container = styled.section`
  h1 {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  transform: translateX(-20px);
  animation: ${animatedLeft} 0.3s forwards;

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
export const Form = styled.form`
  margin-bottom: 2rem;
`;
export const Error = styled.p`
  color: #f31;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  margin-bottom: 0.4rem;
`;

export const Forgot = styled(Link)`
  display: inline-block;
  color: #666;
  padding: 0.5rem 0;
  line-height: 1;

  &:after {
    content: '';
    height: 2px;
    width: 100%;
    background: currentColor;
    display: block;
  }
`;

export const Signin = styled.section`
  h2 {
    margin-top: 4rem;
    font-family: var(--type-second);
    line-height: 1;
    font-size: 2rem;
  }

  h2:after {
    content: '';
    display: block;
    background: #ddd;
    height: 0.5rem;
    width: 3rem;
    border-radius: 0.2rem;
  }

  p {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

export const Signup = styled(Link)`
  font-size: 1rem;
  font-family: Helvetica, Arial, sans-serif;
  cursor: pointer;
  border: none;
  border-radius: 0.4rem;
  background: #fb1;
  color: #764701;
  min-width: 8rem;
  padding: 0.8rem 1.2rem;
  box-sizing: border-box;
  transition: 0.1s;

  &:hover,
  :focus {
    outline: none;
    box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
  }
`;
