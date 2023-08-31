"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import NavFilter from "../subglobal/navigation/NavFilter";
import Menu from "../subglobal/navigation/Menu";

import logo from "@/assets/global/logo.png";
import menu from "@/assets/global/menu.png";
import search from "@/assets/global/search.png";
import arrowRight from "@/assets/global/arrow-right.png";

import "./Navigation.css";
import SearchInput from "@/client-components/navigation/SearchInput";

const Navigation = ({ language }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchInputOpen, setIsSearchInputOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <nav className="navigation section-narrow">
      <div className="row1">
        <Link href="/">
          <Image src={logo} width={150} alt="logo" priority />
        </Link>

        <Menu
          toggleMenu={toggleMenu}
          isMenuOpen={isMenuOpen}
          language={language.row1.menu}
        />
        <button className="signup button-green">{language.row1.sign}</button>
        <Image
          src={menu}
          width={28}
          alt="menu"
          onClick={() => toggleMenu(true)}
        />
      </div>
      <div className="row2">
        <div>
          <Link href="/">
            {language.row2.auctions}
            <Image src={arrowRight} width={10} alt="arrow-right" />
          </Link>
          <button className="sellcar button-blue">{language.row2.sell}</button>
          <Image
            src={search}
            width={28}
            alt="search"
            onClick={() => setIsSearchInputOpen((prev) => !prev)}
          />
        </div>
        {isSearchInputOpen && <SearchInput language={language.searchinput} />}
      </div>
      <NavFilter language={language.row3} />
      <div className="row4">
        <Link href="/">{language.row4.new}</Link>
        <Link href="/">{language.row4.ending}</Link>
        <Link href="/">{language.row4.trending}</Link>
        <Link href="/">{language.row4.ended}</Link>
      </div>
    </nav>
  );
};

export default Navigation;
