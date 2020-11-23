import React from 'react';
import api from '../Services/api';

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  data: AuthState;
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
  const [login, setLogin] = React.useState<boolean>();
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const getUser = React.useCallback(async token => {
    if (token) {
      const response = await api.get('/api/user', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setData(response.data);
      setLogin(true);
    }
    return null;
  }, []);

  const signIn = React.useCallback(
    async ({ username, password }) => {
      const response = await api.post('jwt-auth/v1/token', {
        username,
        password,
      });
      const { token } = response.data;
      localStorage.setItem('@Dog:token', token);
      const tokenStorage = localStorage.getItem('@Dog:token');
      getUser(tokenStorage);
    },
    [getUser],
  );

  React.useEffect(() => {
    const autoLogin = async () => {
      const token = localStorage.getItem('@Dog:token');
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const response = await api.post(
            'jwt-auth/v1/token/validate',
            {},
            {
              headers: { Authorization: `Bearer ${token}` },
            },
          );
          if (!response.data) throw new Error('Token Inválido');
          getUser(token);
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      }
    };
    autoLogin();
  }, [getUser]);

  return (
    <AuthContext.Provider value={{ signIn, data }}>
      {children}
    </AuthContext.Provider>
  );
};
