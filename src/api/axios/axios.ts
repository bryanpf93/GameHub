import axios from "axios";

import { Config } from "@/config/env";

export const api = axios.create({
  baseURL: Config.API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  }
});
