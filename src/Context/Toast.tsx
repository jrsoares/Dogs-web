import React from 'react';

import ToastContainer from '../Components/ToastContainer';

type ToastContextData = {
  addToast(): void;
  removeToast(): void;
};

export const ToastContext = React.createContext<ToastContextData>(
  {} as ToastContextData,
);

export const ToastProvider: React.FC = ({ children }) => {
  const addToast = React.useCallback(() => {
    console.log('addToast');
  }, []);
  const removeToast = React.useCallback(() => {
    console.log('removeToast');
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};
