import React from "react";

const HeroSection = () => {
  return (
    <div
      className={
        " heroSm  md:hero mx-auto flex flex-row min-h-[450px] max-w-[1200px] px-10 bg-right-top bg-cover rounded-2xl  md:bg-[length:700px]   m-6 bg-no-repeat"
      }>
      <div className="flex flex-col justify-start items-start gap-3 p-10 text-left l ">
        <h3 className="block text-white md:text-[#F3BC4C] text-sm mb-[-8px] font-medium tracking-wider ">
          TECH SERVICES{" "}
        </h3>
        <h1 className="inline text-white md:text-black [&_span]:block [&_span]:pt-1 text-4xl font-medium ">
          <span>TechSynergy : </span>
          <span>Innovate,</span> <span>Create, Elevate</span>
        </h1>
        <p className="text-sm font-light text-white md:text-black">
          Unlocking Possibilities, One Code at a Time
        </p>
        <button
          className={
            "bg-[#66B066] px-4 py-1 mt-4 rounded-full text-white"
          }>
          See projects
        </button>
      </div>

      <div className="h-min bg-center bg-no-repeat"></div>
      {/* <Image src={hero} alt="heroImage" /> */}
    </div>
  );
};

export default HeroSection;
