import React from 'react';
import { MenuItem, Select, InputLabel, FormControl } from '@mui/material';

const Dropdown = ({ label, value, onChange, options, style }) => (
  <FormControl fullWidth style={style}>
    <InputLabel>{label}</InputLabel>
    <Select value={value} onChange={onChange} label={label}>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default Dropdown;
