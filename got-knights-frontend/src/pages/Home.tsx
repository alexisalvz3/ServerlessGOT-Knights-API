import KnightList from "../components/KnightList";
import { Container, Typography } from "@mui/material";

function Home() {
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Game of Thrones Knights
      </Typography>
      <KnightList />
    </Container>
  );
}

export default Home;
