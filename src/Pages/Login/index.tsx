import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import {
  Container,
  Form,
  Error,
  Forgot,
  Signin,
  Signup,
  Content,
} from './styles';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import { AuthContext } from '../../Context/Auth';
import { ToastContext } from '../../Context/Toast';

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

  const { signIn } = React.useContext(AuthContext);
  const { addToast } = React.useContext(ToastContext);

  const onSubmit = React.useCallback(
    async (data: FormInputs) => {
      try {
        await signIn({ username: data.username, password: data.password });
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credenciais',
        });
      }
    },
    [signIn, addToast],
  );

  return (
    <>
      <Header />
      <Container>
        <Content>
          <h1>Login</h1>
          <Form onSubmit={handleSubmit(onSubmit)}>
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
          </Form>

          <Forgot to="/forgotPassword">Perdeu a senha?</Forgot>

          <Signin>
            <h2>Cadastre-se</h2>
            <p>Ainda não possui conta?</p>
          </Signin>
          <Signup to="/signup">Cadastre-se</Signup>
        </Content>
      </Container>
      <Footer />
    </>
  );
};

export default Login;
