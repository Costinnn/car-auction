"use client";

import React from "react";
import Timer from "@/lib/utils/Timer";

const CountdownTimer = ({ langEnded, langDays, expiresAt, dateNow }) => {
  if (dateNow <= expiresAt.getTime()) {
    return (
      <span suppressHydrationWarning>
        {`${Timer(expiresAt).days} ${langDays} ${Timer(expiresAt).hours}:${
          Timer(expiresAt).minutes
        }:${Timer(expiresAt).seconds}`}
      </span>
    );
  } else {
    return <span>{langEnded}</span>;
  }
};

export default CountdownTimer;
