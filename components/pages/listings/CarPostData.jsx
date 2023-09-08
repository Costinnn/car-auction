import CarPost from "@/components/global/CarPost";
import React from "react";

const CarPostData = ({ language }) => {
  return (
    <>
      <CarPost language={language} />
      <div className="carpostdata">
        <span>{language.lastbids}:</span>
        <ul>
          <li className="button-empty">$38.000</li>
          <li className="button-empty">$23.500</li>
          <li className="button-empty">$22.000</li>
          <li className="button-empty">$20.500</li>
        </ul>
      </div>
    </>
  );
};

export default CarPostData;