"use client";

import Image from "next/image";
import { useState } from "react";

import GalleryModal from "./GalleryModal";

import "./Gallery.css";

const Gallery = ({ language, extImages, intImages, mainImage }) => {
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [galleryImgId, setGalleryImgId] = useState(0);

  const toggleGalleryModal = (imgId) => {
    setIsGalleryModalOpen((prev) => !prev);
    setGalleryImgId(imgId);
  };

  const extImgLength = extImages.length;

  return (
    <section className="gallery">
      <GalleryModal
        toggleGalleryModal={toggleGalleryModal}
        galleryImgId={galleryImgId}
        isGalleryModalOpen={isGalleryModalOpen}
        mainImage={mainImage}
        extImages={extImages}
        intImages={intImages}
      />
      <div className="images">
        <div className="main-img">
          <Image
            src={mainImage}
            alt="car"
            onClick={() => toggleGalleryModal(0)}
            // width={500}
            // height={400}
            fill={true}
          />
        </div>
        <div className="other-img">
          <div className="exterior-img">
            <span className="badge">
              {language.exterior} ({extImgLength})
            </span>
            <div className="img-box">
              <Image
                src={extImages[0]}
                alt="car"
                onClick={() => toggleGalleryModal(1)}
                fill={true}
              />
            </div>
            <div className="img-box">
              <Image
                src={extImages[1]}
                alt="car"
                onClick={() => toggleGalleryModal(2)}
                fill={true}
              />
            </div>
            <div className="img-box">
              <Image
                src={extImages[2]}
                alt="car"
                onClick={() => toggleGalleryModal(3)}
                fill={true}
              />
            </div>
            <div className="img-box">
              <Image
                src={extImages[3]}
                alt="car"
                onClick={() => toggleGalleryModal(4)}
                fill={true}
              />
            </div>
          </div>
          <div className="interior-img">
            <span className="badge">
              {language.interior} ({intImages.length})
            </span>
            <div className="img-box">
              <Image
                src={intImages[0]}
                alt="car"
                onClick={() => toggleGalleryModal(extImgLength)}
                fill={true}
              />
            </div>
            <div className="img-box">
              <Image
                src={intImages[1]}
                alt="car"
                onClick={() => toggleGalleryModal(extImgLength + 1)}
                fill={true}
              />
            </div>
            <div className="img-box">
              <Image
                src={intImages[2]}
                alt="car"
                onClick={() => toggleGalleryModal(extImgLength + 2)}
                fill={true}
              />
            </div>
            <div
              className="last-box"
              onClick={() => toggleGalleryModal(extImgLength + 3)}
            >
              <div className="bg-color">
                <span className="badge-all">
                  {language.all}({extImgLength + intImages.length})
                </span>
              </div>

              <div className="img-box">
                <Image src={intImages[3]} alt="car" fill={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
