import React from 'react';
import { Container, Logo, Login } from './styles';
import { ReactComponent as Dogs } from '../../Assets/dogs.svg';
import { ReactComponent as Usuario } from '../../Assets/usuario.svg';
import { AuthContext } from '../../Context/Auth';

const Header: React.FC = () => {
  const { data } = React.useContext(AuthContext);
  return (
    <Container>
      <nav>
        <Logo to="/" aria-label="Dogs - Home">
          <Dogs />
        </Logo>

        {data.user ? (
          <Login to="/login">
            {data.user.nome}
            <Usuario style={{ marginLeft: '0.5rem' }} />
          </Login>
        ) : (
          <Login to="/login">
            Login / Criar
            <Usuario style={{ marginLeft: '0.5rem' }} />
          </Login>
        )}
      </nav>
    </Container>
  );
};

export default Header;
