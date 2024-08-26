import axios from 'axios';
import { Knight } from '../types/Knight';

const API_URL = 'https://717i9padz3.execute-api.us-west-1.amazonaws.com/Prod/knights';

export const getKnights = async (): Promise<Knight[]> => {
  const response = await axios.get<Knight[]>(`${API_URL}`);
  return response.data;
};

export const getKnightByName = async (name: string): Promise<Knight> => {
  const response = await axios.get<Knight[]>(`${API_URL}?name=${name}`);
  return response.data[0];
};