import cocaCola from "../../assets/coca-cola.png";
import HeaderClient from "../../components/HeaderClient/HeaderClient";

export default function Catalog() {
  return (
    <>
      <HeaderClient />
      <main>
        <section id="catalog-section" className="bec-container py-5">
          <form className="bec-search-bar flex items-center mb-5">
            <button type="submit" className="border p-2 rounded-l">
              🔎︎
            </button>
            <input
              type="text"
              placeholder="Nome do produto"
              className="border-t border-b border-r p-2 flex-grow"
            />
            <button type="reset" className="border p-2 rounded-r">
              🗙
            </button>
          </form>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(10)].map((_, index) => (
              <div
                key={index}
                className="border border-bec-color-card-border rounded bg-bec-color-card-bg p-5 shadow-lg"
              >
                <div className="flex justify-center border-b border-bec-color-card-border mb-3">
                  <img
                    src={cocaCola}
                    alt="Computer"
                    className="w-40 h-auto object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-bec-color-font-secondary text-xl font-bold flex items-center">
                    R$ 2,00
                  </h3>
                  <h4 className="text-bec-color-font-primary text-lg font-semibold shadow-md">
                    Coca-Cola
                  </h4>
                  <p className="text-bec-color-font-primary text-sm my-2.5 bg-gray-100 p-3 rounded-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-5">
            <div className="border border-bec-color-btn-primary p-2 rounded text-bec-color-btn-primary text-center font-semibold cursor-pointer">
              Load More
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
