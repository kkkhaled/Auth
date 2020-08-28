import { createMuiTheme } from "@material-ui/core/styles";

const AppTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#0B72B9",
      background: "red",
    },
    secondary: {
      main: "#E91E63",
    },
    background: {
      primary: "#64b5f6",
    },
  },
  typography: {
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
    },
    h4: {
      fontFamily: "Releway",
      fontSize: "1.75rem",
      fontWeight: 700,
    },
    h5: {
      fontFamily: "Arial",
      fontSize: "1.2rem",
      fontWeight: 500,
    },
  },
});
export default AppTheme;
