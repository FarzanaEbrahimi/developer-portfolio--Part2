import { Link } from "react-router-dom";
import { useState } from "react";
import { useFavorites } from "../context/FavoritesContext";
import { useToast } from "../context/ToastContext";
import TechBadge from "./TechBadge";

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
    <div
        className="
        relative
        bg-gray-900
        rounded-xl
        p-3
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
        hover:shadow-cyan-500/20
      "
      >

      {/* ⭐ Favorite Button */}
      <button
       type="button"
        onClick={handleFavorite}
        aria-label={
          isFavorite(project.id)
            ? "Remove from favorites"
            : "Add to favorites"
        }
        className="absolute top-3 right-3 text-2xl z-10 hover:scale-125 transition"
      >
        {isFavorite(project.id) ? "⭐" : "☆"}
      </button>

      {/* Main Link */}
      <Link to={`/projects/${project.id}`}>
        <img
          src={project.image}
          alt={`${project.title} project screenshot`}
          loading="lazy"
          className="w-full h-48 object-cover rounded-lg"
        />

        <h3 className="text-lg font-semibold text-white mt-3">
          {project.title}
        </h3>

        <span
          className={`inline-block text-white text-xs px-2 py-1 rounded mt-2 ${
            project.status === "Featured"
              ? "bg-purple-500"
              : "bg-green-500"
          }`}
        >
          {project.status}
        </span>
      </Link>

      {/* Description */}
      <p className="text-gray-100 text-sm mt-3">
        {project.desc}
      </p>
      {/* More Info Button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`project-extra-${project.id}`}
        aria-label={
          open
            ? `Hide additional information for ${project.title}`
            : `Show additional information for ${project.title}`
        }
        className="bg-gray-700 px-3 py-2 rounded mt-2 text-white focus:outline-none
        focus:ring-2
        focus:ring-cyan-400"
      >
        {open ? "Hide Info" : "More Info"}
      </button>

      {/* Expandable Section */}
      {open && (
        <div
          id={`project-extra-${project.id}`}
          className="mt-3 text-gray-300 text-sm space-y-2"
        >
          <p>
            <strong>Problem:</strong> {project.problem}
          </p>

          <p>
            <strong>Solution:</strong> {project.solution}
          </p>

          <p>
            <strong>Outcome:</strong> {project.outcome}
          </p>
        </div>
      )}
      <div className="flex flex-wrap gap-2 mt-3">
        {project.tech?.map((tech) => (
          <TechBadge key={tech} label={tech} />
        ))}
      </div>

      {/* Progress */}
      <div className="w-full bg-gray-700 rounded-full h-2 mt-4">
        <div
          className="bg-cyan-500 h-2 rounded-full"
          role="progressbar"
          aria-label={`${project.progress}% completed`}
          aria-valuenow={project.progress}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: `${project.progress}%` }}
        />
      </div>

      <p className="text-xs text-gray-500 mt-2">
        Click "More Info" or open the project page to learn more.
      </p>

      {/* Buttons */}
      <div className="flex gap-3 mt-4">
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View live demo of ${project.title}`}
          className="
          bg-cyan-600 hover:bg-cyan-700
          px-3
          py-2
          rounded
          focus:outline-none
          focus:ring-2
          focus:ring-cyan-400
          "
        >
          Live Demo
        </a>
        

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View source code of ${project.title}`}
          className="bg-gray-700 px-3 py-2 rounded"
        >
          GitHub
        </a>
      </div>

    </div>
  );
};

export default ProjectCard;