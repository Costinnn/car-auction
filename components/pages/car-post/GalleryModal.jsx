"use client";

import React from "react";
import Image from "next/image";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";

import close from "@/assets/global/closew.png";
import img1 from "@/assets/cars/maserati1.jpg";
import img2 from "@/assets/cars/maserati2.jpg";
import img3 from "@/assets/cars/maserati3.jpg";
import img4 from "@/assets/cars/maserati4.jpg";
import img5 from "@/assets/cars/maserati5.jpg";

import "./GalleryModal.css";

const GalleryModal = ({ toggleGalleryModal, isGalleryModalOpen }) => {
  return (
    <div className={`gallery-modal ${isGalleryModalOpen ? "active" : "close"}`}>
      <div className="content">
        <div className="row1">
          <ul>
            <li>All images</li>
            <li>Exterior</li>
            <li>Interior</li>
          </ul>
          <Image
            src={close}
            alt="close"
            width={25}
            onClick={() => toggleGalleryModal()}
          />
        </div>
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
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
