import React, { useState } from 'react';

const Input = ({
  inputType,
  inputName,
  inputReqired,
  inputPlaceholder,
  onChangeInput,
  onBlurInput
}) => {
  const [inputValue, setInputValue] = useState('');
  const handleInput = (e) => {
    const inputVar = e.target.value;
    // const inputName = e.target.name;
    setInputValue(inputVar);
    onChangeInput(e);
  };
  const handleBlur = () => {
    onBlurInput();
  };
  return (
    <input
      type={inputType}
      name={inputName}
      value={inputValue}
      required={inputReqired}
      placeholder={inputPlaceholder}
      onChange={handleInput}
      onBlur={handleBlur}
    />
  );
};

export default Input;
