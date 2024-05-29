import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://hunger-server.vercel.app",
  // baseURL: "http://localhost:5000",
});

const useAxios = () => {
  return axiosSecure;
};

export default useAxios;
