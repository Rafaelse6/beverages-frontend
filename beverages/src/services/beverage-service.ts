import axios from "axios";
import { BASE_URL } from "../utils/system";

export function findAll() {
  return axios.get(`${BASE_URL}/beverages?size=12`);
}

export function findById(id: number) {
  return axios.get(`${BASE_URL}/beverages/${id}`);
}

export function addBeverage(beverage: BeverageDTO) {
  throw new Error("Function not implemented.");
}
