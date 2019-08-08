import React, { useState } from "react";

const Input = ({ handleAppChange }) => {
  const [input, setInput] = useState("");

  const handleChange = e => {
    setInput(e.target.value);
    handleAppChange(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Nama/NIM"
      name="input"
      onChange={handleChange}
    />
  );
};

export default Input;
