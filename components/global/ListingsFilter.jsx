import React from "react";
import NavFilter from "../subglobal/navigation/NavFilter";
import CarPost from "./CarPost";

const ListingsFilter = ({ listingsLanguage }) => {
  return (
    <>
      <NavFilter language={listingsLanguage} />
      <CarPost language={listingsLanguage.carpost} />
      <CarPost language={listingsLanguage.carpost} />
      <CarPost language={listingsLanguage.carpost} />
      <CarPost language={listingsLanguage.carpost} />
    </>
  );
};

export default ListingsFilter;
