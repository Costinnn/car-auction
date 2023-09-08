import React from "react";
import Image from "next/image";

import addFavorite from "@/assets/global/add-favorite.png";
import favorite from "@/assets/global/favorite.png";

import "./Heading.css";

const Heading = () => {
  return (
    <div className="heading">
      <div className="row1">
        <span className="title">1998 BMW 316i Touring</span>
        <Image src={addFavorite} alt="img" width={23} height={23} />
      </div>
      <span className="description">5-speeed Manual, Euro-Spec E36 Wagon</span>
    </div>
  );
};

export default Heading;
