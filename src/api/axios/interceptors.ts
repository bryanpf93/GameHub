import { Config } from "@/config/env";

import { api } from "./axios";

api.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${Config.API_KEY}`;
    return config;
  },
  (error) => Promise.reject(error)
);
