import React from "react";
import { getLanguage } from "@/lib/getLanguage";

import CarPostData from "@/components/pages/listings/CarPostData";

const page = async ({ params }) => {
  const language = await getLanguage(params.lang);
  // check status of the auction, here should be ended

  return (
    <div>
      <CarPostData language={language.pages.listings.carpostdata} />
    </div>
  );
};

export default page;
