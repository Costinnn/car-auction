import React from "react";

import { getLanguage } from "@/lib/getLanguage";
import getUserFavorites from "@/lib/getUserFavorites";
import { getCarPost } from "@/lib/getCarPost";
import getUserId from "@/lib/getUserId";

import Gallery from "@/components/pages/car-post/Gallery";
import Heading from "@/components/pages/car-post/Heading";
import BidBar from "@/components/pages/car-post/BidBar";
import Content from "@/components/pages/car-post/Content";

import "./CarPost.css";
import getBidCurrent from "@/lib/getBidCurrent";

const page = async ({ params }) => {
  const language = await getLanguage(params.lang);
  const carPost = await getCarPost(params.id);
  const currentDbBid = await getBidCurrent(params.id);
  const userId = await getUserId();
  const userFavorites = await getUserFavorites();

  return (
    <main className="carpost-page">
      <BidBar
        language={language.pages.carpost.bidbar}
        expiresAt={carPost.expiresAt}
        sellerId={carPost.sellerId}
        postId={carPost.id}
        minimumBid={carPost.minimumBid}
        currentDbBid={currentDbBid?.bidValue}
        userId={userId}
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
        userId={userId}
        sellerId={carPost.sellerId}
        postId={carPost.id}
        userFavorites={userFavorites?.savedListingsIds}
      />
      <Content language={language.pages.addpost.addform} content={carPost} />
    </main>
  );
};

export default page;
