"use client";

import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import "@splidejs/react-splide/css/skyblue";

import img1 from "@/assets/cars/maserati1.jpg";
import img2 from "@/assets/cars/maserati2.jpg";
import img3 from "@/assets/cars/maserati3.jpg";
import img4 from "@/assets/cars/maserati4.jpg";
import img5 from "@/assets/cars/maserati5.jpg";

import clock from "@/assets/global/clock.png";
import addFavorite from "@/assets/global/add-favorite.png";
import favorite from "@/assets/global/favorite.png";

import "./CarPost.css";
import Link from "next/link";

const CarPost = ({ language, lang, data }) => {
  return (
    <div className="carpost">
      <div className="frame">
        <Splide aria-label="My Favorite Images">
          <SplideSlide>
            <Image
              src={data.images[0]}
              alt="image"
              priority
              width={500}
              height={500}
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src={data.images[1]}
              alt="image"
              priority
              width={500}
              height={500}
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src={data.images[2]}
              alt="image"
              priority
              width={500}
              height={500}
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src={data.images[3]}
              alt="image"
              priority
              width={500}
              height={500}
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src={data.images[4]}
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
            <span>13:03:20</span>
          </div>

          <div className="bid">
            <span>{language.bid} </span>
            <span>$38,000</span>
          </div>
        </div>
      </div>
      <div className="text-content">
        <div className="row1">
          <Link href={`/${lang}/car-post`} className="title">
            {data.title}
          </Link>
          <Image src={addFavorite} alt="img" width={23} height={23} />
        </div>
        <Link href={`/${lang}/car-post`} className="description">
          {`${data.gears} - ${language.speed} ${data.transmission} ${data.engineCapacity}L ${language.engine}
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
