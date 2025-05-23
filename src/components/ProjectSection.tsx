export function ProjectSection() {
  const projects = [
    { id: 1, name: "Project 1", imageUrl: "./project1.png" },
    { id: 2, name: "Project 2", imageUrl: "./project2.png" },
    { id: 3, name: "Project 3", imageUrl: "./project3.png" },
    { id: 4, name: "Project 4", imageUrl: "./project4.png" },
    { id: 5, name: "Project 5", imageUrl: "./project5.png" },
  ];

  return (
    <div className="px-6 py-10 bg-[#272727] to-black text-white cursor-pointer">
      <h2 className="text-2xl font-bold text-[#70FF00] mb-10 px-10">
        projects<span className="text-white">()</span>
      </h2>

      <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hidden">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative group min-w-[240px] bg-gray-700 rounded-lg overflow-hidden border border-white hover:border-[#70FF00] transition"
          >
            <img
              src={project.imageUrl}
              alt={project.name}
              className="w-full h-40 object-cover"
            />

            {/* Go-to icon on hover */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition">
              <img src="./go-to.png" alt="Go to project" className="w-8 h-8" />
            </div>

            <div className="p-3 font-semibold">{project.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
