import { useState } from "react";

type Props = {
  onSearch: Function;
};

export default function SearchBar({ onSearch }: Props) {
  const [text, setText] = useState("");

  function handleChange(event: any) {
    setText(event.target.value);
  }

  function handleResetClick() {
    setText("");
    onSearch(text);
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    onSearch(text);
  }

  return (
    <form
      className="h-10 flex text-bec-color-font-primary w-full max-w-xl mx-auto mb-6"
      onSubmit={handleSubmit}
    >
      <button
        type="submit"
        className="w-10 border border-r-0 border-bec-color-card-border rounded-l text-bec-color-font-primary"
      >
        🔎︎
      </button>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Product name"
        className="flex-grow border-t border-b border-bec-color-card-border border-l-0 px-2.5 text-base text-bec-color-font-primary focus:outline-none placeholder-bec-color-font-placeholder"
      />
      <button
        type="reset"
        onClick={handleResetClick}
        className="w-10 border border-l-0 border-bec-color-card-border rounded-r text-bec-color-font-primary"
      >
        🗙
      </button>
    </form>
  );
}
