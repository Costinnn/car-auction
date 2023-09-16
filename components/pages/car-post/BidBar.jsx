"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

import clock from "@/assets/global/clock.png";

import "./BidBar.css";
import CountdownTimer from "@/components/global/CountdownTimer";

const BidBar = ({ language, data, sellerId, userId }) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    if (!userId || userId !== sellerId) {
      setIsShown(true);
    } else {
      setIsShown(false);
    }
  }, [userId]);

  return (
    <div className="bidbar">
      <div className="bid-info">
        <div className="clock">
          <Image src={clock} alt="" width={20} />
          <CountdownTimer expiresAt={data} />
        </div>
        <div className="value">
          <span>{language.bid}</span>
          <span>$24.000</span>
        </div>
      </div>
      {isShown && <button className="button-green">{language.button}</button>}
    </div>
  );
};

export default BidBar;
