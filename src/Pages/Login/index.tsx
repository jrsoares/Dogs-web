import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { report } from 'process';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { Container, Error } from './styles';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import api from '../../Services/api';

interface FormInputs {
  username: string;
  password: string;
}
const schema = yup.object().shape({
  username: yup.string().required('Usuário obrigatório'),
  password: yup.string().required('Senha obrigatória'),
});

const Login: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });

  React.useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('@Dog:token');
      const result = await api.get('/api/user', {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(result.data);
    };
    fetchData();
  }, []);

  const onSubmit = React.useCallback(
    async ({ username, password }: FormInputs) => {
      const response = await api.post('jwt-auth/v1/token', {
        username,
        password,
      });
      const { token } = response.data;
      localStorage.setItem('@Dog:token', token);
    },
    [],
  );

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
