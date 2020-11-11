import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 1rem;

  input {
    border: 1px solid #eee;
    display: block;
    width: 100%;
    font-size: 1rem;
    padding: 0.8rem;
    background: #eee;
    transition: 0.2s;
    border-radius: 0.4rem;

    &:focus,
    &:hover {
      outline: none;
      border-color: #fb1;
      background: #fff;
      box-shadow: 0 0 0 3px #fea;
    }
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 1rem;
  line-height: 1;
  padding-bottom: 0.5rem;
`;

export const Error = styled.p`
  color: #f31;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;
