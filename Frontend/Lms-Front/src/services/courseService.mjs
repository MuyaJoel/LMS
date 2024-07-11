import axios from "axios";

const API_URL ="http://127.0.0.1:3000/api";
const getCourses = async () => {
  const response = await axios.get(`${API_URL}/courses`,{withCredentials:true});
  return response.data.courses;
};
export default getCourses;
