import ButtonNextPage from "../../../components/ButtonNextPage";
import CatalogCard from "../../../components/CatalogCard/index.tsx";
import SearchBar from "../../../components/SearchBar";
import * as beverageService from "../../../services/beverage-service.ts";

export default function Catalog() {
  return (
    <>
      <main>
        <section id="catalog-section" className="bec-container py-5">
          <SearchBar />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {beverageService.findAll().map((beverage) => (
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
