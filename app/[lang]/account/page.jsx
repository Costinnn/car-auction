import React from "react";

import { getLanguage } from "@/lib/getLanguage";
import Profile from "@/components/pages/account/Profile";

import Settings from "@/components/pages/account/Settings";
import getUserAccInfo from "@/lib/getUserAccInfo";

import "./Account.css";

const page = async ({ params }) => {
  const language = await getLanguage(params.lang);
  const accInfo = await getUserAccInfo();

  return (
    <main className="section-narrow account-page">
      <Profile language={language.pages.account.profile} accInfo={accInfo} />
      <Settings language={language.pages.account.settings} accInfo={accInfo} />
    </main>
  );
};

export default page;
