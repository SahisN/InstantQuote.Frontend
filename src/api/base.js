import { baseUrl } from "./config";
import axiosModule from "axios";

export const axios = axiosModule.create({
  baseURL: baseUrl,
  timeout: 30000,
});

export async function request(config) {
  const headers = config.headers || {};

  if (config.accessToken) {
    headers["x-token-acess"] = config.accessToken;
  }

  try {
    const response = await axios({ ...config, headers });
    return response.data;
  } catch (error) {
    throw error instanceof Error ? error : new Error("An unkown error occured");
  }
}
