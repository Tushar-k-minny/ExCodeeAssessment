import React from "react";
import Image from "next/image";
import monitor from "../../Assets/Icons/monitor.svg";
import sim from "../../Assets/Icons/simcard.svg";
import driver from "../../Assets/Icons/driver.svg";

const data: {
  icon: string;
  heading: string;
  subHeading: string;
}[] = [
  {
    icon: monitor,
    heading: "Front-end",
    subHeading:
      "Our frontend developers understand the delicate balance between aesthetics and functionality. ",
  },
  {
    icon: sim,
    heading: "Back-end",
    subHeading:
      "Our backend developers are the architects of efficiency and security. They design and build the databases andAPIs.",
  },
  {
    icon: driver,
    heading: "Data Analysts",
    subHeading:
      "Our data analytics team is a blend of mathematicians, statisticians, and technology enthusiasts. ",
  },
];

function ChallengesSection() {
  return (
    <section className="flex  flex-col justify-center items-center p-5 gap-6">
      <h2 className="text-[32px] font-medium py-6">
        We have multidisciplinary teams to meet any{" "}
        <span className=" text-[#3171DE]">challenge</span>.
      </h2>
      <div className="flex flex-row justify-between items-center flex-wrap gap-5 shadow-lg p-8 rounded-2xl ">
        {data.map((el) => {
          return (
            <div key={el.heading} className="flex flex-col gap-3 max-w-[350px]">
              <Image
                src={el.icon}
                alt={el.heading + "icon"}
                className="h-10 mb-4"
              />
              <h3 className="text-xl font-medium mb-[-8px]">{el.heading}</h3>
              <p className="text-md font-extralight">{el.subHeading}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ChallengesSection;
