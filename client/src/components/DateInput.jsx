import React from 'react';
import { TextField } from '@mui/material';

const DateInput = ({ label, value, onChange, style }) => (
  <TextField
    label={label}
    type="date"
    value={value}
    onChange={onChange}
    variant="outlined"
    fullWidth
    InputLabelProps={{ shrink: true }}
    style={style}
  />
);

export default DateInput;
