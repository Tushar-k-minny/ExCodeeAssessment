import React from "react";
import ScrollItems from "./ScrollItems";

const classes = " w-full inline-flex flex-nowrap overflow-hidden ";

function TestScroll() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-6 ">
      <div className="flex flex-row justify-center items-center  ">
        <div className={classes}>
          <div className="flex  justify-center md:justify-start items-center gap-6 [&_img]:max-w-none  animate-infinite-scroll-primary px-6">
            <ScrollItems />
          </div>
          <div
            className="flex items-center justify-center md:justify-start gap-6  [&_img]:max-w-none animate-infinite-scroll-primary px-6"
            aria-hidden="true">
            <ScrollItems />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestScroll;
