import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-5">
      <h1 className="text-6xl font-bold text-bec-color-font-primary mb-4">
        404
      </h1>
      <p className="text-xl text-bec-color-font-secondary mb-8">
        Oops! The page you are searching does not exist.
      </p>
      <Link
        to="/"
        className="bg-bec-color-btn-primary text-white px-6 py-3 rounded-md font-semibold"
      >
        Home Page
      </Link>
    </div>
  );
}
