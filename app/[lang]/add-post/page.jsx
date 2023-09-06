import React from "react";

import { getLanguage } from "@/lib/getLanguage";
import AddForm from "@/client-components/add-post/AddForm";

import "./AddPost.css";
import WhyUs from "@/components/decoration/WhyUs";
import Newsletter from "@/client-components/global/Newsletter";

const page = async ({ params }) => {
  const language = await getLanguage(params.lang);

  return (
    <main className="addpost-page">
      <h1>{language.pages.addpost.title}</h1>
      <p>{language.pages.addpost.message}</p>
      <AddForm language={language.pages.addpost.addform} />
      <WhyUs language={language.whyus} />
      <Newsletter language={language.newsletter} />
    </main>
  );
};

export default page;
