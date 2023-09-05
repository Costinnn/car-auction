"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import SearchInput from "@/client-components/navigation/SearchInput";

import close from "@/assets/global/close.png";
import en from "@/assets/global/english.png";
import ro from "@/assets/global/romanian.png";

import "./MenuModal.css";

const MenuModal = ({
  toggleMenu,
  isMenuOpen,
  language,
  languageSearch,
  langParam,
}) => {
  const pathname = usePathname();
  const router = useRouter();

  const toggleLanguage = (newLanguage) => {
    router.push(`/${newLanguage}/${pathname.slice(4)}`);
  };

  return (
    <div className={`menu ${isMenuOpen ? "open" : "close"}`}>
      <div className="row1">
        <h3>{language.title}</h3>
        <Image
          src={close}
          alt="close"
          width={25}
          onClick={() => toggleMenu()}
        />
      </div>
      <div className="row2">
        <span>Change language:</span>
        <Image
          src={en}
          alt="english"
          width={30}
          onClick={() => toggleLanguage("en")}
        />
        <Image
          src={ro}
          alt="romanian"
          width={30}
          onClick={() => toggleLanguage("ro")}
        />
      </div>
      <SearchInput language={languageSearch} />
      <ul>
        <li>
          <Link href={`/${langParam}/account`} onClick={() => toggleMenu()}>
            {language.account}
          </Link>
        </li>
        <li>
          <Link href={`/${langParam}`} onClick={() => toggleMenu()}>
            {language.auctions}
          </Link>
        </li>
        <li>
          <Link href={`/${langParam}/listings`} onClick={() => toggleMenu()}>
            {language.favorites}
          </Link>
        </li>
        <li>
          <Link href={`/${langParam}/news`} onClick={() => toggleMenu()}>
            {language.upcoming}
          </Link>
        </li>
        <li>
          <Link href={`/${langParam}/news`} onClick={() => toggleMenu()}>
            {language.foryou}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuModal;
