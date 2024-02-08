import React from "react";
import { Services } from "../Data/ServicesCard";
import Image from "next/image";
import Blue from "../../../public/Blue.svg";

const style = {
  backgroundImage: `url(${"/Green.svg"}), url(${"/Blue.svg"})`,
  backgroundPosition: "right top, left bottom ",
};

function ServicesSection() {
  return (
    <section className="flex flex-col justify-center items-center p-8 gap-16 overflow-x-hidden  ">
      <div className="flex justify-center items-start gap-4  font-medium  ">
        <Image src={Blue} alt={"Blue pentagon shape"} height={50} />
        <h2 className="max-w-[750px] text-4xl ">
          Empowering Your Digital Vision: Our Comprehensive Tech Services.
        </h2>
      </div>
      <div
        style={{ ...style }}
        className=" mx-auto flex overflow-x-scroll  justify-start w-[80vw]  xl:w-[1100px] lg:flex-wrap  lg:justify-center bg-no-repeat bg-top   bg-auto  ">
        {Services.map((el) => {
          return (
            <div
              key={el.heading}
              className="min-w-[300px] max-w-[320px]  flex flex-col justify-center items-start gap-3 p-6  rounded-2xl m-4 shadow-md border bg-white ">
              <div className="flex justify-center items-center">
                <Image
                  src={el.icon}
                  alt={el.heading + "icon"}
                  className="h-[50px] mb-6"
                />
              </div>
              <h3 className="text-xl font-medium ">{el.heading}</h3>
              <p className="text-sm font-light "> {el.subText}</p>
            </div>
          );
        })}
      </div>
      {/* <Image
        src={Green}
        alt={"background Image"}
        className="relative right-[0px] "
      /> */}
    </section>
  );
}

export default ServicesSection;
