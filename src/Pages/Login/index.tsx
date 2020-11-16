import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { Container } from './styles';

import { Input, Button } from '../../Components/Form';

interface FormValues {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = React.useCallback(event => {
    event.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify(),
    })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(json => {
        console.log(json);
      });
  }, []);

  return (
    <>
      <Header />
      <Container>
        <h1>Login</h1>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <Input label="Usuário" name="username" register={register} required />
          <Input label="Senha" name="password" register={register} required />
          <Button type="submit">Entrar</Button>
        </form>
        <Link to="/signup">Cadastro</Link>
      </Container>
      <Footer />
    </>
  );
};

export default Login;
