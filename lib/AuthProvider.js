// CLIENTSIDE SESSION PROVIDER
"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";

const AuthProvider = ({ children }) => {
  return <SessionProvider basePath="/en/api/auth">{children}</SessionProvider>;
};

export default AuthProvider;

// to use
// import { useSession } from "next-auth/react";
// const session = useSession();

// basePath is used for custom base path
