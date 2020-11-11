import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  background: #fff;
  width: 100%;
  top: 0px;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Logo = styled(Link)`
  padding: 0.5rem 0;
`;

export const Login = styled(Link)`
  color: #333;
  display: flex;
  align-items: center;
`;
