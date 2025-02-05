import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate("/");
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div">
          <Link
            onClick={handleTitleClick}
            to="/"
            style={{
              cursor: "pointer",
              color: "white",
              textDecoration: "none",
            }}
          >
            Game of Thrones Knights
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
