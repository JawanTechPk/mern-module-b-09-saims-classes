import axios from "axios";

const axios_instance = axios.create({
  // you have to use import.meta.env. to get env variables for Vite project
  baseURL: import.meta.env.VITE_APP_API_URL


  // you have to use process.env. to get env variables for React project
  // baseURL: process.env.VITE_APP_API_URL
});

export { axios_instance };
