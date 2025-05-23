export function Hero() {
  return (
    <section className=" m-4 flex flex-col md:flex-row justify-between items-center px-6 py-10 gap-x-8">
      {/* Left Side Content */}
      <div className="mb-10 md:mb-0 md:w-1/2 text-center md:text-left">
        <p className="text-xl font-semibold pb-2">Hello, i am</p>

        <h1 className="text-[#70FF00] text-4xl md:text-5xl font-semibold">
          &lt;John <br /> Doe/&gt;
        </h1>

        <h2 className="text-3xl mt-4 font-semibold pb-4 pt-4">
          Fullstack Developer
        </h2>

        {/* Experience & Projects */}
        <div className="flex justify-center md:justify-start items-center gap-8 mt-6">
          {/* Experience */}
          <div className="flex items-center gap-2">
            <span className="font-bold text-5xl text-[#4F4F4F]">5</span>
            <span className="text-sm leading-5 text-left">
              YEARS OF <br /> EXPERIENCE
            </span>
          </div>

          {/* Projects */}
          <div className="flex items-center gap-2">
            <span className="font-bold text-5xl text-[#4F4F4F]">13</span>
            <span className="text-sm leading-5 text-left">
              PROJECTS COMPLETED <br /> AROUND THE WORLD
            </span>
          </div>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="flex-1 flex justify-center md:justify-end">
        <img
          src="/heroimages/heroimage.png"
          alt="Hero image"
          className="w-100 h-100 object-cover "
        />
      </div>
    </section>
  );
}
