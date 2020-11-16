import React from 'react';

import { ContainerInput, Label, ContainerButton, Error } from './styles';

type RefReturn =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: string;
  name: string;
  register: ({ required }: { required?: boolean }) => RefReturn;
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Input: React.FC<InputProps> = ({
  label,
  name,
  register,
  required,
}) => {
  return (
    <ContainerInput>
      <Label>{label}</Label>
      <input name={name} ref={register({ required })} />
    </ContainerInput>
  );
};

export const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <ContainerButton {...rest}>{children}</ContainerButton>
);
