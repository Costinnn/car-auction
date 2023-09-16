import React from "react";
import NavFilter from "../subglobal/navigation/NavFilter";
import CarPost from "./CarPost";

import { getListings } from "@/lib/getListings";
import getUserId from "@/lib/getUserId";
import getUserFavorites from "@/lib/getUserFavorites";

const ListingsFilter = async ({ listingsLanguage, lang }) => {
  const listings = await getListings();
  const userId = await getUserId();
  const userFavorites = await getUserFavorites();

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
            userId={userId}
            userFavorites={userFavorites?.savedListingsIds}
          />
        ))}
    </>
  );
};

export default ListingsFilter;
