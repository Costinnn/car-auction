import React, { useState } from "react";
import Image from "next/image";

import arrowDown from "@/assets/global/arrow-down.png";

import "./NavFilter.css";

const NavFilter = ({ language }) => {
  const [filters, setFilters] = useState({
    category: { title: language.category.title, option: null },
    brand: { title: language.brand.title, option: null },
    years: { title: language.years.title, option1: "2000", option2: "2023" },
  });
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

  const handleDropdownValues = (filterName, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: { title: value, option: value },
    }));
    setIsDropdownOpen({ ...isDropdownOpen, [filterName]: false });
  };

  const handleDropdownSelect = (value1, value2) => {
    if (!value2) {
      if (Number(value1) <= Number(filters.years.option2)) {
        setFilters((prev) => ({
          ...prev,
          years: {
            ...prev.years,
            title: `${value1} ${language.years.to} ${filters.years.option2}`,
            option1: value1,
          },
        }));
      } else {
        setFilters((prev) => ({
          ...prev,
          years: {
            ...prev.years,
            title: `${filters.years.option2} ${language.years.to} ${filters.years.option2}`,
            option1: filters.years.option2,
          },
        }));
      }
    }
    if (!value1) {
      if (Number(value2) >= Number(filters.years.option1)) {
        setFilters((prev) => ({
          ...prev,
          years: {
            ...prev.years,
            title: `${filters.years.option1} ${language.years.to} ${value2}`,
            option2: value2,
          },
        }));
      } else {
        setFilters((prev) => ({
          ...prev,
          years: {
            ...prev.years,
            title: `${filters.years.option1} ${language.years.to} ${filters.years.option1}`,
            option2: filters.years.option1,
          },
        }));
      }
    }
    setIsDropdownOpen({ ...isDropdownOpen, years: false });
  };
  return (
    <div className="row3">
      {/* --CATEGORY-- */}
      <div className="category">
        <button
          className="button-empty"
          onClick={() => {
            handleDropdown("category");
          }}
        >
          {filters.category.option
            ? filters.category.option
            : filters.category.title}
          <Image src={arrowDown} width={10} alt="arrow-down" />
        </button>
        <ul
          className={`dropdown ${isDropdownOpen.category ? "open" : "close"}`}
        >
          <li onClick={() => handleDropdownValues("category", "all")}>
            {language.category.all}
          </li>
          <li onClick={() => handleDropdownValues("category", "atv")}>
            {language.category.atv}
          </li>
          <li onClick={() => handleDropdownValues("category", "coupe")}>
            {language.category.coupe}
          </li>
          <li onClick={() => handleDropdownValues("category", "convertible")}>
            {language.category.convertible}
          </li>
          <li onClick={() => handleDropdownValues("category", "hatchback")}>
            {language.category.hatchback}
          </li>
          <li onClick={() => handleDropdownValues("category", "motorcycle")}>
            {language.category.motorcycle}
          </li>
          <li onClick={() => handleDropdownValues("category", "sedan")}>
            {language.category.sedan}
          </li>
          <li onClick={() => handleDropdownValues("category", "suv")}>
            {language.category.suv}
          </li>
          <li onClick={() => handleDropdownValues("category", "truck")}>
            {language.category.truck}
          </li>
          <li onClick={() => handleDropdownValues("category", "van")}>
            {language.category.van}
          </li>
          <li onClick={() => handleDropdownValues("category", "wagon")}>
            {language.category.wagon}
          </li>
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
          {filters.brand.option ? filters.brand.option : filters.brand.title}
          <Image src={arrowDown} width={10} alt="arrow-down" />
        </button>
        <ul className={`dropdown ${isDropdownOpen.brand ? "open" : "close"}`}>
          <li onClick={() => handleDropdownValues("brand", "audi")}>Audi</li>
          <li onClick={() => handleDropdownValues("brand", "bmw")}>BMW</li>
          <li onClick={() => handleDropdownValues("brand", "chevrolet")}>
            Chevrolet
          </li>
          <li onClick={() => handleDropdownValues("brand", "citroen")}>
            Citroen
          </li>
          <li onClick={() => handleDropdownValues("brand", "dacia")}>Dacia</li>
          <li onClick={() => handleDropdownValues("brand", "fiat")}>Fiat</li>
          <li onClick={() => handleDropdownValues("brand", "ford")}>Ford</li>
          <li onClick={() => handleDropdownValues("brand", "honda")}>Honda</li>
          <li onClick={() => handleDropdownValues("brand", "hyundai")}>
            Hyundai
          </li>
          <li onClick={() => handleDropdownValues("brand", "infiniti")}>
            Infiniti
          </li>
          <li onClick={() => handleDropdownValues("brand", "jaguar")}>
            Jaguar
          </li>
          <li onClick={() => handleDropdownValues("brand", "jeep")}>Jeep</li>
          <li onClick={() => handleDropdownValues("brand", "kia")}>Kia</li>
          <li onClick={() => handleDropdownValues("brand", "landrover")}>
            Land Rover
          </li>
          <li onClick={() => handleDropdownValues("brand", "lexus")}>Lexus</li>
          <li onClick={() => handleDropdownValues("brand", "mercedes")}>
            Mercedes-Benz
          </li>
          <li onClick={() => handleDropdownValues("brand", "mitshubishi")}>
            Mitsubishi
          </li>
          <li onClick={() => handleDropdownValues("brand", "nissan")}>
            Nissan
          </li>
          <li onClick={() => handleDropdownValues("brand", "opel")}>Opel</li>
          <li onClick={() => handleDropdownValues("brand", "peugeot")}>
            Peugeot
          </li>
          <li onClick={() => handleDropdownValues("brand", "renault")}>
            Renault
          </li>
          <li onClick={() => handleDropdownValues("brand", "seat")}>Seat</li>
          <li onClick={() => handleDropdownValues("brand", "skoda")}>Skoda</li>
          <li onClick={() => handleDropdownValues("brand", "toyota")}>
            Toyota
          </li>
          <li onClick={() => handleDropdownValues("brand", "volkswagen")}>
            Volkswagen
          </li>
          <li onClick={() => handleDropdownValues("brand", "volvo")}>Volvo</li>
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
          {filters.years.title}
          <Image src={arrowDown} width={10} alt="arrow-down" />
        </button>
        <div className={`dropdown ${isDropdownOpen.years ? "open" : "close"}`}>
          <select
            defaultValue={"2000"}
            onChange={(e) => {
              handleDropdownSelect(e.target.value, null);
            }}
          >
            <option value="2000" onClick={() => handleDropdownSelect()}>
              2000
            </option>
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
          <span>{language.years.to}</span>
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
  );
};

export default NavFilter;
