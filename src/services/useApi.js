import axios from "axios";

export const useApi = () => {
  axios.defaults.baseURL = process.env.REACT_APP_URL;
  axios.defaults.headers.common["x-rapidapi-host"] = process.env.REACT_APP_HOST;
  axios.defaults.headers.common["x-rapidapi-key"] = process.env.REACT_APP_KEY;
};
