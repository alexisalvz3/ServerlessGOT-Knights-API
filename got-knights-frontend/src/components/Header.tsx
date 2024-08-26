import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div">
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Game of Thrones Knights
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
