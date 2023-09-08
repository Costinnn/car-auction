"use client";

import Image from "next/image";
import { useState } from "react";

import GalleryModal from "./GalleryModal";

import img1 from "@/assets/cars/porsche1.jpg";
import img2 from "@/assets/cars/porsche2.jpg";
import img3 from "@/assets/cars/porsche3.jpg";
import img4 from "@/assets/cars/porsche4.jpg";
import img5 from "@/assets/cars/porsche5.jpg";
import img6 from "@/assets/cars/porsche6.jpg";
import img7 from "@/assets/cars/porsche7.jpg";
import img8 from "@/assets/cars/porsche8.jpg";
import img9 from "@/assets/cars/porsche9.jpg";

import "./Gallery.css";

const Gallery = ({ language }) => {
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);

  const toggleGalleryModal = () => {
    setIsGalleryModalOpen((prev) => !prev);
  };

  return (
    <section className="gallery">
      <GalleryModal
        toggleGalleryModal={toggleGalleryModal}
        isGalleryModalOpen={isGalleryModalOpen}
      />
      <div className="images">
        <div className="main-img">
          <Image src={img1} alt="car" onClick={toggleGalleryModal} />
        </div>
        <div className="other-img">
          <div className="exterior-img">
            <span className="badge">{language.exterior} (25)</span>
            <Image src={img2} alt="car" onClick={toggleGalleryModal} />
            <Image src={img3} alt="car" onClick={toggleGalleryModal} />
            <Image src={img4} alt="car" onClick={toggleGalleryModal} />
            <Image src={img5} alt="car" onClick={toggleGalleryModal} />
          </div>
          <div className="interior-img">
            <span className="badge">{language.interior} (25)</span>
            <Image src={img6} alt="car" onClick={toggleGalleryModal} />
            <Image src={img7} alt="car" onClick={toggleGalleryModal} />
            <Image src={img8} alt="car" onClick={toggleGalleryModal} />
            <div className="last-box" onClick={toggleGalleryModal}>
              <span className="badge-all">{language.all}(51)</span>
              <Image src={img9} alt="car" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
