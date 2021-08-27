import React from "react";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup
} from "@material-ui/core";

function RadioItem(props) {
  const { value, label } = props;
  return <FormControlLabel value={value} control={<Radio />} label={label} />;
}

export default function RadioGroupGenerator(props) {
  const { name, label, value, onChange, items } = props;
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <RadioGroup
        row
        name={name}
        label={label}
        value={value}
        onChange={onChange}
      >
        {items.map((item) => (
          <RadioItem key={item.id} value={item.title} label={item.title} />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
