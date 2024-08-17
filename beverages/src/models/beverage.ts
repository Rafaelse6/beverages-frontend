import { CategoryDTO } from "./category";

export type BeverageDTO = {
  id: number;
  name: string;
  description: string;
  price: number;
  imgUrl: string;
  categories: CategoryDTO[];
};
