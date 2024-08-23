import React from 'react';
import { TextField } from '@mui/material';

const NumericInput = ({ label, value, onChange, style }) => (
  <TextField
    label={label}
    value={value}
    onChange={onChange}
    variant="outlined"
    fullWidth
    style={style}
    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
  />
);

export default NumericInput;
