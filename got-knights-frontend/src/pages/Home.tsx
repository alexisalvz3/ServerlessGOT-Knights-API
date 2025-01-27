import AllegianceSort from "../components/AllegianceSort";
import KnightList from "../components/KnightList";
import { Container, Typography } from "@mui/material";

function Home() {
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
        <AllegianceSort />
      </div>

      <KnightList />
    </Container>
  );
}

export default Home;
