import React from "react";

import { getLanguage } from "@/lib/getLanguage";

import Gallery from "@/components/pages/car-post/Gallery";

import "./CarPost.css";

const page = async ({ params }) => {
  const language = await getLanguage(params.lang);

  return (
    <main className="carpost-page">
      <Gallery language={language.pages.carpost.gallery} />
    </main>
  );
};

export default page;
