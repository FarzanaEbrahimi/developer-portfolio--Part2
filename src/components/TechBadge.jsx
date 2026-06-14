const TechBadge = ({ tech }) => {
  return (
    <span className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">
      {tech}
    </span>
  );
};

export default TechBadge;