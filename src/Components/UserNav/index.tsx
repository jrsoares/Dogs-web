import React from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../Context/Auth';
import { ReactComponent as Feed } from '../../Assets/feed.svg';
import { ReactComponent as Statistic } from '../../Assets/estatisticas.svg';
import { ReactComponent as Post } from '../../Assets/adicionar.svg';
import { ReactComponent as Logout } from '../../Assets/sair.svg';

import { Container } from './styles';

const UserNav: React.FC = () => {
  const [mobile, setMobile] = React.useState(null);
  const { signOut } = React.useContext(AuthContext);
  return (
    <Container>
      <NavLink to="/dashboard">
        <Feed />
        {mobile && 'Minhas fotos'}
      </NavLink>
      <NavLink to="/dashboard/statistic ">
        <Statistic />
        {mobile && 'Estatísticas'}
      </NavLink>
      <NavLink to="/dashboard/post">
        <Post />
        {mobile && 'Adicionar foto'}
      </NavLink>
      <button type="button" onClick={signOut}>
        <Logout />
        {mobile && 'Sair'}
      </button>
    </Container>
  );
};

export default UserNav;
