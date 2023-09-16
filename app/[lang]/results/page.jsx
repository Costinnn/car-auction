import React from "react";
import CarPost from "@/components/global/CarPost";
import { getLanguage } from "@/lib/getLanguage";

const page = async ({ params }) => {
  const language = await getLanguage(params.lang);
  return (
    <main>
      {/* <CarPost language={language.listingsfilter.carpost} /> */}
      results
    </main>
  );
};

export default page;
