import axios from 'axios';

const BASE_URL = 'https://swapi.dev/api';

export const getShips = async (search = '', page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/starships/`, {
      params: {
        search,
        page,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching ships:', error);
    return null;
  }
};

export const getShipDetail = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/starships/${id}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching ship detail:', error);
    return null;
  }
};