import React from "react";
import Image from "next/image";
import Logo from "../../../public/LogoImg.png";
import Link from "next/link";
import facebook from "../../Assets/Icons/facebook.svg";
import linkedin from "../../Assets/Icons/linkedIn.svg";
import twitter from "../../Assets/Icons/twitter.svg";
import { Company, Info, Products } from "./Data";
import Submit from "../../Assets/Icons/Submit.svg";

const styles = {
  footerLinks:
    " flex flex-col  gap-1 text-left [&_h4]:font-medium [&_h4]:pb-1 py-4 ",
  Links: " text-sm ",
};

const index = () => {
  return (
    <section className=" mx-auto  max-w-[1200px] mt-10  ">
      <div className="top flex flex-row flex-wrap justify-start gap-6  md:justify-around  items-start p-8">
        <div className={styles.footerLinks}>
          <h4>Product</h4>
          {Products.map((it, idx) => {
            return (
              <Link key={idx} className={styles.Links} href={it.to}>
                {it.label}
              </Link>
            );
          })}
        </div>
        <div className={styles.footerLinks}>
          <h4>Information</h4>
          {Info.map((it, idx) => {
            return (
              <Link key={idx} className={styles.Links} href={it.to}>
                {it.label}
              </Link>
            );
          })}
        </div>
        <div className={styles.footerLinks}>
          <h4>Company</h4>
          {Company.map((it, idx) => {
            return (
              <Link key={idx} className={styles.Links} href={it.to}>
                {it.label}
              </Link>
            );
          })}
        </div>
        <div className="subscribe max-w-[400px] flex flex-col px-4 py-6 border-3 rounded-3xl bg-[#203C860D] gap-2">
          <div>Subscribe</div>
          <form className="flex flex-row h-[50px] border-2 rounded-full">
            <input className="w-full rounded-full" />
            <button className="bg-blue-400 px-5 pt-1 rounded-full ">
              <Image src={Submit} alt={"submit button"} height={20} />
            </button>
          </form>
          <p className="pt-2 text-sm font-light">
            Hello, we are Lift Media. Our goal is to translate the positive
            effects from revolutionizing how companies engage with their clients
            & their team.
          </p>
        </div>
      </div>

      {/* {bottom} */}
      <div className="bottom flex flex-row flex-wrap-reverse gap-2 justify-between items-center border-t-2 py-6 mx-6">
        <Image src={Logo} alt={"Logo"} />
        <div className="flex flex-row justify-center items-center gap-4">
          <Link href={"/"}>Terms</Link>
          <Link href={"/"}>Privacy</Link>
          <Link href={"/"}>Cookies</Link>
        </div>
        <div className=" flex flex-row gap-2 justify-center  items-center">
          <Image src={facebook} alt={"facebook Image"} height={50} />
          <Image src={linkedin} alt={"linked In image"} height={50} />
          <Image src={twitter} alt={"twitter image"} height={50} />
        </div>
      </div>
    </section>
  );
};

export default index;
