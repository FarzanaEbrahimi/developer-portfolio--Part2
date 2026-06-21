const TechBadge = ({ label }) => {
  return (
    <span className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">
      {label}
    </span>
  );
};

export default TechBadge;