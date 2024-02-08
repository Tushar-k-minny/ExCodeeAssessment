import React from "react";
import { Team } from "../Data/Team";
import Image from "next/image";

const TeamSection = () => {
  return (
    <section>
      <div
        className=" mx-auto  max-w-[900px] flex flex-row flex-wrap justify-center items-center bg-no-repeat py-12 "
        style={{
          backgroundImage: `url(${"/Green.svg"}), url(${"/Blue.svg"})`,
          backgroundPosition: "right, left ",
          backgroundSize: "100px 100px",
        }}>
        {Team.map((it, id) => {
          return (
            <div
              key={id}
              className="flex flex-col flex-wrap justify-center items-center mr-[-40px]">
              <Image width={200} src={it.img} alt={it.role + "image"} />

              <h3 className=" text-center max-w-[100px] font-medium ">
                {it.role}
              </h3>
            </div>
          );
        })}
      </div>

      <div className=" flex flex-col justify-center items-center text-center pt-20 gap-12">
        <h3 className="text-4xl font-medium ">{"Let's Form Your Crew."}</h3>
        <button className="text-md font-base bg-[#3171DE] px-5 pt-2 pb-1 rounded-full text-white">
          Schedule a Call
        </button>
      </div>
    </section>
  );
};

export default TeamSection;
[];
