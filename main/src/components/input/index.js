import React, { useState } from 'react';

const Input = ({ inputType, inputReqired, inputPlaceholder, onChangeInput }) => {
  const [inputValue, setInputValue] = useState('');
  const handleInput = (e) => {
    const inputVar = e.target.value;
    setInputValue(inputVar);
    onChangeInput(inputVar);
  };
  return (
    <input
      type={inputType}
      value={inputValue}
      required={inputReqired}
      placeholder={inputPlaceholder}
      onChange={handleInput}
    />
  );
};

export default Input;
