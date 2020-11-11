/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { Container } from './styles';

import Input from '../../Components/Input';
import Button from '../../Components/Button';

const Login: React.FC = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = React.useCallback(
    event => {
      event.preventDefault();
      fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })
        .then(response => {
          console.log(response);
          return response.json();
        })
        .then(json => {
          console.log(json);
        });
    },
    [username, password],
  );

  return (
    <>
      <Header />
      <Container>
        <h1>Login</h1>
        <form action="" onSubmit={handleSubmit}>
          <Input label="Usuário" type="text" name="username" />
          <Input label="Password" type="password" name="password" />
          <Button>Entrar</Button>
        </form>
        <Link to="/signup">Cadastro</Link>
      </Container>
      <Footer />
    </>
  );
};

export default Login;
