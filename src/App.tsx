import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GLobalStyle from './Styles/Global';
import Routes from './Routes';

const App: React.FC = () => (
  <>
    <Router>
      <Routes />
    </Router>
    <GLobalStyle />
  </>
);

export default App;
