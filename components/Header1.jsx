import Image from "next/image";
import React from "react";
import Blocks from "./Blocks";
import Link from "next/link";

const Header1 = () => {
  return (
    <div className="flex justify-between border-b-2 border-gray-300 items-center h-24 px-10">
      <Image
        src={"/logo.png"}
        alt="logo"
        width={200}
        height={200}
        className="w-28 h-28"
      />
      <div className="border-r-2 border-gray-300 h-full flex">
        <Blocks
          title={"Become Member"}
          para={"Additional 10% off on stays."}
          imgSrc={"/card_membership.svg"}
        />
        <Blocks
          title={"OYO For buisness"}
          para={"Trusted by 5000 corporates."}
          imgSrc={"/briefcase.svg"}
        />
        <Blocks
          title={"List your property"}
          para={"Start earning in 30min."}
          imgSrc={"/building.svg"}
        />
        <Blocks
          title={"982342434"}
          para={"Call us to book now."}
          imgSrc={"/telephone.svg"}
        />
        <div className="flex items-center px-3">
          <Image
            src={"/person.svg"}
            alt="person"
            width={200}
            height={200}
            className="w-10 h-10 mr-5"
          />
          <Link className="" href={"/login"}>
            <h3 className="font-bold">Login / Signup</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header1;
