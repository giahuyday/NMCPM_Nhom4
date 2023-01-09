import axios from "axios"

const URL = "http://localhost:5000";

export const fetchUser = () => axios.get(`${URL}/user`)