import axios from "axios";
import { useEffect } from "react";

import auth from "../Firebase/firebase.config";
import { signOut } from "firebase/auth";

const axiosSecure = axios.create({ baseURL: "http://localhost:5000" });

const useAxios = () => {
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
        }
      }
    );
  }, []);
  return axiosSecure;
};

export default useAxios;
