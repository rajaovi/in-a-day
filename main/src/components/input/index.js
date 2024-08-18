import React, { useState } from 'react';

const defaultProps = {
  onChangeInput: () => {}
};

const Input = ({
  inputType,
  inputName,
  inputReqired,
  inputPlaceholder,
  onChangeInput,
  onBlurInput
}) => {
  const [inputValue, setInputValue] = useState('');
  // Define default props for the child component

  const handleInput = (e) => {
    e.preventDefault();
    const inputVar = e.target.value;
    // const inputName = e.target.name;
    setInputValue(inputVar);
    onChangeInput(e);
  };
  const handleBlur = (e) => {
    onBlurInput(e);
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

// Set default props
Input.defaultProps = defaultProps;

export default Input;
