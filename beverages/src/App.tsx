import "./App.css";
import ButtonInverse from "./components/ButtonInverse";
import ButtonPrimary from "./components/ButtonPrimary";
import HeaderClient from "./components/HeaderClient/HeaderClient";
import ProductDetailsCard from "./components/ProductDetailsCard";

function App() {
  return (
    <>
      <HeaderClient />
      <main className="bg-bec-color-bg-primary min-h-screen">
        <section id="product-details-section" className="dsc-container py-8">
          <ProductDetailsCard />
          <div className="flex justify-center gap-4 mt-6">
            <ButtonPrimary />
            <ButtonInverse />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
