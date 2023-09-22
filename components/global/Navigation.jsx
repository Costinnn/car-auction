"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import MenuModal from "../subglobal/navigation/MenuModal";
import SignUpModal from "../subglobal/navigation/SignUpModal";
import AccountModal from "../subglobal/navigation/AccountModal";

import logo from "@/assets/global/logo.png";
import menu from "@/assets/global/menu.png";
import search from "@/assets/global/search.png";
import arrowRight from "@/assets/global/arrow-right.png";
import account from "@/assets/global/user.png";

import "./Navigation.css";
import SearchInput from "@/client-components/navigation/SearchInput";

const Navigation = ({ language, session, langParam }) => {
  const searchParams = useSearchParams();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchInputOpen, setIsSearchInputOpen] = useState(false);
  const [isSignModalOpen, setIsSignModalOpen] = useState(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleSignModal = () => {
    setIsSignModalOpen((prev) => !prev);
  };

  const toggleAccountModal = () => {
    setIsAccountModalOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!session && searchParams.get("signed") === "no") {
      toggleSignModal();
    }
    if (searchParams.get("search") && isMenuOpen) {
      toggleMenu();
    }
  }, [searchParams.get("signed"), searchParams.get("search")]);

  return (
    <nav className="navigation section-narrow">
      <SignUpModal
        toggleSignModal={toggleSignModal}
        isSignModalOpen={isSignModalOpen}
        language={language.modal}
      />
      <AccountModal
        toggleAccountModal={toggleAccountModal}
        isAccountModalOpen={isAccountModalOpen}
        language={language.modal.account}
        langParam={langParam}
      />
      <div className="row1">
        <Link href={`/${langParam}`}>
          <Image src={logo} width={150} alt="logo" priority />
        </Link>

        <MenuModal
          toggleMenu={toggleMenu}
          isMenuOpen={isMenuOpen}
          language={language.row1.menu}
          languageSearch={language.searchinput}
          langParam={langParam}
          session={session}
        />
        {session ? (
          <Image
            src={account}
            width={28}
            alt="menu"
            className="account"
            onClick={() => toggleAccountModal()}
          />
        ) : (
          <button
            className="signup button-green"
            onClick={() => toggleSignModal()}
          >
            {language.row1.sign}
          </button>
        )}

        <Image src={menu} width={28} alt="menu" onClick={() => toggleMenu()} />
      </div>
      <div className="row2">
        <div>
          <Link href={`/${langParam}/news`} className="auctions-link">
            {language.row2.news}
            <Image src={arrowRight} width={10} alt="arrow-right" />
          </Link>
          <Link
            href={session ? `/${langParam}/add-post` : "?signed=no"}
            className="sellcar button-blue"
          >
            {language.row2.sell}
          </Link>
          <Image
            src={search}
            width={28}
            alt="search"
            onClick={() => setIsSearchInputOpen((prev) => !prev)}
          />
        </div>
        {isSearchInputOpen && <SearchInput language={language.searchinput} />}
      </div>
    </nav>
  );
};

export default Navigation;
