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

const CarPost = () => {
  return (
    <div className="carpost">
      <div className="frame">
        <Splide aria-label="My Favorite Images">
          <SplideSlide>
            <Image src={img1} alt="img1" priority />
          </SplideSlide>
          <SplideSlide>
            <Image src={img2} alt="img1" />
          </SplideSlide>
          <SplideSlide>
            <Image src={img3} alt="img1" />
          </SplideSlide>
          <SplideSlide>
            <Image src={img4} alt="img1" />
          </SplideSlide>
          <SplideSlide>
            <Image src={img5} alt="img1" />
          </SplideSlide>
        </Splide>

        <div className="time-bid ">
          <div className="time">
            <Image src={clock} alt="clock" width={13} height={13} />
            <span>13:03:20</span>
          </div>

          <div className="bid">
            <span>Bid </span>
            <span>$38,000</span>
          </div>
        </div>
      </div>
      <div className="text-content">
        <div className="row1">
          <span className="title">1998 BMW 316i Touring</span>
          <Image src={addFavorite} alt="img" width={23} height={23} />
        </div>
        <span className="description">5-speeed Manual, Euro-Spec E36 Wagon</span>
        <span className="location">Location England</span>
      </div>
    </div>
  );
};

export default CarPost;
