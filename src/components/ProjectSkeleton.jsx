const ProjectSkeleton = () => {
  return (
    <div className="bg-gray-800 rounded-xl p-4 animate-pulse">
      <div className="w-full h-48 bg-gray-700 rounded-lg"></div>

      <div className="h-6 bg-gray-700 rounded mt-4 w-3/4"></div>

      <div className="h-4 bg-gray-700 rounded mt-3"></div>
      <div className="h-4 bg-gray-700 rounded mt-2 w-5/6"></div>

      <div className="h-2 bg-gray-700 rounded mt-4"></div>

      <div className="flex gap-3 mt-6">
        <div className="h-10 w-24 bg-gray-700 rounded"></div>
        <div className="h-10 w-24 bg-gray-700 rounded"></div>
      </div>
    </div>
  );
};

export default ProjectSkeleton;