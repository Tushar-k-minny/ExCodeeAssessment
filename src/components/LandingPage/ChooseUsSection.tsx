import React from "react";
import Carousal from "./Carousal";
// import { Reviews } from "../Data/Reviews";
import { ChooseUs } from "../Data/ChooseUs";
const ChooseUsSection = () => {
  return (
    <section className="max-w-[1200px] mx-auto mt-8 ">
      <div
        className="  rounded-3xl  bg-[#F7F7FD] bg-no-repeat px-14 py-8"
        style={{
          backgroundImage: `url(${"/Green.svg"}), url(${"/Blue.svg"})`,
          backgroundPosition: " right top , left bottom",
          backgroundSize: "100px 200px ",
        }}>
        <h2 className="text-center text-3xl pt-12 font-medium ">
          Choose Us: Your Path to Innovation and{" "}
          <span className="block text-[#3171DE] pt-4">Success</span>
        </h2>
        <div className="py-16 ">
          <Carousal>
            {ChooseUs.map((el, idx) => {
              return (
                <div
                  key={idx}
                  className=" scale-75  md:scale-100 bg-white shadow-lg min-w-[380px] px-8 py-6 md:mx-6 rounded-3xl border text-left">
                  <div className="text-2xl font-medium pt-6">{el.heading}</div>
                  <div className="text-sm font-light pt-6">{el.subHeading}</div>
                </div>
              );
            })}
          </Carousal>
        </div>
      </div>
    </section>
  );
};

export default ChooseUsSection;
