import React from 'react';

const useForm = () => {
  const [value, setValue] = React.useState('');

  const onChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    setValue(e.target.value);
  };

  return Object.assign([value, setValue, onChange] as const, {
    value,
    setValue,
    onChange,
  });
};

export default useForm;
