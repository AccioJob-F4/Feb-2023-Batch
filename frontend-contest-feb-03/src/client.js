import axios from "axios";

export const client = axios.create({
  baseURL: `https://www.omdbapi.com`,
});
