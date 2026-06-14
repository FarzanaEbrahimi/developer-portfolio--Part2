import { Link } from "react-router-dom";
import { useState } from "react";
import { useFavorites } from "../context/FavoritesContext";
import { useToast } from "../context/ToastContext";

const ProjectCard = ({ project, search }) => {
  const [open, setOpen] = useState(false);

  const { toggleFavorite, isFavorite } = useFavorites();
  const { showToast } = useToast();

  const handleFavorite = (e) => {
    e.preventDefault();

    const wasFavorite = isFavorite(project.id);

    toggleFavorite(project);

    if (!wasFavorite) {
      showToast(
        "Added to Favorites ⭐",
        "success",
        () => {
          // UNDO → remove again
          toggleFavorite(project);
        }
      );
    } else {
      showToast(
        "Removed from Favorites ❌",
        "error",
        () => {
          // UNDO → add back
          toggleFavorite(project);
        }
      );
    }
  };

  return (
    <div className="relative bg-gray-900 rounded-xl p-3">

      {/* ⭐ Favorite Button */}
      <button
        onClick={handleFavorite}
        className="absolute top-3 right-3 text-2xl z-10 hover:scale-125 transition"
      >
        {isFavorite(project.id) ? "⭐" : "☆"}
      </button>

      {/* Main Link */}
      <Link to={`/projects/${project.id}`}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded-lg"
        />

        <h3 className="text-lg font-semibold text-white mt-3">
          {project.title}
        </h3>

        <span className="inline-block bg-green-500 text-white text-xs px-2 py-1 rounded mt-2">
          {project.status}
        </span>
      </Link>

      {/* Description */}
      <p className="text-gray-400 text-sm mt-3">
        {project.desc}
      </p>

      {/* Progress */}
      <div className="w-full bg-gray-700 rounded-full h-2 mt-4">
        <div
          className="bg-cyan-500 h-2 rounded-full"
          style={{ width: `${project.progress}%` }}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-4">
        <a
          href={project.demo}
          target="_blank"
          className="bg-cyan-500 px-3 py-2 rounded"
        >
          View
        </a>

        <a
          href={project.github}
          target="_blank"
          className="bg-gray-700 px-3 py-2 rounded"
        >
          Code
        </a>
      </div>

    </div>
  );
};

export default ProjectCard;