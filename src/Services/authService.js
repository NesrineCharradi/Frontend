import jwtDecode from "jwt-decode";
import axios from "axios";

function getCurrentUser() {
    try {
      const token = localStorage.getItem("token");
  
      return jwtDecode(token);
    } catch (error) {
      return null;
    }
  }
function loginUserApi(data) {
  return axios.post("http://127.0.0.1:8000/api/login", data);
}


export default {
 getCurrentUser,
  loginUserApi,}
 
