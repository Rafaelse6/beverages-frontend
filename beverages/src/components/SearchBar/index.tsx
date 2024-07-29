export default function SearchBar() {
  return (
    <form className="h-10 flex text-bec-color-font-primary w-full max-w-xl mx-auto mb-6">
      <button
        type="submit"
        className="w-10 border border-r-0 border-bec-color-card-border rounded-l text-bec-color-font-primary"
      >
        🔎︎
      </button>
      <input
        type="text"
        placeholder="Product name"
        className="flex-grow border-t border-b border-bec-color-card-border border-l-0 px-2.5 text-base text-bec-color-font-primary focus:outline-none placeholder-bec-color-font-placeholder"
      />
      <button
        type="reset"
        className="w-10 border border-l-0 border-bec-color-card-border rounded-r text-bec-color-font-primary"
      >
        🗙
      </button>
    </form>
  );
}
