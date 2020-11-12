import React from 'react';

import { Container, Label, Error } from './styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  label: string;
}

const Input: React.FC<InputProps> = ({
  name,
  type,
  label,
  value,
  onChange,
}) => {
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <input type={type} name={name} value={value} onChange={onChange} />
      <Error>Error</Error>
    </Container>
  );
};

export default Input;
