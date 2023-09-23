"use client";
import Image from "next/image";

import loading from "@/assets/global/loading.png";

const Spinner = () => {
  return (
    <>
      <Image
        src={loading}
        alt="loading"
        width={20}
        height={20}
        className="loading"
      />
    </>
  );
};

export default Spinner;
