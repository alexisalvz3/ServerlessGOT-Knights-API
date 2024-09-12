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
        sx={{
          width: "100%",
          height: 300, // set a fixed height
          objectFit: "contain", // this will crop the image to fit while maintaining aspect ratio
          backgroundColor: "#f0f0f0", // center the image within the container
        }}
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
