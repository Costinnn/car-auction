import React from "react";
import Link from "next/link";
import Image from "next/image";

import fb from "@/assets/social/fb.png";
import insta from "@/assets/social/insta.png";
import twt from "@/assets/social/twt.png";
import yt from "@/assets/social/yt.png";

import "./Footer.css";

const Footer = ({ language }) => {
  return (
    <footer>
      <div className="links">
        <div>
          <h3>{language.box1.title}</h3>
          <Link href={`/`}>{language.box1.buy}</Link>
          <Link href={`/`}>{language.box1.sell}</Link>
          <Link href={`/`}>{language.box1.sale}</Link>
          <Link href={`/`}>{language.box1.faqs}</Link>
        </div>
        <div>
          <h3>{language.box2.title}</h3>
          <Link href={`/`}>{language.box2.support}</Link>
          <Link href={`/`}>{language.box2.shipping}</Link>
          <Link href={`/`}>{language.box2.inspections}</Link>
          <Link href={`/`}>{language.box2.careers}</Link>
        </div>
      </div>
      <div className="social">
        <div className="icons">
          <Link href={`/`}>
            <Image src={fb} alt="social" width={20} />
          </Link>
          <Link href={`/`}>
            <Image src={insta} alt="social" width={20} />
          </Link>
          <Link href={`/`}>
            <Image src={twt} alt="social" width={20} />
          </Link>
          <Link href={`/`}>
            <Image src={yt} alt="social" width={20} />
          </Link>
        </div>
        <p>Copyright 2023 Car Dreamz Web</p>
        <div className="terms">
          <Link href={`/`}>{language.box3.terms}</Link>
          <Link href={`/`}>{language.box3.policy}</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
