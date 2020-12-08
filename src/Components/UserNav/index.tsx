import React from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../Context/Auth';
import { ReactComponent as Feed } from '../../Assets/feed.svg';
import { ReactComponent as Statistic } from '../../Assets/estatisticas.svg';
import { ReactComponent as Post } from '../../Assets/adicionar.svg';
import { ReactComponent as Logout } from '../../Assets/sair.svg';

import { Container, ButtonMobile } from './styles';
import useMedia from '../../Hooks/useMedia';

const UserNav: React.FC = () => {
  const { signOut } = React.useContext(AuthContext);
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);

  return (
    <>
      {mobile && (
        <ButtonMobile
          active={!!mobileMenu}
          className="mobileButtonActive"
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
        />
      )}
      <Container>
        <NavLink to="/dashboard" exact activeClassName="active">
          <Feed />
          {mobile && 'Minhas fotos'}
        </NavLink>
        <NavLink to="/dashboard/statistic" activeClassName="active">
          <Statistic />
          {mobile && 'Estatísticas'}
        </NavLink>
        <NavLink to="/dashboard/post" activeClassName="active">
          <Post />
          {mobile && 'Adicionar foto'}
        </NavLink>
        <button type="button" onClick={signOut}>
          <Logout />
          {mobile && 'Sair'}
        </button>
      </Container>
    </>
  );
};

export default UserNav;
