"use client";
import React, { useState } from "react";
import { Reviews } from "../Data/Reviews";
import RightArrow from "../../Assets/Icons/RightArrow.svg";
import LeftArrow from "../../Assets/Icons/LeftArrow.svg";
import Image from "next/image";

const ReviewCard = () => {
  //   const even = Reviews.length % 2 == 0;
  const [activeIdx, setActiveIdx] = useState(1);
  const [transform, setTransform] = useState(0);

  const slide = (direction: string) => {
    if (direction === "left" && activeIdx > 1) {
      setActiveIdx(activeIdx - 1);
      setTransform(transform + 520);
    }

    if (direction === "right" && activeIdx < Reviews.length - 3) {
      setActiveIdx(activeIdx + 1);
      setTransform(transform - 520);
    }
    console.log(activeIdx);
  };

  const disabled = " text-[#cdcdcd] [&_img]:opacity-25";

  return (
    <div className=" w-full overflow-hidden ">
      <div
        className={` min-w-max flex flex-row flex-nowrap items-stretch  relative transition-transform ease-in-out duration-500 `}
        style={{ transform: `translateX(${transform}px)` }}>
        {Reviews.map((el, idx) => {
          return (
            <div
              key={idx}
              className=" bg-white border mx-6 rounded-3xl shadow-lg  h-[450px] w-[360px] max flex flex-col p-8 gap-8 overflow-y-clip justify-start items-stretch">
              <div>{el.stars}</div>
              <div className="text-left ">
                <h3 className=" text-xl font-bold  ">{`"${el.heading}"`}</h3>
                <p className="pt-8 text-sm font-medium">{`"${el.subHeading}"`}</p>
              </div>

              <div className="flex flex-row justify-start items-center gap-3 border-t py-4  ">
                <div className="">{el.userImage} </div>
                <div>
                  <h3 className="text-base font-semibold">{el.userName}</h3>
                  <p className="text-xs pt-1 font-semibold">{el.userCompany}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-row justify-center items-center gap-2 pt-16">
        <div
          onClick={() => slide("left")}
          className={
            "bg-[#F7F7FD] p-2 rounded-full border scale-75 " +
            (activeIdx <= 1 ? disabled : "")
          }>
          <Image src={LeftArrow} alt="previous" />
        </div>
        <div
          onClick={() => slide("right")}
          className={
            "bg-[#F7F7FD] p-2 rounded-full border scale-75 " +
            (activeIdx >= Reviews.length - 3 ? disabled : "")
          }>
          <Image src={RightArrow} alt="next" />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
