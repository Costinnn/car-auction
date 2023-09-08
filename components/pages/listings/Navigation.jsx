"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

const Navigation = ({ lang, language }) => {
  const params = useParams();

  return (
    <ul className="nav">
      <li>
        <Link
          href={`/${lang}/listings/mine`}
          className={`${params.type === "mine" ? "active" : ""}`}
        >
          {language.mine}
        </Link>
      </li>
      <li>
        <Link
          href={`/${lang}/listings/bidded`}
          className={`${params.type === "bidded" ? "active" : ""}`}
        >
          {language.bidded}
        </Link>
      </li>
      <li>
        <Link
          href={`/${lang}/listings/saved`}
          className={`${params.type === "saved" ? "active" : ""}`}
        >
          {language.saved}
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
