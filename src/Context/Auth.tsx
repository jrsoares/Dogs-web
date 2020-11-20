import React from 'react';
import api from '../Services/api';

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
};

type SignInCredentials = {
  username: string;
  password: string;
};

type AuthState = {
  email: string;
  id: number;
  nome: string;
  username: string;
};

export const AuthContext = React.createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = React.useState<AuthState>({} as AuthState);
  const getUser = React.useCallback(async () => {
    const token = localStorage.getItem('@Dog:token');
    if (token) {
      const response = await api.get('/api/user', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const { email, id, nome, username } = response.data;
      setData({
        email,
        id,
        nome,
        username,
      });
      return data;
    }
    return {};
  }, [data]);

  const signIn = React.useCallback(
    async ({ username, password }) => {
      const response = await api.post('jwt-auth/v1/token', {
        username,
        password,
      });
      const { token } = response.data;
      localStorage.setItem('@Dog:token', token);
      getUser();
    },
    [getUser],
  );

  return (
    <AuthContext.Provider value={{ signIn }}>{children}</AuthContext.Provider>
  );
};
