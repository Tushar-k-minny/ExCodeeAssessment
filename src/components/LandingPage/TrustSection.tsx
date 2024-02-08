import React from "react";
import TestScroll from "./TestScroll";

const TrustSection = () => {
  const style = { backgroundImage: `url(${"/Green.svg"})` };
  return (
    <section
      className=" max-w-[1200px]  bg-[#F7F7FD] mx-auto bg-left-top bg-no-repeat bg-[length:50px_50px] md:bg-[length:150px_100px] 
      flex  flex-col justify-center items-center rounded-3xl "
      style={{ ...style }}>
      <div className=" mx-auto flex flex-col justify-center items-center py-16 md:py-8 ">
        <h2 className="text-2xl text-center  font-medium ">
          Trusted by Leading Organizations
        </h2>
        <p className=" max-w-[500px] text-center p-6 text-md font-light ">
          Our 4,000+ team has expertise in almost everyprogramming language.
        </p>
      </div>
      <TestScroll />
      <button className="bg-[#3171DE] px-3 pt-2 pb-1 rounded-full text-center text-white mb-8 mt-4 ">
        Our full repertorie
      </button>
    </section>
  );
};

export default TrustSection;
