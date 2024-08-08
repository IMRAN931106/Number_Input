import React, { useState } from "react";
import "./NumberInput.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const NumberInput: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (!value) {
      setMessage("");
      setInputValue("");
      return;
    }

    const number = parseInt(value, 10);

    if (isNaN(number)) {
      return;
    }

    setInputValue(value);

    if (number < 0) {
      setMessage("Please enter a positive value.");
    } else if (number % 2 === 0) {
      const nextEvens = `${number + 2}, ${number + 4}, ${number + 6}`;
      setMessage(`Next 3 even numbers are: ${nextEvens}`);
    } else {
      const nextOdds = `${number + 2}, ${number + 4}, ${number + 6}`;
      setMessage(`Next 3 odd numbers are: ${nextOdds}`);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "35ch" },
      }}
      noValidate
      autoComplete="off"
      className="number-input-container"
    >
      <div className="heading">Number Input Component</div>
      <TextField
        id="outlined-basic"
        label="Enter Your Number"
        variant="outlined"
        type="number"
        value={inputValue}
        onChange={handleInputChange}
      />
      <div className="message">{message}</div>
    </Box>
  );
};

export default NumberInput;
