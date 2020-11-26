import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { Container, Form, Error, Forgot, Content } from './styles';
import api from '../../Services/api';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import { AuthContext } from '../../Context/Auth';

interface FormInputs {
  username: string;
  email: string;
  password: string;
}
const schema = yup.object().shape({
  username: yup.string().required('Usuário obrigatório'),
  email: yup
    .string()
    .email('Deve ser um email válido')
    .required('Email obrigatório'),
  password: yup.string().required('Senha obrigatória'),
});

const Signup: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });
  const { signIn } = React.useContext(AuthContext);

  const onSubmit = React.useCallback(
    async (data: FormInputs) => {
      const { username, email, password } = data;
      const response = await api.post('api/user', {
        username,
        email,
        password,
      });
      if (response) signIn({ username, password });
    },
    [signIn],
  );

  return (
    <>
      <Header />
      <Container>
        <Content>
          <h1>Cadastro</h1>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="text"
              label="Usuário"
              name="username"
              register={register}
            />
            <Error>{errors.username?.message}</Error>
            <Input
              type="email"
              label="E-mail"
              name="email"
              register={register}
            />
            <Error>{errors.email?.message}</Error>
            <Input
              type="password"
              label="Senha"
              name="password"
              register={register}
            />
            <Error>{errors.password?.message}</Error>

            <Button type="submit">Cadastrar</Button>
          </Form>

          <Forgot to="/forgotPassword">Perdeu a senha?</Forgot>
        </Content>
      </Container>
      <Footer />
    </>
  );
};

export default Signup;
