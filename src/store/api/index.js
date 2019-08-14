import axios from "axios";

const baseURL = process.env.API_URL;

const fetchUsers = () => axios.get(`${baseURL}/users`);

export { fetchUsers };
