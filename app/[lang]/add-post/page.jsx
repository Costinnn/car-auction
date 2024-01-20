import React from "react";

import { getLanguage } from "@/lib/getLanguage";

import WhyUs from "@/components/decoration/WhyUs";
import Newsletter from "@/client-components/global/Newsletter";
import CAddForm from "@/client-components/add-post/CAddForm";

import "./AddPost.css";


const page = async ({ params }) => {
  const language = await getLanguage(params.lang);

  return (
    <main className="addpost-page">
      <h1>{language.pages.addpost.title}</h1>
      <p>{language.pages.addpost.message}</p>
      <CAddForm language={language.pages.addpost.addform} />
      <WhyUs language={language.whyus} />
      <Newsletter language={language.newsletter} />
    </main>
  );
};

export default page;
