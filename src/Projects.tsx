

export function Projects() {
  const projects = [
    { id: 1, name: "Project 1", imageUrl: "./project1.png" },
    { id: 2, name: "Project 2", imageUrl: "./project2.png" },
    { id: 3, name: "Project 3", imageUrl: "./project3.png" },
    { id: 4, name: "Project 4", imageUrl: "./project4.png" },
    { id: 4, name: "Project 4", imageUrl: "./project5.png" },
  ];

  return (
    <div className="px-6 py-10 bg-gradient-to-br from-gray-800 to-black text-white">
      <h2 className="text-2xl font-bold text-lime-400 mb-4">
        projects<span className="text-white">()</span>
      </h2>
      <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
        {projects.map((project) => (
          <div
            key={project.id}
            className="min-w-[240px] bg-gray-700 rounded-lg overflow-hidden border border-transparent hover:border-lime-400 transition"
          >
            <img
              src={project.imageUrl}
              alt={project.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-3 font-semibold">{project.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
