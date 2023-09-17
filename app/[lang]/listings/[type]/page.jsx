import React from "react";

import { getLanguage } from "@/lib/getLanguage";
import CarPostData from "@/components/pages/listings/CarPostData";
import { getListingsType } from "@/lib/getListingsType";

const page = async ({ params }) => {
  const language = await getLanguage(params.lang);
  let data = null;
  let userId = null;
  let userFavorites = null;

  if (params.type === "mine") {
    const res = await getListingsType(params.type);
    data = res.posts;
    userId = res.userId;
  } else if (params.type === "bidded") {
  } else if (params.type === "saved") {
    const res = await getListingsType(params.type);
    data = res.posts;
    userId = res.userId;
    userFavorites = res.userFavorites;
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
            userId={userId}
            userFavorites={userFavorites}
          />
        ))}
    </section>
  );
};

export default page;
