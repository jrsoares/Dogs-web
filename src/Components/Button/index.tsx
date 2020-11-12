import React from 'react';

import { Container } from './styles';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container {...rest}>{children}</Container>
);
export default Button;
