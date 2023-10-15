"use client";

import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import Link from "next/link";
import "@splidejs/react-splide/css/skyblue";

import CountdownTimer from "./CountdownTimer";
import AddToFavorite from "@/client-components/global/AddToFavorite";

import clock from "@/assets/global/clock.png";

import "./CarPost.css";

const CarPost = ({ language, lang, data, userId, userFavorites }) => {
  const dateNow = new Date().getTime();
  return (
    <div className="carpost">
      <div className="frame">
        <Splide aria-label="My Favorite Images" options={{ type: "fade" }}>
          <SplideSlide>
            <Image
              src={data.extImages[0]}
              alt="image"
              priority
              width={500}
              height={500}
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src={data.extImages[1]}
              alt="image"
              priority
              width={500}
              height={500}
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src={data.extImages[2]}
              alt="image"
              priority
              width={500}
              height={500}
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src={data.extImages[3]}
              alt="image"
              priority
              width={500}
              height={500}
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src={data.extImages[4]}
              alt="image"
              priority
              width={500}
              height={500}
            />
          </SplideSlide>
        </Splide>

        <div className="time-bid ">
          <div className="time">
            <Image src={clock} alt="clock" width={13} height={13} />
            <CountdownTimer
              dateNow={dateNow}
              expiresAt={data.expiresAt}
              langEnded={language.ended}
              langDays={language.days}
              langHours={language.hours}
            />
          </div>

          <div className="bid">
            <span>
              {dateNow <= data.expiresAt.getTime()
                ? language.bid
                : language.sold}
            </span>
            <span>
              $
              {data.bidValue && data.bidValue >= data.minimumBid
                ? data.bidValue
                : data.minimumBid}
            </span>
          </div>
        </div>
      </div>
      <div className="text-content">
        <div className="row1">
          <Link href={`/${lang}/car-post/${data.id}`} className="title">
            {data.title}
          </Link>
          <AddToFavorite
            width={23}
            height={23}
            userId={userId}
            userFavorites={userFavorites}
            sellerId={data.sellerId}
            postId={data.id}
          />
        </div>
        <Link href={`/${lang}/car-post/${data.id}`} className="description">
          {`${data.gears}-${language.speed} ${data.transmission} ${data.engineCapacity}L ${language.engine}
          ${data.engineConfiguration}${data.engineCylinders}`}
          <br />
          <span className="location">
            {language.location} {data.location}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default CarPost;
