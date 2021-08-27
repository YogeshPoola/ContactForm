import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1)
  },
  label: {
    textTransform: "none"
  }
}));

export default function ButtonGenerator(props) {
  const classes = useStyles();
  const { text, size, color, variant, onClick, ...other } = props;
  return (
    <Button
      classes={{ root: classes.root, label: classes.label }}
      variant={variant || "contained"}
      size={size || "large"}
      color={color || "primary"}
      onClick={onClick}
      {...other}
    >
      {text}
    </Button>
  );
}
