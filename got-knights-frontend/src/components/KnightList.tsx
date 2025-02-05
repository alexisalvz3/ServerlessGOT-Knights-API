import { useState, useEffect } from "react";
import { getKnights, sortByAllegiance } from "../services/api";
import KnightCard from "./KnightCard";
import { Knight } from "../types/Knight";
import { Grid } from "@mui/material";
import { House } from "../types/House";
import { useParams } from "react-router-dom";

interface HouseProp {
  selectedHouse?: House;
}

function KnightList({ selectedHouse }: HouseProp) {
  const { houseName } = useParams();
  const [knights, setKnights] = useState<Knight[]>([]);

  useEffect(() => {
    console.log("Fetching knights for house:", selectedHouse?.name);
    const fetchKnights = async () => {
      try {
        if (houseName) {
          const data = await sortByAllegiance(decodeURIComponent(houseName));
          console.log("Knights fetched:", data);
          setKnights(data.sort((a, b) => a.name.localeCompare(b.name)));
        } else {
          const data = await getKnights();
          console.log("All knights fetched:", data);
          setKnights(data.sort((a, b) => a.name.localeCompare(b.name)));
        }
      } catch (error) {
        console.error("An error occurred while fetching knights: ", error);
      }
    };
    fetchKnights();
  }, [houseName]);

  return (
    <Grid container spacing={3}>
      {knights.map((knight) => (
        <Grid item xs={12} sm={6} md={4} key={knight.name}>
          <KnightCard knight={knight} />
        </Grid>
      ))}
    </Grid>
  );
}

export default KnightList;
