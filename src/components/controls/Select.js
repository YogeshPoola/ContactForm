import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select
} from "@material-ui/core";
import React from "react";

export default function SelectDropdown(props) {
  const { name, label, value, error = null, options, onChange } = props;
  return (
    <FormControl variant="outlined" {...(error && { error: true })}>
      <InputLabel>{label}</InputLabel>
      <Select label={label} name={name} onChange={onChange} value={value}>
        <MenuItem value="">None</MenuItem>
        {options.map((item) => (
          <MenuItem key={item.id} value={item.title}>
            {item.title}
          </MenuItem>
        ))}
      </Select>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
}
