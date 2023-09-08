import React from "react";
import NavFilter from "../subglobal/navigation/NavFilter";
import CarPost from "./CarPost";

const ListingsFilter = ({ listingsLanguage, lang }) => {
  return (
    <>
      <NavFilter language={listingsLanguage} lang={lang} />
      <CarPost language={listingsLanguage.carpost} lang={lang} />
      <CarPost language={listingsLanguage.carpost} lang={lang} />
      <CarPost language={listingsLanguage.carpost} lang={lang} />
      <CarPost language={listingsLanguage.carpost} lang={lang} />
    </>
  );
};

export default ListingsFilter;
