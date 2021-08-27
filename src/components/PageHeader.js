import React from "react";
import Paper from '@material-ui/core/Paper'; 
import { Card, Typography,makeStyles } from "@material-ui/core";

const useStyles=makeStyles(theme=>({
  root:{
    backgroundColor:"#f2f2f2",
    paddingLeft:theme.spacing(16)
  },
  pageHeader:{
    padding:theme.spacing(4),
    display:"flex",
    marginBottom:theme.spacing(2)
  },
  pageIcon:{
    display:"inline-block",
    padding:theme.spacing(2),
    color:"#3c4bb1"
  },
  pageTitle:{
    paddingLeft:theme.spacing(4)
  }
}))

export default function PageHeader(props){
  const {title,subTitle,icon}=props
  const classes=useStyles()
  return(
      <Paper elevation={0} square className={classes.root}>
        <div className={classes.pageHeader}>
        <Card className={classes.pageIcon}>
          {icon}
        </Card>
        <div className={classes.pageTitle}>
          <Typography
            variant="h6"
            component="div"
          >
            {title}
          </Typography>
          <Typography
            variant="subtitle2"
            component="div"
          >
            {subTitle}
          </Typography>
        </div>
        </div>
      </Paper>
  )
}