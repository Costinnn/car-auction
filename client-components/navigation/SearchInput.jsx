"use client";

import React, { useState } from "react";
import Image from "next/image";

import search from "@/assets/global/search.png";

import "./SearchInput.css";

const SearchInput = ({ language }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="search-input">
      <Image src={search} width={20} alt="search" />
      <input
        placeholder={language}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
