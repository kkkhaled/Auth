import React from "react";
import { AppBar, Toolbar, useScrollTrigger } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/core/styles";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },

  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));
export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar disableGutters>Sign-IN</Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
