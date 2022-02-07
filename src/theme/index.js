import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*": {
          margin: 0,
          padding: 0,
          outline: 0,
          boxSizing: "border-box",
        },
        body: {
          textRendering: "optimizeLegibility !important",
          WebkitFontSmoothing: "antialiased !important",
        },
        button: {
          cursor: "pointer",
        },
        a: {
          textDecoration: "none",
        },
      },
    },
    MuiDivider: { middle: { marginLeft: 0, marginRight: 0 } },
  },
});

export default theme;
