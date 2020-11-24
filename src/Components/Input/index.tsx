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
}

const Input: React.FC<InputProps> = ({ label, name, register, required }) => {
  return (
    <ContainerInput>
      <Label id={label}>{label}</Label>
      <input name={name} ref={register({ required })} />
    </ContainerInput>
  );
};

export default Input;
