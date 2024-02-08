import Image from "next/image";
import React from "react";
import ReviewImage from "../../../public/reviewImage.png";

import ReviewCard from "./ReviewCard";

function ReviewSection() {
  return (
    <section className=" mt-8 p-4  max-w-[1000px]  mx-auto  ">
      <div className="  mx-auto flex flex-col md:flex-row  items-center md:items-start justify-center max-w-[1300px] gap-12 px-10">
        <div className="flex-1 h-[400px] lg:flex-2">
          <Image src={ReviewImage} alt={"Image of an old man"} height={800} />
        </div>
        <div className="flex-1 md:pt-12 text-center md:text-left">
          <h2 className="text-4xl font-medium">
            {"  We've stopped counting. Over 500 brands count on us."}
          </h2>
          <p className="text-base font-normal pt-4">
            Our 4,000+ team has expertise in almost every programming language.
          </p>
        </div>
      </div>
      <div className=" pt-8  max-w-[1000px] md:mt-[-8rem]">
        <ReviewCard />
      </div>
    </section>
  );
}

export default ReviewSection;
