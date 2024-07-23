import cartImg from "../../assets/cart.svg";

export default function HeaderClient() {
  return (
    <header className="bg-bec-color-bg-secundary h-16 flex items-center px-5 text-white">
      <nav className="flex justify-between items-center w-full">
        <div className="flex-grow flex justify-center">
          <h1 className="text-lg sm:text-2xl ml-40">Beverages Ecommerce</h1>
        </div>
        <div className="flex items-center">
          <div className="flex items-center mr-5">
            <img src={cartImg} alt="Cart" className="w-5 h-5" />
            <p className="hidden sm:block ml-1 text-sm sm:text-base">Cart</p>
          </div>
          <a href="#" className="text-sm sm:text-base mr-12">
            Sign In
          </a>
        </div>
      </nav>
    </header>
  );
}
