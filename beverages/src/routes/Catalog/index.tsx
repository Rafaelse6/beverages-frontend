import CatalogCard from "../../components/CatalogCard";
import HeaderClient from "../../components/HeaderClient/HeaderClient";
import SearchBar from "../../components/SearchBar";

export default function Catalog() {
  return (
    <>
      <HeaderClient />
      <main>
        <section id="catalog-section" className="bec-container py-5">
          <SearchBar />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
          </div>
        </section>
      </main>
    </>
  );
}
