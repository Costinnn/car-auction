import React, { useState } from "react";
import Image from "next/image";

import arrowDown from "@/assets/global/arrow-down.png";

import "./NavFilter.css";

const NavFilter = ({ language }) => {
  const [filters, setFilters] = useState({
    category: { title: language.category.title, option: null },
    brand: { title: language.brand.title, option: null },
    years: { title: language.years.title, option: null },
  });
  return (
    <div className="row3">
      <div className="category">
        <button className="button-empty">
          {filters.category.option
            ? filters.category.option
            : filters.category.title}
          <Image src={arrowDown} width={10} alt="arrow-down" />
        </button>
        {/* <ul className="dropdown">
          <li>{language.category.all}</li>
          <li>{language.category.atv}</li>
          <li>{language.category.coupe}</li>
          <li>{language.category.convertible}</li>
          <li>{language.category.hatchback}</li>
          <li>{language.category.motorcycle}</li>
          <li>{language.category.sedan}</li>
          <li>{language.category.suv}</li>
          <li>{language.category.truck}</li>
          <li>{language.category.van}</li>
          <li>{language.category.wagon}</li>
        </ul> */}
      </div>
      <div className="brand">
        <button className="button-empty">
          {filters.brand.option ? filters.brand.option : filters.brand.title}
          <Image src={arrowDown} width={10} alt="arrow-down" />
        </button>
        {/* <ul className="dropdown">
          <li>Audi</li>
          <li>BMW</li>
          <li>Chevrolet</li>
          <li>Citroen</li>
          <li>Dacia</li>
          <li>Fiat</li>
          <li>Ford</li>
          <li>Honda</li>
          <li>Hyundai</li>
          <li>Infiniti</li>
          <li>Jaguar</li>
          <li>Jeep</li>
          <li>Kia</li>
          <li>Land Rover</li>
          <li>Lexus</li>
          <li>Mercedes-Benz</li>
          <li>Mitsubishi</li>
          <li>Nissan</li>
          <li>Opel</li>
          <li>Peugeot</li>
          <li>Renault</li>
          <li>Seat</li>
          <li>Skoda</li>
          <li>Toyota</li>
          <li>Volkswagen</li>
          <li>Volvo</li>
        </ul> */}
      </div>
      <div className="years">
        <button className="button-empty">
          {filters.years.title}
          <Image src={arrowDown} width={10} alt="arrow-down" />
        </button>
        {/* <div className="dropdown">
          <select>
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
          <span>{language.years.to}</span>
          <select>
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
        </div> */}
      </div>
    </div>
  );
};

export default NavFilter;
