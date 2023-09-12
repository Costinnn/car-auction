import React from "react";
import NavFilter from "../subglobal/navigation/NavFilter";
import CarPost from "./CarPost";

import { getListings } from "@/lib/getListings";

const ListingsFilter = async ({ listingsLanguage, lang }) => {
  const listings = await getListings();

  return (
    <>
      <NavFilter language={listingsLanguage} lang={lang} />
      {listings &&
        listings.map((carpost) => (
          <CarPost
            key={carpost.id}
            language={listingsLanguage.carpost}
            lang={lang}
            data={carpost}
          />
        ))}
    </>
  );
};

export default ListingsFilter;
