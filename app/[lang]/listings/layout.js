import React from "react";

import { getLanguage } from "@/lib/getLanguage";
import Navigation from "@/components/pages/listings/Navigation";

import "./Listings.css";

const ListingsLayout = async ({ children, params }) => {
  const language = await getLanguage(params.lang);

  return (
    <main className="listings-page">
      <Navigation
        lang={params.lang}
        language={language.pages.listings.navigation}
      />
      {children}
    </main>
  );
};

export default ListingsLayout;
