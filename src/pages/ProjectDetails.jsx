import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { projectsData } from "../data/projectsData";
import { useFavorites } from "../context/FavoritesContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ProjectDetails = () => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectsData.find(
    (p) => p.id === parseInt(id)
  );
  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Farzana Ebrahimi`;
    }

    AOS.init({ duration: 800 });
  }, [project]);
  if (!project) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold text-cyan-400">
        404
      </h1>

      <p className="text-gray-300 mt-4">
        Project not found
      </p>

      <Link
        to="/projects"
        className="mt-6 px-6 py-3 bg-cyan-500 rounded-lg text-white"
      >
        Back to Projects
      </Link>
    </div>
  );
}

  return (
    <main className="min-h-screen bg-gray-900 text-white px-6 py-10">

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        aria-label="Go back to previous page"
        className="
        mb-6
        bg-gray-700
        px-4
        py-2
        rounded
        hover:bg-gray-600
        transition
        focus:outline-none
        focus:ring-2
        focus:ring-cyan-400
        "
      >
        ← Back
      </button>

      {/* Main Card */}
      <div data-aos="zoom-in" className="max-w-4xl mx-auto bg-gray-800 rounded-xl overflow-hidden shadow-lg">

        {/* Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-72 object-cover"
        />

        {/* Content */}
        <div className="p-6">
          <button
            type="button"
            onClick={() => toggleFavorite(project)}
            aria-label={
              isFavorite(project.id)
                ? "Remove from favorites"
                : "Add to favorites"
            }
            className="text-2xl mb-2"
          >
            {isFavorite(project.id) ? "⭐" : "☆"}
          </button>

          <h1 className="text-3xl font-bold mb-2">
            {project.title}
          </h1>

          <p className="text-gray-700 mb-4">
            {project.desc}
          </p>

          <p className="text-gray-300 mb-6">
            {project.details}
          </p>
          <div className="space-y-4 mb-8">

          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="font-bold text-red-400 mb-2">
              Problem
            </h3>

            <p>{project.problem}</p>
          </div>

          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="font-bold text-cyan-400 mb-2">
              Solution
            </h3>

            <p>{project.solution}</p>
          </div>

          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="font-bold text-green-400 mb-2">
              Outcome
            </h3>

            <p>{project.outcome}</p>
          </div>

        </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <h3 className="text-xl mb-2">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="bg-cyan-600 px-3 py-1 rounded-full text-sm hover:scale-105 transition"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Status */}
          <p className="mb-4">
            Status:{" "}
            <span className="text-green-400">
              {project.status}
            </span>
          </p>

          {/* Progress */}
          <div className="w-full bg-gray-700 h-2 rounded">
            <div
              className="bg-cyan-500 h-2 rounded"
              role="progressbar"
              aria-valuenow={project.progress}
              aria-valuemin="0"
              aria-valuemax="100"
              aria-label={`${project.progress}% completed`}
              style={{ width: `${project.progress}%` }}
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded
              focus:outline-none
              focus:ring-2
              focus:ring-cyan-400"
            >
              Live Demo
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 px-4 py-2 rounded
              focus:outline-none
              focus:ring-2
              focus:ring-cyan-400"
            >
              GitHub
            </a>
          </div>

        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;