import React from 'react';

import { ContainerInput, Label } from './styles';

type RefReturn =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  register: ({ required }: { required?: boolean }) => RefReturn;
  label: string;
  name: string;
  type: string;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  type,
  register,
  required,
}) => {
  return (
    <ContainerInput>
      <Label id={label}>{label}</Label>
      <input name={name} type={type} ref={register({ required })} />
    </ContainerInput>
  );
};

export default Input;
