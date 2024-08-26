import { BeverageDTO } from "../models/beverage";

export function findAll(): BeverageDTO[] {
  return beverages;
}

export function findById(id: number): BeverageDTO | undefined {
  return beverages.find((x) => x.id === id);
}

let beverages: BeverageDTO[] = [
  {
    id: 1,
    name: "Iced Tea",
    price: 5.0,
    imgUrl:
      "https://raw.githubusercontent.com/Rafaelse6/beverages/main/iced-tea.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    categories: [
      {
        id: 2,
        name: "Non-Alcoholic",
      },
    ],
  },
  {
    id: 2,
    name: "Budweiser",
    price: 4.0,
    imgUrl:
      "https://raw.githubusercontent.com/Rafaelse6/beverages/main/budwaiser.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    categories: [
      {
        id: 1,
        name: "Alcoholic",
      },
      {
        id: 3,
        name: "Beer",
      },
    ],
  },
  {
    id: 7,
    name: "Coca-Cola",
    price: 6.0,
    imgUrl:
      "https://raw.githubusercontent.com/Rafaelse6/beverages/main/coca-cola.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    categories: [
      {
        id: 2,
        name: "Non Alcoholic",
      },
    ],
  },
  {
    id: 15,
    name: "Heineken",
    price: 12.0,
    imgUrl:
      "https://raw.githubusercontent.com/Rafaelse6/beverages/main/heineken.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    categories: [
      {
        id: 1,
        name: "Alcoholic",
      },
    ],
  },
  {
    id: 21,
    name: "Sminorff",
    price: 16.0,
    imgUrl:
      "https://raw.githubusercontent.com/Rafaelse6/beverages/main/sminorff.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    categories: [
      {
        id: 2,
        name: "Alcoholic",
      },
    ],
  },
];
