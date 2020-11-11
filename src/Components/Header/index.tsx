import React from 'react';
import { Container, Logo, Login } from './styles';
import { ReactComponent as Dogs } from '../../Assets/dogs.svg';
import { ReactComponent as Usuario } from '../../Assets/usuario.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <nav>
        <Logo to="/" aria-label="Dogs - Home">
          <Dogs />
        </Logo>
        <Login to="/login">
          Login / Criar
          <Usuario style={{ marginLeft: '0.5rem' }} />
        </Login>
      </nav>
    </Container>
  );
};

export default Header;
