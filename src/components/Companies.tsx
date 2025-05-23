import { CompanyCard } from "./CompanyCard";

export function Companies() {
  return (
    <section className="min-h-screen bg-black text-white max-w-[1728px] mx-auto px-6 md:px-20 ">
      {/* Title */}
      <div>
        <h2 className="text-lime-400 text-2xl font-semibold font-roboto mt-">
          companies<span className="text-white">()</span>
        </h2>
      {/* Companies cards */}
      <div className="flex flex-row flex-wrap ml-30">
        
        {/*Left  Section */}
        <div className="flex flex-col justify-center mr-20">
        {/* 1st company */}
        <CompanyCard />

                {/* 2nd company */}
        <CompanyCard />
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
