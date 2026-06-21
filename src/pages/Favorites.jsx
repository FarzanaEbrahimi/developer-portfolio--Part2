import React, { useEffect }from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

const Favorites = () => {
  const { favorites, toggleFavorite } = useFavorites();

  useEffect(() => {
    document.title = "Farzana Ebrahimi | Favorites";
  }, []);

  return (
    <main className="py-20 min-h-screen"
    aria-labelledby="favorites-heading">
      <div className="container mx-auto px-4">

        <h1 
          id="favorites-heading"
          className="text-4xl font-bold text-center mb-3"
        >
          Favorite Projects ⭐
        </h1>

        <p className="text-center text-gray-100 mb-10">
          {favorites.length} saved project(s) in your portfolio collection
        </p>

        {favorites.length === 0 ? (
          <div className="text-center mt-20">

            <div className="text-7xl mb-6 animate-bounce">
              ⭐
            </div>

            <h2 className="text-3xl font-bold mb-3">
              No Favorites Yet
            </h2>

            <p className="text-gray-700 mb-8 max-w-md mx-auto">
              You haven't added any projects to your favorites list.
              Explore projects and save the ones you like.
            </p>

           <Link
              to="/projects"
              className="
              bg-cyan-500
              hover:bg-cyan-600
              transition
              px-6
              py-3
              rounded-lg
              text-white
              font-semibold
              focus:outline-none
              focus:ring-2
              focus:ring-cyan-400
              "
            >
              Browse Projects
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {favorites.map((project) => (
              <div
                key={project.id}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-300"
              >
                <img
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  className="w-full h-48 object-cover"
                />

                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-700 text-sm mb-4">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-cyan-600 text-xs px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Link
                      to={`/projects/${project.id}`}
                      className="
                      flex-1
                      text-center
                      bg-cyan-500
                      hover:bg-cyan-600
                      px-4
                      py-2
                      rounded
                      transition
                      focus:outline-none
                      focus:ring-2
                      focus:ring-cyan-400
                      "     
                    >
                      Details
                    </Link>

                    <button
                      type="button"
                      aria-label={`Remove ${project.title} from favorites`}
                      onClick={() => toggleFavorite(project)}
                      className="
                      flex-1
                      bg-red-500
                      hover:bg-red-600
                      px-4
                      py-2
                      rounded
                      transition
                      focus:outline-none
                      focus:ring-2
                      focus:ring-red-400
                      "
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}

          </div>
        )}

      </div>
    </main>
  );
};

export default Favorites;