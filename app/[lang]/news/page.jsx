import React from "react";
import Image from "next/image";
import Link from "next/link";

import News_data from "@/assets/news/News_data";

import WhyUs from "@/components/decoration/WhyUs";
import { getLanguage } from "@/lib/getLanguage";

import "./News.css";

const page = async ({ params }) => {
  const language = await getLanguage(params.lang);

  return (
    <main className="news-page section-narrow">
      <h1>Articles</h1>
      <div className="news-articles">
        {News_data.map((item) => (
          <Link
            href={`/${params.lang}/news/${item.id}`}
            className="article"
            key={item.id}
          >
            <div className="img-box">
              <Image src={item.image} fill alt="article image" />
            </div>

            <h3>{item.title[params.lang]}</h3>
            <span>{item.date[params.lang]}</span>
          </Link>
        ))}
      </div>
      <WhyUs language={language.whyus} />
    </main>
  );
};

export default page;
