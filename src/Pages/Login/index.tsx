import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { Container } from './styles';

import Input from '../../Components/Input';
import Button from '../../Components/Button';
import useForm from '../../Hooks/useForm';

const Login: React.FC = () => {
  const username = useForm('email');

  const handleSubmit = React.useCallback(event => {
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
        <form action="" onSubmit={handleSubmit}>
          <Input label="Usuário" type="text" name="username" {...username} />
          <Input label="Senha" type="password" name="password" />
          <Button>Entrar</Button>
        </form>
        <Link to="/signup">Cadastro</Link>
      </Container>
      <Footer />
    </>
  );
};

export default Login;
