import { useEffect, useState } from "react";
import AllegianceSort from "../components/AllegianceSort";
import KnightList from "../components/KnightList";
import { Container, Typography } from "@mui/material";
import { House } from "../types/House";
import { useLocation, useNavigate } from "react-router-dom";

function Home() {
  const [selectedHouse, setSelectedHouse] = useState<House>();
  const navigate = useNavigate(); // helps to navigate or switch pages(components)
  const location = useLocation(); // help grabs the location or url of the current page

  const handleClick = (house: House) => {
    setSelectedHouse(house);
    console.log("Selected: ", house.name);
    if (house) {
      //if house allegiance is selected...
      navigate(`/house=${encodeURIComponent(house.name)})`); // create new url with appropriate query parameters
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search); // this grabs the parameters from the current URL
    const houseName = params.get("house"); // grabs the query string argument from the 'house' parameter
    if (houseName) {
      setSelectedHouse({ name: houseName });
    }
  }, [location.search]); // re-renders everytime location.search changes or whenever url changes

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between", // Adjusts the spacing between items
    alignItems: "center", // Aligns items vertically in the center
    marginBottom: "1rem", // Adds spacing below the header
  };
  return (
    <Container>
      <div className="rowC" style={headerStyle}>
        <Typography variant="h2" component="h1" gutterBottom>
          Game of Thrones Knights
        </Typography>
        <AllegianceSort
          handleClick={handleClick}
          selectedHouse={selectedHouse}
        />
      </div>

      <KnightList selectedHouse={selectedHouse} />
    </Container>
  );
}

export default Home;
