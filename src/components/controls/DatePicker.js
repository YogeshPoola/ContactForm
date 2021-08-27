import React from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";

const datetoValue = (name, date) => {
  return {
    target: {
      name: name,
      value: date
    }
  };
};

export default function DatePickerGenerator(props) {
  const { name, label, value, onChange } = props;
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        inputVariant="outlined"
        label={label}
        format="MM/dd/yyyy"
        margin="normal"
        name={name}
        value={value}
        onChange={(date) => onChange(datetoValue(name, date))}
      />
    </MuiPickersUtilsProvider>
  );
}
