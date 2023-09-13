"use client";

import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import "@splidejs/react-splide/css/skyblue";

import CountdownTimer from "./CountdownTimer";

import clock from "@/assets/global/clock.png";
import addFavorite from "@/assets/global/add-favorite.png";
import favorite from "@/assets/global/favorite.png";

import "./CarPost.css";
import Link from "next/link";

const CarPost = ({ language, lang, data }) => {
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
            <CountdownTimer expiresAt={data.expiresAt} />
          </div>

          <div className="bid">
            <span>{language.bid} </span>
            <span>$38,000</span>
          </div>
        </div>
      </div>
      <div className="text-content">
        <div className="row1">
          <Link href={`/${lang}/car-post/${data.id}`} className="title">
            {data.title}
          </Link>
          <Image src={addFavorite} alt="img" width={23} height={23} />
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
