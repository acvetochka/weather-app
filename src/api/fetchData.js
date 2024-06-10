import axios from "axios";

const API_URL_LIMIT = (page, limit) =>
  `https://jsonplaceholder.typicode.com/photos?_page=${page}?_limit=${limit}`;
const API_URL = "https://jsonplaceholder.typicode.com/photos";

export const fetchPhotos = async (page, limit) => {
  const response = await axios.get(API_URL_LIMIT(page, limit));
  console.log(response.data)
  return response.data;
}

export const fetchAllPhotos = async () => {
    const response = await axios.get(API_URL);
    console.log(response.data)
    return response.data;
}
