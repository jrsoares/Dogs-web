import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { Container, Error } from './styles';
import Input from '../../Components/Input';
import Button from '../../Components/Button';

interface FormInputs {
  username: string;
  password: string;
}
const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

const Login: React.FC = () => {
  const { register, handleSubmit, errors, control } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormInputs) => console.log(data);

  return (
    <>
      <Header />
      <Container>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            label="Usuário"
            name="username"
            register={register}
          />
          <Error>{errors.username?.message}</Error>
          <Input
            type="password"
            label="Senha"
            name="password"
            register={register}
          />
          <Error>{errors.password?.message}</Error>

          <Button type="submit">Entrar</Button>
        </form>
        <Link to="/signup">Cadastro</Link>
      </Container>
      <Footer />
    </>
  );
};

export default Login;
