import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function NotFound() {

  useEffect(() => {
    document.title = "404 | Page Not Found";
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center text-white px-4">

      <h1 className="text-7xl font-extrabold text-cyan-400 mb-4">
        404
      </h1>

      <h2 className="text-3xl font-bold mb-3">
        Page Not Found
      </h2>

      <p className="text-gray-700 max-w-md mb-8">
        The page you are looking for does not exist or may have been moved.
      </p>

      <Link
        to="/"
        className="
        bg-cyan-500
        hover:bg-cyan-600
        px-6 py-3
        rounded-lg
        transition
        focus:outline-none
        focus:ring-2
        focus:ring-cyan-400
        "
      >
        Back to Home
      </Link>

    </main>
  );
}