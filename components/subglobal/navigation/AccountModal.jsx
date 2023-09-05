import React from "react";
import Image from "next/image";
import Link from "next/link";

import SignoutBtn from "@/client-components/navigation/SignOutBtn";

import close from "@/assets/global/close.png";

import "./AccountModal.css";

const AccountModal = ({
  toggleAccountModal,
  isAccountModalOpen,
  language,
  langParam,
}) => {
  return (
    <div className={`account-modal ${isAccountModalOpen ? "open" : "close"}`}>
      <div className="row1">
        <h3>{language.title}</h3>
        <Image
          src={close}
          alt="close"
          width={25}
          className="close-btn"
          onClick={() => toggleAccountModal()}
        />
      </div>
      <ul>
        <li>
          <Link
            href={`/${langParam}/listings`}
            onClick={() => toggleAccountModal()}
          >
            {language.mylisting}
          </Link>
        </li>
        <li>
          <Link
            href={`/${langParam}/listings`}
            onClick={() => toggleAccountModal()}
          >
            {language.bidded}
          </Link>
        </li>
        <li>
          <Link
            href={`/${langParam}/listings`}
            onClick={() => toggleAccountModal()}
          >
            {language.saved}
          </Link>
        </li>
        <li>
          <Link
            href={`/${langParam}/account`}
            onClick={() => toggleAccountModal()}
          >
            {language.profile}
          </Link>
        </li>
        <li>
          <Link
            href={`/${langParam}/account`}
            onClick={() => toggleAccountModal()}
          >
            {language.settings}
          </Link>
        </li>
      </ul>
      <SignoutBtn language={language.signout} classStyle="button-blue" />
    </div>
  );
};

export default AccountModal;
