import React, { useState, useEffect } from "react";
import { projectsData } from "../data/projectsData";
import ProjectCard from "../components/ProjectCard";
import ProjectSkeleton from "../components/ProjectSkeleton";

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState("All");
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [sortBy, setSortBy] = useState("default");

  // Loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Debounce Search
  useEffect(() => {
    setIsSearching(true);

    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setIsSearching(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  const technologies = [
    "All",
    ...new Set(projectsData.flatMap((p) => p.tech)),
  ];

  // Filter + Search
  const filteredProjects = projectsData.filter((project) => {
    const matchesTech =
      selectedTech === "All" ||
      project.tech.includes(selectedTech);

    const matchesSearch =
      project.title
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase()) ||
      project.desc
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase());

    return matchesTech && matchesSearch;
  });

  // Sorting
  const sortedProjects = [...filteredProjects];

  if (sortBy === "progress") {
    sortedProjects.sort((a, b) => b.progress - a.progress);
  }

  if (sortBy === "title") {
    sortedProjects.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }

  return (
    <section className="py-10 px-4">

      {/* Title */}
      <h2 className="text-4xl text-white text-center mb-6">
        Projects
      </h2>

      {/* Search + Sort */}
      <div className="flex flex-col md:flex-row justify-center gap-4 mb-6">

        <input
          type="text"
          placeholder="🔍 Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-96 px-4 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
        />

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-gray-800 text-white px-4 py-3 rounded-xl border border-gray-700"
        >
          <option value="default">Default</option>
          <option value="title">Sort by Name</option>
          <option value="progress">Sort by Progress</option>
        </select>

      </div>

      {/* Searching indicator */}
      {isSearching && (
        <div className="text-center mb-4">
          <span className="text-cyan-400 animate-pulse">
            Searching projects...
          </span>
        </div>
      )}

      {/* Loading */}
      {loading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <ProjectSkeleton key={index} />
          ))}
        </div>
      ) : (
        <>
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {technologies.map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                className={`px-4 py-2 rounded-full transition ${
                  selectedTech === tech
                    ? "bg-cyan-500 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>

          {/* Counter */}
          <p className="text-center text-gray-400 mb-6">
            {sortedProjects.length} project(s) found
          </p>

          {/* Projects */}
          {sortedProjects.length > 0 ? (
            <div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              data-aos="fade-up"
            >
              {sortedProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  search={debouncedSearch}
                />
              ))}
            </div>
          ) : (
            <div
              className="text-center py-20"
              data-aos="zoom-in"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-2">
                No Projects Found
              </h3>
              <p className="text-gray-400">
                Try another keyword or technology.
              </p>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default Projects;