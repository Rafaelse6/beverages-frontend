import "./App.css";
import ButtonInverse from "./components/ButtonInverse";
import ButtonPrimary from "./components/ButtonPrimary";
import HeaderClient from "./components/HeaderClient/HeaderClient";
import ProductDetailsCard from "./components/ProductDetailsCard";

function App() {
  return (
    <>
      <HeaderClient />
      <ProductDetailsCard />
      <div className="w-10 gap-5">
        <ButtonPrimary />
        <ButtonInverse />
      </div>
    </>
  );
}

export default App;
