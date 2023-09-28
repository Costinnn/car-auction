import React from "react";

import NavFilter from "../subglobal/navigation/NavFilter";
import CarPost from "./CarPost";

import { getListings } from "@/lib/getListings";
import getUserId from "@/lib/getUserId";
import getUserFavorites from "@/lib/getUserFavorites";

const ListingsFilter = async ({ listingsLanguage, lang, searchParams }) => {
  const listings = await getListings(searchParams);
  const userId = await getUserId();
  const userFavorites = await getUserFavorites();

  return (
    <>
      <NavFilter language={listingsLanguage} lang={lang} />

      {listings.length > 0 ? (
        listings.map((carpost) => (
          <CarPost
            key={carpost.id}
            language={listingsLanguage.carpost}
            lang={lang}
            data={carpost}
            userId={userId}
            userFavorites={userFavorites?.savedListingsIds}
          />
        ))
      ) : (
        <h2 className="no-listings">
          {searchParams.sort === "new" && listingsLanguage.nolistingsnew}
          {searchParams.sort === "ending" && listingsLanguage.nolistingsending}
          {searchParams.sort === "trending" && listingsLanguage.nolistings}
          {searchParams.sort === "ended" && listingsLanguage.nolistingsended}
          {!searchParams.sort && listingsLanguage.nolistings}
        </h2>
      )}
    </>
  );
};

export default ListingsFilter;
