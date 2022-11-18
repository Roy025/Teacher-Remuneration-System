import axios from "axios";

export const instance = axios.create({
  baseURL: "https://localhost:5001/api/",
  //headers: { "Content-type": "application/json; charset-UTF-8" },
});
