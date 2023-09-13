"use client";

import Image from "next/image";
import { useState } from "react";

import GalleryModal from "./GalleryModal";

import "./Gallery.css";

const Gallery = ({ language, extImages, intImages }) => {
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
        extImages={extImages}
        intImages={intImages}
      />
      <div className="images">
        <div className="main-img">
          <Image
            src={extImages[0]}
            alt="car"
            onClick={() => toggleGalleryModal(0)}
            width={500}
            height={400}
          />
        </div>
        <div className="other-img">
          <div className="exterior-img">
            <span className="badge">
              {language.exterior} ({extImgLength})
            </span>
            <Image
              src={extImages[1]}
              alt="car"
              onClick={() => toggleGalleryModal(1)}
              width={300}
              height={200}
            />
            <Image
              src={extImages[2]}
              alt="car"
              onClick={() => toggleGalleryModal(2)}
              width={300}
              height={200}
            />
            <Image
              src={extImages[3]}
              alt="car"
              onClick={() => toggleGalleryModal(3)}
              width={300}
              height={200}
            />
            <Image
              src={extImages[4]}
              alt="car"
              onClick={() => toggleGalleryModal(4)}
              width={300}
              height={200}
            />
          </div>
          <div className="interior-img">
            <span className="badge">
              {language.interior} ({intImages.length})
            </span>
            <Image
              src={intImages[0]}
              alt="car"
              onClick={() => toggleGalleryModal(extImgLength)}
              width={300}
              height={200}
            />
            <Image
              src={intImages[1]}
              alt="car"
              onClick={() => toggleGalleryModal(extImgLength + 1)}
              width={300}
              height={200}
            />
            <Image
              src={intImages[2]}
              alt="car"
              onClick={() => toggleGalleryModal(extImgLength + 2)}
              width={300}
              height={200}
            />
            <div
              className="last-box"
              onClick={() => toggleGalleryModal(extImgLength + 3)}
            >
              <span className="badge-all">
                {language.all}({extImgLength + intImages.length})
              </span>
              <Image src={intImages[3]} alt="car" width={300} height={200} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
