import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Checkbox
} from "@material-ui/core";
import React from "react";

const checkedtoValue = (e) => ({
  target: {
    name: e.target.name,
    value: e.target.checked
  }
});

export default function CheckboxGenerator(props) {
  const { name, label, value, onChange } = props;
  return (
    <FormControl>
      <FormControlLabel
        control={
          <Checkbox
            checked={value}
            onChange={(e) => onChange(checkedtoValue(e))}
            name={name}
          />
        }
        label={label}
      />
    </FormControl>
  );
}
