import React from "react";

import { getLanguage } from "@/lib/getLanguage";

import Gallery from "@/components/pages/car-post/Gallery";
import Heading from "@/components/pages/car-post/Heading";
import BidBar from "@/components/pages/car-post/BidBar";
import Content from "@/components/pages/car-post/Content";

import "./CarPost.css";
import { getCarPost } from "@/lib/getCarPost";

const page = async ({ params }) => {
  const language = await getLanguage(params.lang);
  const carPost = await getCarPost(params.id);

  return (
    <main className="carpost-page">
      <BidBar
        language={language.pages.carpost.bidbar}
        data={carPost.expiresAt}
      />
      <Gallery
        language={language.pages.carpost.gallery}
        extImages={carPost.extImages}
        intImages={carPost.intImages}
      />
      <Heading
        language={language.pages.carpost.heading}
        title={carPost.title}
        gears={carPost.gears}
        transmission={carPost.transmission}
        engineCapacity={carPost.engineCapacity}
        engineConfiguration={carPost.engineConfiguration}
        engineCylinders={carPost.engineCylinders}
      />
      <Content language={language.pages.addpost.addform} content={carPost} />
    </main>
  );
};

export default page;
