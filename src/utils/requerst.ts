import axios from "axios";
import { getToken } from "@/utils/auth";
import { Toast } from "vant";

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5000
});

// request interceptor
service.interceptors.request.use(
  (config: any) => {
    let token = getToken();
    if (token) {
      config.headers["Authorization"] = token
    }
    return config;
  },
  (error: object) => {
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  (response: any) => {
    const res = response.data;

    if (res.code !== 0) {
      Toast.fail(res.msg || "Error");
      return Promise.reject(new Error(res.msg || "Error"));
    } else {
      return res;
    }
  },
  (error: any) => {
    console.log("err" + error); // for debug

    Toast.fail(error.msg || "Error");
    return Promise.reject(error);
  }
);

export default service;
