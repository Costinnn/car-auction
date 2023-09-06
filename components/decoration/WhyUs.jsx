import React from "react";
import Image from "next/image";

import stars from "@/assets/global/5star.png";

import "./WhyUs.css";

const WhyUs = ({ language }) => {
  return (
    <section className="whyus">
      <div className="box1">
        <h2>{language.box1.title}</h2>
        <div>
          <div>
            <span>7.500+</span>
            <p>{language.box1.auctions}</p>
          </div>
          <div>
            <span>145M+</span>
            <p>{language.box1.value}</p>
          </div>
          <div>
            <span>78%+</span>
            <p>{language.box1.rate}</p>
          </div>
          <div>
            <span>275k+</span>
            <p>{language.box1.members}</p>
          </div>
        </div>
      </div>
      <div className="box2">
        <h2>{language.box2.title}</h2>
        <div>
          <div>
            <Image src={stars} alt="review" width={100} />
            <p>
              Mike H. <span>{language.box2.date}</span>
            </p>
          </div>

          <p>{language.box2.review}</p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
