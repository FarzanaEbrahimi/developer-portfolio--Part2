import React from "react";
import { useParams, useNavigate } from "react-router-dom";
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
    AOS.init({ duration: 800 });
  }, []);

  if (!project) {
    return (
      <div className="text-center text-white mt-20">
        Loading or Project not found 🚫
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 transition"
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
            onClick={() => toggleFavorite(project)}
            className="text-2xl mb-2"
          >
            {isFavorite(project.id) ? "⭐" : "☆"}
          </button>

          <h1 className="text-3xl font-bold mb-2">
            {project.title}
          </h1>

          <p className="text-gray-400 mb-4">
            {project.desc}
          </p>

          <p className="text-gray-300 mb-6">
            {project.details}
          </p>

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
              style={{ width: `${project.progress}%` }}
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-500 px-4 py-2 rounded"
            >
              Live Demo
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 px-4 py-2 rounded"
            >
              GitHub
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;