import React from "react";
import Image from "next/image";

import clock from "@/assets/global/clock.png";

import "./BidBar.css";

const BidBar = ({ language }) => {
  return (
    <div className="bidbar">
      <div className="bid-info">
        <div className="clock">
          <Image src={clock} alt="" width={20} />
          <span>13:05:22</span>
        </div>
        <div className="value">
          <span>{language.bid}</span>
          <span>$24.000</span>
        </div>
      </div>
      <button className="button-green">{language.button}</button>
    </div>
  );
};

export default BidBar;
