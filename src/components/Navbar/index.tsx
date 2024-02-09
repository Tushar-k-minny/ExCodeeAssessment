"use client";
import { ReactNode, useEffect, useState } from "react";
import { NavItemType, NavItems } from "../Data/NavItems";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/LogoImg.png";

function NavBar(): ReactNode {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    isOpen
      ? document.body.classList.add("nav_open")
      : document.body.classList.remove("nav_open");
  },[isOpen]);

  return (
    <div className=" max-w-[1000px] mx-auto flex flex-row  justify-between lg:items-center p-4">
      {/* logo here */}
      <div className="flex items-center  text-white mr-6 ">
        <Link href={"/"}>
          <Image src={Logo} alt={"F Logo"} />
        </Link>
      </div>

      {/* hamburger here */}
      <div className="block relative  lg:hidden z-10 ">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className=" flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400">
          <svg
            className={`fill-current h-6 w-6 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-6 w-6 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>

      <div
        className={
          " block w-full h-full  bg-[#F7F7FD]   py-6 lg:py-0 px-4 lg:flex lg:flex-row lg:bg-transparent lg:items-center flex-2  absolute lg:relative  right-0 top-4 lg:top-0  " +
          (isOpen ? "block " : "hidden")
        }>
        {/* Links here */}
        <div
          className={
            "  w-full flex-1  flex flex-col lg:flex-row  lg:items-center lg:justify-center lg:gap-16 bg-[#F7F7FD] py-2  px-6  lg:px-8 lg:rounded-full "
          }>
          {NavItems.map((item: NavItemType, idx) => {
            return (
              <Link
                className="block text-xl lg:text-base  pb-4 hover:text-blue-700 font-semibold lg:pb-1 "
                key={idx}
                href={item.to}>
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* right part */}

        <div className="flex flex-col justify-start items-start lg:flex-row lg:items-center lg:justify-center gap-2 lg:gap-5 m-2">
          <div className="px-3 py-1 flex items-center justify-center">
            <select name="language" className="p-1  rounded-lg focus:border " id="lang">
              <option value="English">EN</option>
              <option value="Hindi">HI</option>
            </select>
          </div>
          <button className="bg-[#3171DE]  px-4 py-2 mt-4 lg:mt-0  lg:py-1  font text-white rounded-full flex items-center ">
            Schedule a call
          </button>
        </div>
      </div>

      {/* outerdiv */}
    </div>
  );
}

export default NavBar;
