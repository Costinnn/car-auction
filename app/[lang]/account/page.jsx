import React from "react";

import { getLanguage } from "@/lib/getLanguage";
import Profile from "@/components/pages/account/Profile";

import "./Account.css";
import Settings from "@/components/pages/account/Settings";

const page = async ({ params }) => {
  const language = await getLanguage(params.lang);
  return (
    <main className="section-narrow account-page">
      <Profile language={language.pages.account.profile} />
      <Settings language={language.pages.account.settings} />
    </main>
  );
};

export default page;
