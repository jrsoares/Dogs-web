import React from 'react';

const data = {
  email: {
    regex: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi,
    message: 'Preencha um email válido',
  },
};

const useForm = (type: string) => {
  const [value, setValue] = React.useState('');

  const onChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    setValue(e.target.value);
  };

  const obj = {
    value,
    setValue,
    onChange,
  };

  return obj;
};

export default useForm;
