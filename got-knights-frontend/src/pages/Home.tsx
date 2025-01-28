import { useState } from "react";
import AllegianceSort from "../components/AllegianceSort";
import KnightList from "../components/KnightList";
import { Container, Typography } from "@mui/material";
import { House } from "../types/House";

function Home() {
  const [selectedHouse, setSelectedHouse] = useState<House>();

  function handleClick(house: House) {
    setSelectedHouse(house);
    console.log("Selected: ", house.name);
  }

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

      <KnightList />
    </Container>
  );
}

export default Home;
