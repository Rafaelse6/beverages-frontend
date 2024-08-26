import ButtonNextPage from "../../components/ButtonNextPage";
import CatalogCard from "../../components/CatalogCard";
import HeaderClient from "../../components/HeaderClient/HeaderClient";
import SearchBar from "../../components/SearchBar";
import { BeverageDTO } from "../../models/beverage";

const beverage: BeverageDTO = {
  id: 2,
  name: "Iced Tea",
  description: "This iced tea is pretty delicious",
  imgUrl:
    "https://raw.githubusercontent.com/Rafaelse6/beverages/main/iced-tea.png",
  price: 5.0,
  categories: [
    {
      id: 2,
      name: "Non-Alcoholic",
    },
    {
      id: 3,
      name: "Tea",
    },
    {
      id: 4,
      name: "Iced beverage",
    },
  ],
};

export default function Catalog() {
  return (
    <>
      <HeaderClient />
      <main>
        <section id="catalog-section" className="bec-container py-5">
          <SearchBar />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <CatalogCard beverage={beverage} />
            <CatalogCard beverage={beverage} />
            <CatalogCard beverage={beverage} />
            <CatalogCard beverage={beverage} />
            <CatalogCard beverage={beverage} />
            <CatalogCard beverage={beverage} />
            <CatalogCard beverage={beverage} />
            <CatalogCard beverage={beverage} />
            <CatalogCard beverage={beverage} />
          </div>
          <div className="flex justify-center mt-6">
            <ButtonNextPage />
          </div>
        </section>
      </main>
    </>
  );
}
