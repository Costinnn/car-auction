"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";

import search from "@/assets/global/search.png";

import "./SearchInput.css";

const SearchInput = ({ language }) => {
  const router = useRouter();
  const params = useParams();

  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    router.push(`/${params.lang}?search=${inputValue}`);
  };

  const handleBtn = () => {
    handleSearch();
    setInputValue("");
  };

  return (
    <div className="search-input">
      <Image src={search} width={20} alt="search" />
      <input
        placeholder={language.input}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="button-green" onClick={handleBtn}>
        {language.btn}
      </button>
    </div>
  );
};

export default SearchInput;
