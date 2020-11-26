import React from 'react';
import { v4 as uuid } from 'uuid';

import ToastContainer from '../Components/ToastContainer';

export type ToastMessage = {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
};

type ToastContextData = {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(): void;
};

export const ToastContext = React.createContext<ToastContextData>(
  {} as ToastContextData,
);

export const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = React.useState<ToastMessage[]>([]);
  const addToast = React.useCallback(
    ({ type, title, description }: Omit<ToastMessage, 'id'>) => {
      const id = uuid();

      const toast = {
        id,
        type,
        title,
        description,
      };
      setMessages(oldMessage => [...oldMessage, toast]);
    },
    [],
  );
  const removeToast = React.useCallback(() => {
    console.log('removeToast');
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};
