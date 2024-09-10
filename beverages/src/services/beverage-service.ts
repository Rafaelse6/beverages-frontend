import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "../utils/system";
import { BeverageDTO } from "../models/beverage";

export function findPageRequest(
  page: number,
  name: string,
  size = 12,
  sort = "name"
) {
  const config: AxiosRequestConfig = {
    method: "GET",
    baseURL: BASE_URL,
    url: "/beverages",
    params: {
      page,
      name,
      size,
      sort,
    },
  };
  return axios(config);
}
export function findById(id: number) {
  return axios.get(`${BASE_URL}/beverages/${id}`);
}

export function addBeverage(beverage: BeverageDTO) {
  throw new Error("Function not implemented.");
}
