"use client";

import React from "react";
import Timer from "@/lib/utils/Timer";

const CountdownTimer = ({ expiresAt }) => {
  return (
    <span suppressHydrationWarning>
      {`${Timer(expiresAt).days} Days ${Timer(expiresAt).hours}:${
        Timer(expiresAt).minutes
      }:${Timer(expiresAt).seconds}`}
    </span>
  );
};

export default CountdownTimer;
