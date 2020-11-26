import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GLobalStyle from './Styles/Global';
import Routes from './Routes';

import { AuthProvider } from './Context/Auth';
import { ToastProvider } from './Context/Toast';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <ToastProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ToastProvider>
    </BrowserRouter>
    <GLobalStyle />
  </>
);

export default App;
