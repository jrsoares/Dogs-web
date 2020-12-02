import React from 'react';
import Header from '../../Components/Header';
import UserNav from '../../Components/UserNav';
import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <UserNav />
      </Container>
    </>
  );
};

export default Dashboard;
