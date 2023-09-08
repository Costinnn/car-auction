import React from "react";

import { getLanguage } from "@/lib/getLanguage";

import Gallery from "@/components/pages/car-post/Gallery";
import Heading from "@/components/pages/car-post/Heading";
import BidBar from "@/components/pages/car-post/BidBar";
import Content from "@/components/pages/car-post/Content";

import "./CarPost.css";

const page = async ({ params }) => {
  const language = await getLanguage(params.lang);

  return (
    <main className="carpost-page">
      <BidBar language={language.pages.carpost.bidbar} />
      <Gallery language={language.pages.carpost.gallery} />
      <Heading />
      <Content language={language.pages.addpost.addform} />
    </main>
  );
};

export default page;
