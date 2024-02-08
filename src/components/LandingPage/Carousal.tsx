"use client";

import React from "react";

import LeftArrow from "../../Assets/Icons/LeftArrow.svg";
import RightArrow from "../../Assets/Icons/RightArrow.svg";
import Image from "next/image";

// interface Disable {
//   left: boolean;
//   right: boolean;
// }

const Carousal = ({ children }: { children: React.ReactNode }) => {
  const scrollAmount = React.useRef<number>(0);
  // const [disabled, setDisabled] = React.useState<Disable>({
  //   left: true,
  //   right: false,
  // });

  const carouselContainer = React.useRef<HTMLDivElement | null>(null);

  const navigation = (dir: string) => {
    const container = carouselContainer.current;
    if (container) {
      let scroll =
        dir === "left"
          ? container.scrollLeft - 320
          : container.scrollLeft + 320;

      scrollAmount.current = scroll;

      container.scrollTo({
        left: scrollAmount.current,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="   max-w-[1200px] mx-auto">
      <div
        className=" flex flex-row p-8  overflow-hidden"
        ref={carouselContainer}>
        {children}
      </div>
      <div className="  flex flex-row justify-center items-center gap-6 ">
        <button
          className={"bg-[#F7F7FD] p-2 rounded-full border scale-75 "}
          onClick={() => navigation("left")}>
          <Image src={LeftArrow} alt={"next card"} />
        </button>
        <button
          className={"bg-[#F7F7FD] p-2 rounded-full border scale-75 "}
          onClick={() => navigation("right")}>
          <Image src={RightArrow} alt={"next card"} />
        </button>
      </div>
    </div>
  );
};

export default Carousal;
