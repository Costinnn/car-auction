"use client";
import React from "react";

import "./AddForm.css";

const AddForm = ({ language }) => {
  return (
    <form className="add-form">
      <h2>{language.info}</h2>

      <label htmlFor="name">{language.name}</label>
      <input type="text" name="name" id="name" />

      <label htmlFor="phone">{language.phone}</label>
      <input type="text" name="phone" id="phone" />

      <h2>{language.details}</h2>

      <label htmlFor="vin">{language.vin}</label>
      <input type="text" name="vin" id="vin" />

      <label htmlFor="year">{language.year}</label>
      <select name="year" id="year" className="small-input">
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

      <label htmlFor="brand">{language.brand}</label>
      <select name="brand" id="brand">
        <option value="audi">Audi</option>
        <option value="bmw">BMW</option>
        <option value="chevrolet">Chevrolet</option>
        <option value="citroen">Citroen</option>
        <option value="dacia">Dacia</option>
        <option value="fiat">Fiat</option>
        <option value="ford">Ford</option>
        <option value="honda">Honda</option>
        <option value="hyundai">Hyundai</option>
        <option value="infiniti">Infiniti</option>
        <option value="jaguar">Jaguar</option>
        <option value="jeep">Jeep</option>
        <option value="kia">Kia</option>
        <option value="landrover">Land Rover</option>
        <option value="lexus">Lexus</option>
        <option value="mercedes">Mercedes-Benz</option>
        <option value="mitshubishi">Mitsubishi</option>
        <option value="nissan">Nissan</option>
        <option value="opel">Opel</option>
        <option value="peugeot">Peugeot</option>
        <option value="renault">Renault</option>
        <option value="seat">Seat</option>
        <option value="skoda">Skoda</option>
        <option value="toyota">Toyota</option>
        <option value="volkswagen">Volkswagen</option>
        <option value="volvo">Volvo</option>
      </select>

      <label htmlFor="model">{language.model}</label>
      <input type="text" name="model" id="model" />

      <div className="group2">
        <div>
          <label htmlFor="transmission">{language.transmission.title}</label>
          <label htmlFor="gears">{language.gears.title}</label>
        </div>
        <div>
          <select name="transmission" id="transmission">
            <option value="manual">{language.transmission.manual}</option>
            <option value="automatic">{language.transmission.automatic}</option>
          </select>

          <select name="gears" id="gears">
            <option value="0">{language.gears.nogear}</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
      </div>
      <label htmlFor="drivetrain">{language.drivetrain.title}</label>
      <select name="drivetrain" id="drivetrain">
        <option value="rwd">{language.drivetrain.rwd}</option>
        <option value="fwd">{language.drivetrain.fwd}</option>
        <option value="4wd">{language.drivetrain.ffwd}</option>
        <option value="awd">{language.drivetrain.awd}</option>
      </select>

      <div className="group3">
        <div>
          <label htmlFor="capacity">{language.engine.capacity}</label>
          <label htmlFor="cylinders">{language.engine.cylinders}</label>
          <label htmlFor="configuration">
            {language.engine.configuration.title}
          </label>
        </div>
        <div>
          <input type="text" />

          <select name="cylinders" id="cylinders">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="10">10</option>
            <option value="12">12</option>
          </select>

          <select name="configuration" id="configuration">
            <option value="I">{language.engine.configuration.inline}</option>
            <option value="V">V</option>
          </select>
        </div>
      </div>

      <label htmlFor="body">{language.bodystyle.title}</label>
      <select name="body" id="body">
        <option value="atv">{language.bodystyle.atv}</option>
        <option value="coupe">{language.bodystyle.coupe}</option>
        <option value="convertible">{language.bodystyle.convertible}</option>
        <option value="hatchback">{language.bodystyle.hatchback}</option>
        <option value="motorcycle">{language.bodystyle.motorcycle}</option>
        <option value="sedan">{language.bodystyle.sedan}</option>
        <option value="suv">{language.bodystyle.suv}</option>
        <option value="truck">{language.bodystyle.truck}</option>
        <option value="van">{language.bodystyle.van}</option>
        <option value="wagon">{language.bodystyle.wagon}</option>
      </select>

      <div className="group2">
        <div>
          <label htmlFor="ecolor">{language.ecolor}</label>
          <label htmlFor="icolor">{language.icolor}</label>
        </div>
        <div>
          <input type="text" name="ecolor" id="ecolor" />

          <input type="text" name="icolor" id="icolor" />
        </div>
      </div>

      <label htmlFor="location">{language.location}</label>
      <input type="text" id="location" />

      <label htmlFor="description">{language.description}</label>
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
      ></textarea>
      <div className="group1">
        <label htmlFor="modifications">{language.modifications.title}</label>
        <div>
          <input type="text" id="modifications" />
          <button className="button-green">
            {language.modifications.button}
          </button>
        </div>
      </div>

      <div className="group1">
        <label htmlFor="flaws">{language.flaws.title}</label>
        <div>
          <input type="text" id="flaws" />
          <button className="button-green">{language.flaws.button}</button>
        </div>
      </div>

      <button className="button-blue">{language.button}</button>
    </form>
  );
};

export default AddForm;
