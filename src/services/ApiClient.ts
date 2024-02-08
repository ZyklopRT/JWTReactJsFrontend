import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:54896/api",
});

export default apiClient;
