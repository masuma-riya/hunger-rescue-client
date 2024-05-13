import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://hunger-server.vercel.app",
});

const useAxios = () => {
  return axiosSecure;
};

export default useAxios;
