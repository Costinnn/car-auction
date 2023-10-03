import Image from "next/image";
import React from "react";

import News_data from "@/assets/news/News_data";

import WhyUs from "@/components/decoration/WhyUs";
import Newsletter from "@/client-components/global/Newsletter";
import { getLanguage } from "@/lib/getLanguage";

import "./Article.css";

const page = async ({ params }) => {

  const language = await getLanguage(params.lang);
  const article = News_data[params.id - 1];

  return (
    <main className="article-page section-narrow">
      <div>
        <h1>{article.title[params.lang]}</h1>
        <div className="img-box">
          <Image src={article.image} alt="" fill />
        </div>
      </div>
      <span>{article.date[params.lang]}</span>
      <p>{article.body[params.lang]}</p>
      <WhyUs language={language.whyus} />
      <Newsletter language={language.newsletter} />
    </main>
  );
};

export default page;
