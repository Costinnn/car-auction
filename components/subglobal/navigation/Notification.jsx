import React from "react";

import newpost from "@/assets/global/newpost.png";
import outbid from "@/assets/global/outbid.png";
import ended from "@/assets/global/ended.png";
import ending from "@/assets/global/ending.png";
import results from "@/assets/global/results.png";
import Link from "next/link";
import Image from "next/image";

// notification types : newListings, outbid, ending, favResults, bidResults

const Notification = ({ data, langParam, toggleNotifModal }) => {
  return (
    <Link
      href={`/${langParam}/${data.link}`}
      onClick={toggleNotifModal}
      className={`notification ${data.isSeen ? "seen" : "notseen"}`}
    >
      <Image
        src={
          data.type === "favResults"
            ? ended
            : data.type === "bidResults"
            ? results
            : data.type === "ending"
            ? ending
            : data.type === "outbid"
            ? outbid
            : data.type === "newListings"
            ? newpost
            : ""
        }
        alt="ended"
        width={30}
        height={30}
      />
      <span>{data.message}</span>
    </Link>
  );
};

export default Notification;
