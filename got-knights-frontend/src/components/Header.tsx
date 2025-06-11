import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Box,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";

interface SearchBarProps {
  onSearch: (term: string) => void;
}

// Styled components for MUI search layout
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": { backgroundColor: alpha(theme.palette.common.white, 0.25) },
  marginLeft: theme.spacing(2),
  width: "auto",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "300px",
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: theme.spacing(1),
    width: "150px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

// Reusable SearchBar component that takes an onSearch prop
const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [value, setValue] = useState<string>("");
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onSearch(value);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Please Enter Full Name"
          inputProps={{ "aria-label": "search" }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </Search>
      <IconButton
        size="large"
        aria-label="search"
        color="inherit"
        onClick={() => onSearch(value)}
        sx={{ ml: 1 }}
      >
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

// Main Header component
function Header() {
  const navigate = useNavigate();
  const handleTitleClick = () => navigate("/");

  // handleSearch now accepts the search term passed via props
  const handleSearch = (term: string) => {
    const trimmed = term.trim();
    if (trimmed) {
      navigate(`/knight/${encodeURIComponent(trimmed)}`);
    }
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexShrink: 0 }}>
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
        <Box sx={{ flexGrow: 1 }} />
        <SearchBar onSearch={handleSearch} />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
