import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GLobalStyle from './Styles/Global';
import Routes from './Routes';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GLobalStyle />
  </>
);

export default App;
