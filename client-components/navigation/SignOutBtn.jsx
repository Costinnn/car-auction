"use client";

import { signOut } from "next-auth/react";

const SignoutBtn = ({ language, classStyle }) => {
  return (
    <button className={classStyle} onClick={signOut}>
      {language}
    </button>
  );
};

export default SignoutBtn;
