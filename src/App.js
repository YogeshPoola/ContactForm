import "./styles.css";
import SideMenu from "./components/SideMenu";
import { CssBaseline, makeStyles } from "@material-ui/core";
import Header from "./components/Header";

import Employees from "./pages/employees/Employees";

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "150px",
    width: "100%"
  }
});

export default function App() {
  const classes = useStyles();
  return (
    <>
      <div className="App">
        <SideMenu />
        <div className={classes.appMain}>
          <Header />
          <Employees/>
        </div>
      </div>
      <CssBaseline />
    </>
  );
}
