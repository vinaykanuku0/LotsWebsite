import axios from "axios";
import "./index.css";
import { baseURL } from "../ConfigFiles/Consts";
let load = 0
const instance = axios.create({
  baseURL: baseURL,
});
instance.interceptors.request.use(
  (config) => {
    load++
    document.body.classList.add("loading-indicator");
    const token = sessionStorage.getItem("token");
    let t1 = "Bearer " + token
    // let t1 = token
    if (token) {
      config.headers["Authorization"] = t1;
    }
    // config.headers['Content-Type'] = 'application/json';
    config.headers['Access-Control-Allow-Origin'] = "*"
    return config;
  },
  (error) => {
    load--
    if (load == 0) {
      document.body.classList.remove("loading-indicator");
    }
    return Promise.reject(error);
  }
);
//Add a response interceptor
instance.interceptors.response.use(
  (response) => {
    load--
    if (load == 0) {
      document.body.classList.remove("loading-indicator");
    }
    return response;
  },
  (error) => {
    load--
     if (load == 0) {
      document.body.classList.remove("loading-indicator");
    }
    return Promise.reject(error);
  }
);

export default instance;
