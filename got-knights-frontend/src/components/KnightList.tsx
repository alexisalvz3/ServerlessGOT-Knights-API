import { useState, useEffect } from "react";
import { getKnights } from "../services/api";
import KnightCard from "./KnightCard";
import { Knight } from "../types/Knight";
import { Grid } from "@mui/material";

function KnightList() {
  const [knights, setKnights] = useState<Knight[]>([]);

  useEffect(() => {
    const fetchKnights = async () => {
      const data = await getKnights();
      setKnights(data);
    };
    fetchKnights();
  }, []);

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
