import { CompanyCard } from "./CompanyCard";

export function CompanySection() {
  return (
    <section className="min-h-screen bg-black text-white mx-auto md:px-20 ">
      {/* Title */}
      <div>
        <h2 className="text-lime-400 text-2xl font-semibold font-roboto px-10">
          companies<span className="text-white">()</span>
        </h2>
        {/* Companies cards */}
        <div className="flex flex-row flex-wrap md:ml-30">
          {/*Left  Section */}
          <div className="flex flex-col justify-center md:mr-20">
            {/* 1st company */}
            <CompanyCard />

            {/* 2nd company */}
            <CompanyCard />
          </div>
          {/*Middle section */}
          <div className="hidden md:flex">
            <img className="h-full" src="/midline.png" alt="" />
          </div>
          {/*Right section */}
          <div className="flex flex-col">
            {/* 3rd company */}
            <CompanyCard />

            {/* 4th company */}
            <CompanyCard />

            {/* 5th company */}
            <CompanyCard />
          </div>
        </div>
      </div>
    </section>
  );
}
