import { getAllHouses } from "../services/api";
import { useEffect, useState } from "react";
import { House } from "../types/House";

export default function AllegianceSort() {
  const [houses, setHouses] = useState<House[]>([]);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const houseList = await getAllHouses();
        setHouses(houseList.sort((a, b) => a.name.localeCompare(b.name)));
      } catch (error) {
        console.error("Failed to fetch houses:", error);
      }
    };
    fetchHouses();
  }, []);

  return (
    <div className="dropdown">
      <button
        className="btn btn-outline-primary btn-lg dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Sort by Allegiance
      </button>
      <ul className="dropdown-menu">
        {houses.map((house) => (
          <li key={house.name}>
            <a className="dropdown-item" href="#">
              {house.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
