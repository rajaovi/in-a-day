import React from 'react';

const Button = ({ text, btnSize, btnColor, handleButtonClick }) => {
  const handleButton = (e) => {
    e.preventDefault();
    handleButtonClick(e);
  };
  return (
    <button onClick={handleButton} className={`button ${btnSize} ${btnColor}`}>
      {text}
    </button>
  );
};

export default Button;
