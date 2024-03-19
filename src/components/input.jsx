import React from "react";

const InputWithButton = ({ buttonText, placeholder, onClick }) => {
  const [inputValue, setInputValue] = React.useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    onClick(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>{buttonText}</button>
    </div>
  );
};

export default InputWithButton;
