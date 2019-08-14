import axios from "axios";

const baseURL = "https://reqres.in/api";

const fetchUsers = () => axios.get(`${baseURL}/users`);

export { fetchUsers };
