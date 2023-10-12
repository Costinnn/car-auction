"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useSearchParams } from "next/navigation";

import MenuModal from "../subglobal/navigation/MenuModal";
import SignUpModal from "../subglobal/navigation/SignUpModal";
import AccountModal from "../subglobal/navigation/AccountModal";

import logo from "@/assets/global/logo.png";
import menu from "@/assets/global/menu.png";
import search from "@/assets/global/search.png";
import arrowRight from "@/assets/global/arrow-right.png";
import account from "@/assets/global/user.png";
import notification from "@/assets/global/notification.png";

import "./Navigation.css";
import SearchInput from "@/client-components/navigation/SearchInput";
import NotifModal from "../subglobal/navigation/NotifModal";

const Navigation = ({ language, session, langParam, notifications }) => {
  const searchParams = useSearchParams();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchInputOpen, setIsSearchInputOpen] = useState(false);
  const [isSignModalOpen, setIsSignModalOpen] = useState(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [isNotifModalOpen, setIsNotifModalOpen] = useState(false);
  const [unseenNotif, setUnseenNotif] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleSignModal = () => {
    setIsSignModalOpen((prev) => !prev);
  };

  const toggleAccountModal = () => {
    setIsAccountModalOpen((prev) => !prev);
  };

  const updateMarkNotif = async () => {
    try {
      const res = await axios.patch("/en/api/markNotifications");
      // console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const toggleNotifModal = () => {
    setIsNotifModalOpen((prev) => !prev);
    if (unseenNotif) {
      setTimeout(() => {
        updateMarkNotif();
        setUnseenNotif(false);
      }, 2000);
    }
  };

  useEffect(() => {
    if (!session && searchParams.get("signed") === "no") {
      toggleSignModal();
    }
    if (searchParams.get("search") && isMenuOpen) {
      toggleMenu();
    }
  }, [searchParams.get("signed"), searchParams.get("search")]);

  useEffect(() => {
    if (window.innerWidth > 850) setIsSearchInputOpen(true);

    // unseen notifications
    const unseenNotifications = notifications.filter(
      (notif) => notif.isSeen === false
    );
    if (unseenNotifications.length > 0) setUnseenNotif(true);
  }, []);

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
      <NotifModal
        toggleNotifModal={toggleNotifModal}
        isNotifModalOpen={isNotifModalOpen}
        langParam={langParam}
        notifications={notifications}
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
          <>
            <Image
              src={account}
              width={28}
              alt="menu"
              className="account"
              onClick={() => toggleAccountModal()}
            />
            <div className="notif-box">
              {unseenNotif && <div className="red-dot"></div>}
              <Image
                src={notification}
                width={28}
                alt="notif"
                className="notif"
                onClick={() => toggleNotifModal()}
              />
            </div>
          </>
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
            className="search-icon"
            onClick={() => setIsSearchInputOpen((prev) => !prev)}
          />
        </div>
        {isSearchInputOpen && <SearchInput language={language.searchinput} />}
      </div>
    </nav>
  );
};

export default Navigation;
