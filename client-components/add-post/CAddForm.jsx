"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

// import { AddNewPost } from "@/lib/actions/addNewPost";
import testANP from "@/lib/actions/testANP";

import Spinner from "@/components/decoration/Spinner";
import deleteimg from "@/assets/global/deleteimg.png";

import "./AddForm.css";

const initialState = { message: "", status: "" };

const CAddForm = ({ language }) => {
  const [state, formAction] = useFormState(testANP, initialState);

  const [mainImageUrl, setMainImageUrl] = useState("");
  const [intImagesUrl, setIntImagesUrl] = useState([]);
  const [extImagesUrl, setExtImagesUrl] = useState([]);
  const [modificationValue, setModificationValue] = useState("");
  const [flawValue, setFlawValue] = useState("");
  const [modifications, setModifications] = useState([]);
  const [flaws, setFlaws] = useState([]);

  // COMPONENT FUNCTIONS

  const SubmitForm = () => {
    const { pending } = useFormStatus();
    return (
      <>
        {pending && <Spinner />}

        <button type="submit" disabled={pending} className="button-blue">
          {language.button}
        </button>
      </>
    );
  };

  const createImgUrl = (e, imgType) => {
    const imagesUrl = [];

    if (imgType === "main") {
      setMainImageUrl(URL.createObjectURL(e.target.files[0]));
    } else {
      const selectedImages = [...e.target.files];
      selectedImages.forEach((item) =>
        imagesUrl.push(URL.createObjectURL(item))
      );

      if (imgType === "int") {
        setIntImagesUrl(imagesUrl);
      } else if (imgType === "ext") {
        setExtImagesUrl(imagesUrl);
      }
    }
  };

  const handleModifications = () => {
    setModifications((prev) => [...prev, modificationValue]);
    setModificationValue("");
  };

  const handleFlaws = (e) => {
    setFlaws((prev) => [...prev, flawValue]);
    setFlawValue("");
  };

  // ADD TO DB FUNCTIONS

  return (
    <form className="add-form" action={testANP}>
      <h2>{language.info}</h2>

      {/* Name - Phone */}
      <div className="container">
        {/* Name */}
        <div className="box">
          <label htmlFor="name">{language.name}</label>
          <input type="text" name="name" id="name" required />
        </div>

        {/* search for  letters*/}
        <div className="box">
          <label htmlFor="phone">{language.phone}</label>
          <input type="text" name="phone" id="phone" required />
        </div>
      </div>

      <h2>{language.details}</h2>

      <div className="container">
        {/* MAIN IMAGE */}
        <div className="box main-img-box">
          <label htmlFor="mainImage">
            {language.mainimage}
            <div className="addimg">
              <input
                type="file"
                name="mainImage"
                id="mainImage"
                accept="image/*"
                onChange={(e) => createImgUrl(e, "main")}
                required
              />
            </div>
          </label>
          {mainImageUrl && (
            <div className="img-box">
              <Image
                src={mainImageUrl}
                alt="img"
                className="car-image"
                width={100}
                height={100}
              />
            </div>
          )}
        </div>

        {/* EXT IMAGES */}
        <div className="box">
          <label htmlFor="extImages">{language.extimages}</label>
          <div className="addimg">
            <input
              type="file"
              name="extImages"
              id="extImages"
              multiple
              accept="image/*"
              onChange={(e) => createImgUrl(e, "ext")}
              required
            />
            {extImagesUrl && (
              <div className="img-display">
                <div className="img-content">
                  {extImagesUrl.map((item) => (
                    <div key={item} className="img-box">
                      <Image
                        src={item}
                        alt="img"
                        className="car-image"
                        width={80}
                        height={70}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* INT IMAGES */}
        <div className="box">
          <label htmlFor="intImages">{language.intimages}</label>
          <div className="addimg">
            <input
              type="file"
              name="intImages"
              id="intImages"
              multiple
              accept="image/*"
              onChange={(e) => createImgUrl(e, "int")}
              required
            />
            {intImagesUrl && (
              <div className="img-display">
                <div className="img-content">
                  {intImagesUrl.map((item) => (
                    <div key={item} className="img-box">
                      <Image
                        src={item}
                        alt="img"
                        className="car-image"
                        width={80}
                        height={70}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Brand */}
        <div className="box">
          <label htmlFor="brand">{language.brand}</label>
          <select name="brand" id="brand" required>
            <option value="" disabled></option>
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
            <option value="land rover">Land Rover</option>
            <option value="lexus">Lexus</option>
            <option value="mercedes-benz">Mercedes-Benz</option>
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
        </div>

        {/* Model */}
        <div className="box">
          <label htmlFor="model">{language.model}</label>
          <input type="text" name="model" id="model" required />
        </div>

        {/* Vin */}
        <div className="box">
          <label htmlFor="vin">{language.vin}</label>
          <input type="text" name="vin" id="vin" required />
        </div>

        <div className="box"></div>
        {/* search for  letters*/}
        {/* Year - Mileage */}
        <div className="group2">
          <div>
            <label htmlFor="year">{language.year}</label>
            <label htmlFor="mileage">{language.mileage}</label>
          </div>
          <div>
            <select name="year" id="year" className="small-input" required>
              <option value="" disabled></option>
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
            <input
              type="number"
              id="mileage"
              name="mileage"
              min={0}
              max={999999}
              required
            />
          </div>
        </div>
        {/* Transmission - Gears */}
        <div className="group2">
          <div>
            <label htmlFor="transmission">{language.transmission.title}</label>
            <label htmlFor="gears">{language.gears.title}</label>
          </div>
          <div>
            <select name="transmission" id="transmission" required>
              <option value="" disabled></option>
              <option value="manual">{language.transmission.manual}</option>
              <option value="automatic">
                {language.transmission.automatic}
              </option>
            </select>

            <select name="gears" id="gears" required>
              <option value="" disabled></option>
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

        {/* Drivetrain */}
        <div className="box">
          <label htmlFor="drivetrain">{language.drivetrain.title}</label>
          <select name="drivetrain" id="drivetrain" required>
            <option value="" disabled></option>
            <option value="rwd">{language.drivetrain.rwd}</option>
            <option value="fwd">{language.drivetrain.fwd}</option>
            <option value="4wd">{language.drivetrain.ffwd}</option>
            <option value="awd">{language.drivetrain.awd}</option>
          </select>
        </div>

        {/* Capacity - cylinders - configuration */}
        <div className="group3">
          <div>
            <label htmlFor="engineCapacity">{language.engine.capacity}</label>
            <label htmlFor="engineCylinders">{language.engine.cylinders}</label>
            <label htmlFor="engineConfiguration">
              {language.engine.configuration.title}
            </label>
          </div>
          <div>
            <input
              type="text"
              id="engineCapacity"
              name="engineCapacity"
              required
            />
            <select name="engineCylinders" id="engineCylinders" required>
              <option value="" disabled></option>
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

            <select
              name="engineConfiguration"
              id="engineConfiguration"
              required
            >
              <option value="" disabled></option>
              <option value="I">{language.engine.configuration.inline}</option>
              <option value="V">V</option>
            </select>
          </div>
        </div>

        {/* Category */}
        <div className="box">
          {/* search for  letters*/}
          <label htmlFor="category">{language.bodystyle.title}</label>
          <select name="category" id="category" required>
            <option value="" disabled></option>
            <option value="atv">{language.bodystyle.atv}</option>
            <option value="coupe">{language.bodystyle.coupe}</option>
            <option value="convertible">
              {language.bodystyle.convertible}
            </option>
            <option value="hatchback">{language.bodystyle.hatchback}</option>
            <option value="motorcycle">{language.bodystyle.motorcycle}</option>
            <option value="sedan">{language.bodystyle.sedan}</option>
            <option value="suv">{language.bodystyle.suv}</option>
            <option value="truck">{language.bodystyle.truck}</option>
            <option value="van">{language.bodystyle.van}</option>
            <option value="wagon">{language.bodystyle.wagon}</option>
          </select>
        </div>

        {/* Colors */}
        <div className="group2">
          <div>
            <label htmlFor="eColor">{language.ecolor}</label>
            <label htmlFor="iColor">{language.icolor}</label>
          </div>
          <div>
            <input type="text" name="eColor" id="eColor" required />

            <input type="text" name="iColor" id="iColor" required />
          </div>
        </div>

        {/* Location */}
        <div className="box">
          <label htmlFor="location">{language.location}</label>
          <input type="text" id="location" name="location" required />
        </div>

        {/* Description */}
        <div className="box">
          <label htmlFor="description">{language.description}</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            required
          ></textarea>
        </div>

        {/* Modifications */}
        <div className="group1">
          <label htmlFor="modificationValue">
            {language.modifications.title}
          </label>
          <div>
            <input
              type="text"
              id="modificationValue"
              name="modificationValue"
              value={modificationValue}
              onChange={(e) => setModificationValue(e.target.value)}
            />
            <button
              type="button"
              className="button-green"
              onClick={handleModifications}
            >
              <input type="hidden" name="modifications" value={modifications} />
              {language.modifications.button}
            </button>
          </div>
          {modifications &&
            modifications.map((item, idx) => (
              <span key={item + idx}>{item}, </span>
            ))}
        </div>

        {/* Flaws */}
        <div className="group1">
          <label htmlFor="flawValue">{language.flaws.title}</label>
          <div>
            <input
              type="text"
              id="flawValue"
              name="flawValue"
              value={flawValue}
              onChange={(e) => setFlawValue(e.target.value)}
            />
            <input type="hidden" name="flaws" value={flaws} />
            <button
              type="button"
              className="button-green"
              onClick={handleFlaws}
            >
              {language.flaws.button}
            </button>
          </div>
          {flaws &&
            flaws.map((item, idx) => <span key={item + idx}>{item}, </span>)}
        </div>

        {/* Buy - bid */}
        <div className="group2">
          <div>
            <label htmlFor="buyNow">{language.buynow}</label>
            <label htmlFor="minimumBid">{language.minbid}</label>
          </div>
          <div>
            <input
              type="number"
              id="buyNow"
              name="buyNow"
              min={0}
              max={999999}
            />
            <input
              type="number"
              id="minimumBid"
              name="minimumBid"
              min={0}
              max={999999}
            />
          </div>
        </div>
      </div>

      <SubmitForm />

      {state?.message && <span className="feedback">{state.message}</span>}
    </form>
  );
};

export default CAddForm;
