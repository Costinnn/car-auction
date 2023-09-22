"use client";

import React, { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import arrowDown from "@/assets/global/arrow-down.png";

import "./NavFilter.css";

const NavFilter = ({ language, lang }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryArr = [
    "all",
    "atv",
    "coupe",
    "convertible",
    "hatchback",
    "motorcycle",
    "sedan",
    "suv",
    "truck",
    "van",
    "wagon",
  ];
  const brandArr = [
    { title: `${language.all}`, option: "all" },
    { title: "Audi", option: "audi" },
    { title: "BMW", option: "bmw" },
    { title: "Chevrolet", option: "chevrolet" },
    { title: "Citroen", option: "citroen" },
    { title: "Dacia", option: "dacia" },
    { title: "Fiat", option: "fiat" },
    { title: "Ford", option: "ford" },
    { title: "Honda", option: "honda" },
    { title: "Hyundai", option: "hyundai" },
    { title: "Infiniti", option: "infiniti" },
    { title: "Jaguar", option: "jaguar" },
    { title: "Jeep", option: "jeep" },
    { title: "Kia", option: "kia" },
    { title: "Land Rover", option: "landrover" },
    { title: "Lexus", option: "lexus" },
    { title: "Mercedes-Benz", option: "mercedes" },
    { title: "Mitsubishi", option: "mitshubishi" },
    { title: "Nissan", option: "nissan" },
    { title: "Peugeot", option: "peugeot" },
    { title: "Opel", option: "opel" },
    { title: "Renault", option: "renault" },
    { title: "Seat", option: "seat" },
    { title: "Skoda", option: "skoda" },
    { title: "Toyota", option: "toyota" },
    { title: "Volkswagen", option: "volkswagen" },
    { title: "Volvo", option: "volvo" },
  ];
  const category = {
    title: language.categorytitle,
    option: searchParams.get("category") || "all",
  };
  const brand = {
    title: language.brandtitle,
    option: searchParams.get("brand") || "all",
  };
  const years = {
    title: language.yearstitle,
    option1: searchParams.get("year1") || "2000",
    option2: searchParams.get("year2") || "2023",
  };
  const sort = searchParams.get("sort") || "new";

  const [isDropdownOpen, setIsDropdownOpen] = useState({
    category: false,
    brand: false,
    years: false,
  });

  const handleDropdown = (filterName) => {
    if (isDropdownOpen[filterName] === true) {
      setIsDropdownOpen({ ...isDropdownOpen, [filterName]: false });
    }
    if (isDropdownOpen[filterName] === false) {
      setIsDropdownOpen({
        category: false,
        brand: false,
        years: false,
        [filterName]: true,
      });
    }
  };

  const handleDropdownSelect = (value1, value2) => {
    if (value1) {
      router.push(
        `?sort=${sort}&category=${category.option}&brand=${brand.option}&year1=${value1}&year2=${years.option2}`
      );
    } else if (value2) {
      router.push(
        `?sort=${sort}&category=${category.option}&brand=${brand.option}&year1=${years.option1}&year2=${value2}`
      );
    }
    setIsDropdownOpen({ ...isDropdownOpen, years: false });
  };

  return (
    <div className="nav-filter">
      <div className="row1">
        {/* --CATEGORY-- */}
        <div className="category">
          <button
            className="button-empty"
            onClick={() => {
              handleDropdown("category");
            }}
          >
            {category.option !== "all"
              ? category.option
              : language.categorytitle}
            <Image src={arrowDown} width={10} alt="arrow-down" />
          </button>
          <ul
            className={`dropdown ${isDropdownOpen.category ? "open" : "close"}`}
          >
            {categoryArr.map((item) => (
              <li key={item} onClick={() => handleDropdown("category")}>
                <Link
                  href={`?sort=${sort}&category=${item}&brand=${brand.option}&year1=${years.option1}&year2=${years.option2}`}
                >
                  {language[item]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* --BRAND-- */}
        <div className="brand">
          <button
            className="button-empty"
            onClick={() => {
              handleDropdown("brand");
            }}
          >
            {brand.option !== "all" ? brand.option : language.brandtitle}
            <Image src={arrowDown} width={10} alt="arrow-down" />
          </button>
          <ul className={`dropdown ${isDropdownOpen.brand ? "open" : "close"}`}>
            {brandArr.map((item) => (
              <li key={item.title} onClick={() => handleDropdown("brand")}>
                <Link
                  href={`?sort=${sort}&category=${category.option}&brand=${item.option}&year1=${years.option1}&year2=${years.option2}`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* --YEARS-- */}
        <div className="years">
          <button
            className="button-empty"
            onClick={() => {
              handleDropdown("years");
            }}
          >
            {years.option1 === "2000" && years.option2 === "2023"
              ? language.yearstitle
              : `${years.option1}-${years.option2}`}
            <Image src={arrowDown} width={10} alt="arrow-down" />
          </button>
          <div
            className={`dropdown ${isDropdownOpen.years ? "open" : "close"}`}
          >
            <select
              defaultValue={"2000"}
              onChange={(e) => {
                handleDropdownSelect(e.target.value, null);
              }}
            >
              <option value="2000">2000</option>
              <option value="2001">2001</option>
              <option value="2002">2002</option>
              <option value="2003">2003</option>
              <option value="2004">2004</option>
              <option value="2005">2005</option>
              <option value="2006">2006</option>
              <option value="2007">2007</option>
              <option value="2008">2008</option>
              <option value="2009">2009</option>
              <option value="2010">2010</option>
              <option value="2011">2011</option>
              <option value="2012">2012</option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </select>
            <span>-</span>
            <select
              defaultValue={"2023"}
              onChange={(e) => {
                handleDropdownSelect(null, e.target.value);
              }}
            >
              <option value="2000">2000</option>
              <option value="2001">2001</option>
              <option value="2002">2002</option>
              <option value="2003">2003</option>
              <option value="2004">2004</option>
              <option value="2005">2005</option>
              <option value="2006">2006</option>
              <option value="2007">2007</option>
              <option value="2008">2008</option>
              <option value="2009">2009</option>
              <option value="2010">2010</option>
              <option value="2011">2011</option>
              <option value="2012">2012</option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row2">
        <Link
          href={`?sort=new&category=${category.option}&brand=${brand.option}&year1=${years.option1}&year2=${years.option2}`}
          className={sort === "new" ? "sort-active" : ""}
        >
          {language.new}
        </Link>
        <Link
          href={`?sort=ending&category=${category.option}&brand=${brand.option}&year1=${years.option1}&year2=${years.option2}`}
          className={sort === "ending" ? "sort-active" : ""}
        >
          {language.ending}
        </Link>
        <Link
          href={`?sort=trending&category=${category.option}&brand=${brand.option}&year1=${years.option1}&year2=${years.option2}`}
          className={sort === "trending" ? "sort-active" : ""}
        >
          {language.trending}
        </Link>
        <Link
          href={`?sort=ended&category=${category.option}&brand=${brand.option}&year1=${years.option1}&year2=${years.option2}`}
          className={sort === "ended" ? "sort-active" : ""}
        >
          {language.ended}
        </Link>
      </div>
    </div>
  );
};

export default NavFilter;
