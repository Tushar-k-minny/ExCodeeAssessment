import Image from "next/image";
import React from "react";
import GroupImg from "../../Assets/Intersect.png";

const LastSection = () => {
  return (
    <section className="w-fit mx-auto pt-14">
      <div className="max-w-[1200px] min-h-[500px] flex flex-col justify-start items-center bg-gradient-to-b from-[#3171DE] to-[#4AC0F2] px-16 pt-20 rounded-3xl text-center">
        <h2 className="text-3xl max-w-[500px] text-white font-medium">
          {"Ready to Transform Your Vision into Reality? Let's Get Started!"}
        </h2>
        <button className="text-md font-base bg-[white] px-5 pt-2 pb-1 rounded-full text-[#5E5DEF] mt-12">
          Schedule a Call
        </button>
      </div>
      <div className="max-w-[1200px]">
        <Image
          src={GroupImg}
          width={400}
          alt={"image of group of people"}
          className=" mx-auto mt-[-150px]  "
        />
      </div>
    </section>
  );
};

export default LastSection;
