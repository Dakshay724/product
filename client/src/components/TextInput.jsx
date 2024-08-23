import React from 'react';
import { TextField } from '@mui/material';

const TextInput = ({ label, value, onChange, style }) => (
  <TextField
    label={label}
    value={value}
    onChange={onChange}
    variant="outlined"
    fullWidth
    style={style}
  />
);

export default TextInput;
