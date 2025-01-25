import axios from 'axios';
import { Knight } from '../types/Knight';
import { House } from '../types/House';

const API_URL = 'https://717i9padz3.execute-api.us-west-1.amazonaws.com/Prod/knights';

export const getKnights = async (): Promise<Knight[]> => {
  const response = await axios.get<Knight[]>(`${API_URL}`);
  return response.data;
};

export const getKnightByName = async (name: string): Promise<Knight> => {
  const response = await axios.get<Knight[]>(`${API_URL}?name=${name}`);
  return response.data[0];
};

export const getAllHouses = async (): Promise<House[]> => {
  try {
    // Fetch all knights
    const knights = await getKnights();

    // Extract allegiances and flatten into a single array
    const allHouses: string[] = knights
      .flatMap((knight) => knight.allegiance.split(",").map((house) => house.trim()));

    // Remove duplicates and format as House[]
    const uniqueHouses: House[] = Array.from(new Set(allHouses)).map((house) => ({
      name: house,
    }));

    return uniqueHouses;
  } catch (error) {
    console.error("Error fetching houses:", error);
    throw error;
  }
};

export const sortByAllegiance = async (name: string): Promise<House []> => {
  const response = await axios.get<House[]>(`${API_URL}?allegiance=${name}`);
  return response.data;
};