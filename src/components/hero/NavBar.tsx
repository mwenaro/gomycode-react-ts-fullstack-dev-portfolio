export function NavBar() {
  return (
    <div className="scroll-smooth">
      <nav className="flex flex-wrap items-center justify-between p-6 lg:px-8">
        <h1 className="text-2xl font-bold">
          JOHN<span className="text-gray-400">DOE</span>
        </h1>

        {/* Navigation Links */}
        <ul className="flex flex-col md:flex-row gap-2 md:gap-6 mt-4 md:mt-0 text-sm font-medium ">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills"> Skills</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
        </ul>

        {/* Socials + Contact */}
        <div className="flex flex-wrap gap-4 items-center mt-4 md:mt-0">
          <div className="flex items-center gap-1">
            <img
              src="/heroimages/linkedin.png"
              alt="linkedin"
              className="w-6 h-6"
            />
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </div>

          <div className="flex items-center gap-1">
            <img
              src="/heroimages/github.png"
              alt="github"
              className="w-6 h-6"
            />
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>

          <div className="flex items-center gap-1 border border-[#70FF00]  px-3 py-1 rounded-md">
            <img
              src="/heroimages/email.png"
              alt="contact icon"
              className="w-6 h-6"
            />
            <a href="#contact">Contact Me</a>
          </div>
        </div>
      </nav>
    </div>
  );
}
