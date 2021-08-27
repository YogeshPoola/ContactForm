import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    left: "0",
    height: "100vh",
    width: "150px",
    position: "absolute",
    background: "#253053"
  }
});

export default function SideMenu() {
  const classes = useStyles();
  return <div className={classes.sideMenu}></div>;
}
