import React from "react";
import { Trusts } from "../Data/Trust";
import Image from "next/image";
import SamsungIcon from "../../Assets/Icons/samsung.svg";
import SonyIcon from "../../Assets/Icons/sony.svg";
const ScrollItems = () => {
  const TrustImages = Trusts.map((el, idx) => {
    return (
      <div className={"text-black"} key={idx}>
        {el.icon}
      </div>
    );
  });

  return (
    <>
      {TrustImages}
      <Image
        className={"flex-1 h-[102px] w-[102px]"}
        src={SamsungIcon}
        alt={"samsung Icon"}
      />
      <Image
        className={"flex-1 h-[102px]  w-[102px]"}
        src={SonyIcon}
        alt={"sony Icon"}
      />
    </>
  );
};

export default ScrollItems;
