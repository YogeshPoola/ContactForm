import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

export function useForm(initialFieldValues) {
  const [values, setValues] = useState(initialFieldValues);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const resetForm = () => {
    setValues(initialFieldValues);
    setErrors({});
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1)
    }
  }
}));

export function Form(props) {
  const { children, ...other } = props;
  const classes = useStyles();
  return (
    <form className={classes.root} {...other}>
      {props.children}
    </form>
  );
}
