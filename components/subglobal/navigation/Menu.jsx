"use client";

import Image from "next/image";
import React, { useState } from "react";

import SearchInput from "@/client-components/navigation/SearchInput";

import close from "@/assets/global/close.png";
import Link from "next/link";

import "./Menu.css";

const Menu = ({ toggleMenu, isMenuOpen, language,languageSearch }) => {

  return (
    <div className={`menu ${isMenuOpen ? "open" : "close"}`}>
      <div className="row1">
        <span>{language.title}</span>
        <Image
          src={close}
          alt="close"
          width={25}
          onClick={() => toggleMenu(false)}
        />
      </div>
      <SearchInput language={languageSearch}/>
      <ul>
        <li>
          <Link href="/">{language.account}</Link>
        </li>
        <li>
          <Link href="/">{language.auctions}</Link>
        </li>
        <li>
          <Link href="/">{language.upcoming}</Link>
        </li>
        <li>
          <Link href="/">{language.favorites}</Link>
        </li>
        <li>
          <Link href="/">{language.foryou}</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
