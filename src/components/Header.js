import React from "react";
import AppBar from "@material-ui/core/AppBar";
import {
  Badge,
  Grid,
  IconButton,
  InputBase,
  makeStyles,
  Toolbar
} from "@material-ui/core";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles({
  root: {
    background: "#fff"
  },
  searchInput: {
    opacity: "0.8",
    padding: "8px 8px",
    fontSize: "0.8rem",
    "&:hover": {
      background: "#f2f2f2"
    }
  }
});

export default function Header() {
  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.root} position="static">
        <Toolbar>
          <Grid container>
            <Grid item sm={4}>
              <InputBase
                className={classes.searchInput}
                placeholder="search..."
                startAdornment={<SearchIcon />}
              />
            </Grid>
            <Grid item sm={8}>
              <IconButton>
                <Badge badgeContent={4} color="secondary">
                  <NotificationsNoneIcon />
                </Badge>
              </IconButton>
              <IconButton>
                <Badge badgeContent={4} color="secondary">
                  <ChatBubbleOutlineIcon />
                </Badge>
              </IconButton>
              <IconButton>
                <PowerSettingsNewIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
