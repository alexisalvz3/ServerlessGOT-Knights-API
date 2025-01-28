import { useState, useEffect } from "react";
import { getKnights, sortByAllegiance } from "../services/api";
import KnightCard from "./KnightCard";
import { Knight } from "../types/Knight";
import { Grid } from "@mui/material";
import { House } from "../types/House";

interface HouseProp {
  selectedHouse?: House;
}

function KnightList({ selectedHouse }: HouseProp) {
  const [knights, setKnights] = useState<Knight[]>([]);

  useEffect(() => {
    const fetchKnights = async () => {
      try {
        if (selectedHouse) {
          const data = await sortByAllegiance(selectedHouse.name);
          setKnights(data);
        } else {
          const data = await getKnights();
          setKnights(data);
        }
      } catch (error) {
        console.error("An error occurred while fetching knights: ", error);
      }
    };
    fetchKnights();
  }, [selectedHouse]);

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
