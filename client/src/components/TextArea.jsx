import React from 'react';
import { TextField } from '@mui/material';

const TextArea = ({ label, value, onChange, style }) => (
  <TextField
    label={label}
    value={value}
    onChange={onChange}
    variant="outlined"
    fullWidth
    multiline
    rows={4}
    style={style}
  />
);

export default TextArea;
