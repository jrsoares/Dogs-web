import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GLobalStyle from './Styles/Global';
import Routes from './Routes';

import { AuthProvider } from './Context/Auth';

const App: React.FC = () => (
  <>
    <Router>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Router>

    <GLobalStyle />
  </>
);

export default App;
