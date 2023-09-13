import React from "react";
import Image from "next/image";

import addFavorite from "@/assets/global/add-favorite.png";
import favorite from "@/assets/global/favorite.png";

import "./Heading.css";

const Heading = ({
  language,
  title,
  gears,
  transmission,
  engineCapacity,
  engineConfiguration,
  engineCylinders,
}) => {
  return (
    <div className="heading">
      <div className="row1">
        <h1 className="title">{title}</h1>
        <Image src={addFavorite} alt="img" width={23} height={23} />
      </div>
      <span className="description">{`${gears}-${language.speed} ${transmission} ${engineCapacity}L ${language.engine}
          ${engineConfiguration}${engineCylinders}`}</span>
    </div>
  );
};

export default Heading;
