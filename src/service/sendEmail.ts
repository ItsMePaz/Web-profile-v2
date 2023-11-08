import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3010", // Replace with your API endpoint
});

export default instance;
