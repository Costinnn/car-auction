"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useRef } from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";

import close from "@/assets/global/closew.png";

import "./GalleryModal.css";

const GalleryModal = ({
  toggleGalleryModal,
  isGalleryModalOpen,
  extImages,
  intImages,
  galleryImgId,
}) => {
  const images = [...extImages, ...intImages];
  const splideRef = useRef(null);

  const handleThumbs = (id) => {
    if (splideRef.current) {
      splideRef.current.go(id);
    }
  };

  useEffect(() => {
    handleThumbs(galleryImgId);
  }, [toggleGalleryModal]);

  return (
    <div className={`gallery-modal ${isGalleryModalOpen ? "active" : "close"}`}>
      <div className="gm-content">
        <div className="row1">
          <ul>
            <li onClick={() => handleThumbs(0)}>Exterior</li>
            <li onClick={() => handleThumbs(extImages.length)}>Interior</li>
          </ul>
          <Image
            src={close}
            alt="close"
            width={25}
            onClick={() => toggleGalleryModal(0)}
          />
        </div>
        <div className="frame">
          <Splide
            id="mysplide"
            aria-label="My Favorite Images"
            options={{ type: "fade" }}
            ref={splideRef}
          >
            {images.map((img) => (
              <SplideSlide key={img}>
                <Image
                  src={img}
                  alt="carimg"
                  priority
                  width={500}
                  height={400}
                />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
