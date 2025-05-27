export function ProjectSection() {
  const projects = [
    { id: 1, name: "Project 1", imageUrl: "./project1.png" },
    { id: 2, name: "Project 2", imageUrl: "./project2.png" },
    { id: 3, name: "Project 3", imageUrl: "./project3.png" },
    { id: 4, name: "Project 4", imageUrl: "./project4.png" },
    { id: 5, name: "Project 5", imageUrl: "./project5.png" },
  ];

  return (
    <div className="px-6 py-10 bg-linear-to-r from-[#000000] via-[#272727] to-[#494949] text-white cursor-pointer" id="project">
      <h2 className="text-2xl font-bold text-[#70FF00] mb-10 text-center md:text-left px-4 md:px-10">
        projects<span className="text-white">()</span>
      </h2>

            {/* Mobile grid and desktop horizontal scroll */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:space-x-4 md:overflow-x-auto gap-4 md:gap-0 pb-2 scrollbar-hidden">
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
