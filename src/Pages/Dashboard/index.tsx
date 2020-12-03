import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../Components/Header';
import UserNav from '../../Components/UserNav';
import { Container } from './styles';

const Dashboard: React.FC = () => {
  const [title, setTitle] = React.useState('');
  const location = useLocation();
  React.useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case '/dashboard':
        setTitle('Minha conta');
        break;
      case '/dashboard/statistic':
        setTitle('Estatísticas');
        break;
      case '/dashboard/post':
        setTitle('Postar');
        break;
      default:
        setTitle('Minha conta');
        break;
    }
  }, [location]);
  return (
    <>
      <Header />
      <Container>
        <h1>{title}</h1>
        <UserNav />
      </Container>
    </>
  );
};

export default Dashboard;
