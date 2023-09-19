"use client";

import React from "react";
import Timer from "@/lib/utils/Timer";

const CountdownTimer = ({ language, expiresAt, dateNow }) => {
  if (dateNow <= expiresAt.getTime()) {
    return (
      <span suppressHydrationWarning>
        {`${Timer(expiresAt).days} Days ${Timer(expiresAt).hours}:${
          Timer(expiresAt).minutes
        }:${Timer(expiresAt).seconds}`}
      </span>
    );
  } else {
    return <span>{language}</span>;
  }
};

export default CountdownTimer;
