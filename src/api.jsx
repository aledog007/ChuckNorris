import axios from 'axios';

const API_URL = 'https://api.chucknorris.io/jokes';

export const getCategories = async () => {
  const response = await axios.get(`${API_URL}/categories`);
  return response.data;
};

export const getJokeByCategory = async (category) => {
  const response = await axios.get(`${API_URL}/random?category=${category}`);
  return response.data;
};

export const getRandomJoke = async () => {
  const response = await axios.get(`${API_URL}/random`);
  return response.data;
};
