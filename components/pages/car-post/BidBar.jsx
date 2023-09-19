"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

import clock from "@/assets/global/clock.png";
import close from "@/assets/global/close.png";
import dollar from "@/assets/global/dollar.png";
import loading from "@/assets/global/loading.png";

import "./BidBar.css";
import CountdownTimer from "@/components/global/CountdownTimer";
import axios from "axios";

const BidBar = ({
  language,
  expiresAt,
  sellerId,
  userId,
  postId,
  minimumBid,
  currentDbBid,
}) => {
  const dateNow = new Date().getTime();
  const [isShownBidBtn, setIsShownBidBtn] = useState(false);
  const [newBidValue, setNewBidValue] = useState("");
  const [currentBidValue, setCurrentBidValue] = useState(
    currentDbBid && currentDbBid >= minimumBid ? currentDbBid : minimumBid
  );
  const [isBidInputShown, setIsBidInputShown] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleBidding = async () => {
    if (isBidInputShown && Number(newBidValue) >= currentBidValue + 250) {
      setIsLoading(true);
      try {
        const res = await axios.post("/en/api/add-bid", {
          bidValue: Number(newBidValue),
          postId,
        });

        if (res.data.message === "Success") {
          setCurrentBidValue(Number(newBidValue));
          setNewBidValue("");
          setFeedback(`You bidded $${newBidValue}! Congratulations!`);
        } else {
          setFeedback("There was an error while placing your bid!");
        }
      } catch (err) {
        console.log("Could not place the bid: ", err);
        setFeedback("There was an error while placing your bid!");
      }
      setIsLoading(false);
    } else if (isBidInputShown && Number(newBidValue) < currentBidValue + 250) {
      setFeedback("Your bid value is too low!");
    } else {
      setIsBidInputShown(true);
    }
    setTimeout(() => {
      setFeedback("");
    }, 5000);
  };

  useEffect(() => {
    if ((!userId || userId !== sellerId) && dateNow <= expiresAt.getTime()) {
      setIsShownBidBtn(true);
    } else {
      setIsShownBidBtn(false);
    }
  }, [userId]);

  return (
    <div className="bidbar">
      <div className="row1">
        <div className="bid-info">
          <div className="clock">
            <Image src={clock} alt="" width={20} />
            <CountdownTimer
              expiresAt={expiresAt}
              dateNow={dateNow}
              language={language.ended}
            />
          </div>
          <div className="value">
            <span>
              {dateNow <= expiresAt.getTime() ? language.bid : language.sold}
            </span>
            <span>${currentBidValue}</span>
          </div>
        </div>
        {isShownBidBtn && (
          <button className="button-green" onClick={handleBidding}>
            {language.button}
          </button>
        )}
      </div>
      {isLoading && (
        <Image
          src={loading}
          alt="loading"
          width={20}
          height={20}
          className="loading"
        />
      )}
      {feedback && <span className="feedback">{feedback}</span>}
      <div className={`row2 ${isBidInputShown ? "open" : "close"}`}>
        <div className="input-box">
          <Image src={dollar} alt="close" width={20} className="dollar" />
          <input
            type="number"
            name=""
            id=""
            placeholder={`Min. bid value: $${currentBidValue + 250}`}
            value={newBidValue}
            onChange={(e) => setNewBidValue(e.target.value)}
          />
        </div>

        <Image
          src={close}
          alt="close"
          width={25}
          onClick={() => setIsBidInputShown(false)}
          className="close-input"
        />
      </div>
    </div>
  );
};

export default BidBar;
