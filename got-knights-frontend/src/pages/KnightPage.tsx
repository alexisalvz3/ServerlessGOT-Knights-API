import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getKnightByName } from "../services/api";
import { Knight } from "../types/Knight";
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

function KnightPage() {
  const [knight, setKnight] = useState<Knight | null>(null);
  const { name } = useParams<{ name: string }>();

  useEffect(() => {
    const fetchKnight = async () => {
      if (name) {
        const data = await getKnightByName(name);
        setKnight(data);
      }
    };
    fetchKnight();
  }, [name]);

  if (!knight) return <div>Loading...</div>;

  return (
    <Container>
      <Card>
        <CardMedia
          component="img"
          height="300"
          image={knight.imageUrl}
          alt={knight.name}
        />
        <CardContent>
          <Typography variant="h4" component="h1">
            {knight.name}
          </Typography>
          <Typography variant="h6">House: {knight.house}</Typography>
          <Typography variant="body1">Title: {knight.title}</Typography>
          <Typography variant="body1">
            Allegiance: {knight.allegiance}
          </Typography>
          <Typography variant="body1">Sword: {knight.sword}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default KnightPage;
