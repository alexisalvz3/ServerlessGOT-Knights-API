import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Knight } from "../types/Knight";

interface KnightCardProps {
  knight: Knight;
}

function KnightCard({ knight }: KnightCardProps) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={knight.imageUrl}
        alt={knight.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {knight.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          House: {knight.house}
        </Typography>
        <Link to={`/knight/${encodeURIComponent(knight.name)}`}>
          View Details
        </Link>
      </CardContent>
    </Card>
  );
}

export default KnightCard;
