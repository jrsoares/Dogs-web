/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from 'react';

import { Container, Label, Error } from './styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ name, type, label }) => {
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <input type={type} name={name} />
      <Error>Error</Error>
    </Container>
  );
};

export default Input;
