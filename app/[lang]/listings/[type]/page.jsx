import React from "react";
import { getLanguage } from "@/lib/getLanguage";

import CarPostData from "@/components/pages/listings/CarPostData";
import { getListingsType } from "@/lib/getListingsType";

const page = async ({ params }) => {
  const language = await getLanguage(params.lang);
  let data = null;

  if (params.type === "mine") {
    data = await getListingsType(params.type);
  }

  return (
    <section>
      {data &&
        data.map((item) => (
          <CarPostData
            key={item.id}
            language={language.pages.listings.carpostdata}
            lang={params.lang}
            data={item}
          />
        ))}
    </section>
  );
};

export default page;
