import { useEffect, useState } from "react";
import ButtonNextPage from "../../../components/ButtonNextPage";
import * as beverageService from "../../../services/beverage-service.ts";
import CatalogCard from "../../../components/CatalogCard/index.tsx";
import SearchBar from "../../../components/SearchBar";
import { BeverageDTO } from "../../../models/beverage.ts";

export default function Catalog() {
  const [beverages, setBeverages] = useState<BeverageDTO[]>([]);

  const [beverageName, setBeverageName] = useState("");

  useEffect(() => {
    //localStorage.setItem("myCategory", JSON.stringify(objTest));

    const obj = JSON.parse(localStorage.getItem("myCategory") || "{}");
    console.log(obj.id);

    beverageService.findPageRequest(0, beverageName).then((response) => {
      setBeverages(response.data.content);
    });
  }, [beverageName]);

  function handleSearch(searchText: string) {
    setBeverageName(searchText);
  }

  return (
    <>
      <main>
        <section id="catalog-section" className="bec-container py-5">
          <SearchBar onSearch={handleSearch} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {beverages.map((beverage) => (
              <CatalogCard key={beverage.id} beverage={beverage} />
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <ButtonNextPage />
          </div>
        </section>
      </main>
    </>
  );
}
