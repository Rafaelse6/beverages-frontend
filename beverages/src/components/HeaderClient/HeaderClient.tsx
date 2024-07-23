import cartIcon from "../../assets/cart.svg";

export default function HeaderClient() {
  return (
    <header className="bg-bec-color-bg-secundary h-16 flex items-center px-5 text-white">
      <nav className="w-full flex justify-between items-center">
        <div className="flex-1 flex justify-center">
          <h1 className="text-lg sm:text-2xl ml-40">Beverages Ecommerce</h1>
        </div>
        <div className="flex items-center">
          <div className="flex items-center mr-5">
            <img src={cartIcon} alt="Cart" className="w-5 h-5" />
            <p className="hidden sm:block ml-1 text-sm sm:text-base">Cart</p>
          </div>
          <a href="#" className="mr-5 text-sm sm:text-base ml-5">
            Sign In
          </a>
        </div>
      </nav>
    </header>
  );
}
