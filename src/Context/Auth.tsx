import React from 'react';
import api from '../Services/api';

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  data: AuthState;
  signOut(): void;
};

type SignInCredentials = {
  username: string;
  password: string;
};

type AuthState = {
  token: string;
  user: {
    nome: string;
  };
};

export const AuthContext = React.createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = React.useState<AuthState>(() => {
    const token = localStorage.getItem('@Dog:token');
    const user = localStorage.getItem('@Dog:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }
    return {} as AuthState;
  });

  const signIn = React.useCallback(async ({ username, password }) => {
    const response = await api.post('jwt-auth/v1/token', {
      username,
      password,
    });
    const { token } = response.data;
    localStorage.setItem('@Dog:token', token);

    const localToken = localStorage.getItem('@Dog:token');
    const user = await api.get('/api/user', {
      headers: { Authorization: `Bearer ${localToken}` },
    });
    localStorage.setItem('@Dog:user', JSON.stringify(user.data));
    setData({ token: token.data, user: user.data });
  }, []);

  const signOut = React.useCallback(() => {
    localStorage.removeItem('@Dog:token');
    localStorage.removeItem('@Dog:user');
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, data, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
