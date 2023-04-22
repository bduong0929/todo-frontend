import axios from "axios";

const TODO_API = axios.create({
  baseURL: "http://localhost:8080/todo/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default TODO_API;
