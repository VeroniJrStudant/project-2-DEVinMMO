import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <Typography align="center" variant="h6">
            DEVinMMO
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
