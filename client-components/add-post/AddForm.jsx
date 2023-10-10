"use client";
import React, { useState } from "react";
import Image from "next/image";
import Resizer from "react-image-file-resizer";

import Spinner from "@/components/decoration/Spinner";
import deleteimg from "@/assets/global/deleteimg.png";

import "./AddForm.css";
import axios from "axios";

const AddForm = ({ language }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [intImages, setIntImages] = useState([]);
  const [extImages, setExtImages] = useState([]);
  const [intImagesUrl, setIntImagesUrl] = useState([]);
  const [extImagesUrl, setExtImagesUrl] = useState([]);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [vin, setVin] = useState("");
  const [year, setYear] = useState("");
  const [mileage, setMileage] = useState("");
  const [transmission, setTransmission] = useState("");
  const [gears, setGears] = useState("");
  const [drivetrain, setDriveTrain] = useState("");
  const [engineCapacity, setEngineCapacity] = useState("");
  const [engineCylinders, setEngineCylinders] = useState("");
  const [engineConfiguration, setEngineConfiguration] = useState("");
  const [category, setCategory] = useState("");
  const [eColor, setEColor] = useState("");
  const [iColor, setIColor] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [modificationsInputValue, setModificationsInputValue] = useState("");
  const [modifications, setModifications] = useState([]);
  const [flawsInputValue, setFlawsInputValue] = useState("");
  const [flaws, setFlaws] = useState([]);
  const [buyNow, setBuyNow] = useState("");
  const [minimumBid, setMinimumBid] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // COMPONENT FUNCTIONS
  const compressImage = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        1000,
        1000,
        "WEBP",
        85,
        0,
        (uri) => {
          resolve(uri);
        },
        "base64"
      );
    });

  const addImagesInBase64 = async (fileArr, imgType) => {
    // 1. Compress and convert
    for await (let file of fileArr) {
      try {
        const compressedImg = await compressImage(file);
        if (imgType === "int") {
          setIntImages((prev) => [...prev, compressedImg]);
        } else if (imgType === "ext") {
          setExtImages((prev) => [...prev, compressedImg]);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const createImgUrl = (fileArr, imgType) => {
    const imagesUrl = [];
    fileArr.forEach((item) => imagesUrl.push(URL.createObjectURL(item)));
    if (imgType === "int") {
      setIntImagesUrl((prev) => [...prev, ...imagesUrl]);
    } else if (imgType === "ext") {
      setExtImagesUrl((prev) => [...prev, ...imagesUrl]);
    }
  };

  const uploadImages = async (e, imgType) => {
    if (imgType === "int") {
      const selectedImg = [...e.target.files];
      if (intImages.length >= 15) {
        alert("Poti adauga maxim 15 poze!");
      } else if (intImages.length + selectedImg.length > 15) {
        const numberFilesToAdd = 15 - intImages.length;
        const newSelectedImg = selectedImg.slice(0, numberFilesToAdd);
        await addImagesInBase64(newSelectedImg, "int");
        createImgUrl(newSelectedImg, "int");
      } else {
        await addImagesInBase64(selectedImg, "int");
        createImgUrl(selectedImg, "int");
      }
    } else if (imgType === "ext") {
      const selectedImg = [...e.target.files];
      if (extImages.length >= 15) {
        alert("Poti adauga maxim 15 poze!");
      } else if (extImages.length + selectedImg.length > 15) {
        const numberFilesToAdd = 15 - extImages.length;
        const newSelectedImg = selectedImg.slice(0, numberFilesToAdd);
        await addImagesInBase64(newSelectedImg, "ext");
        createImgUrl(newSelectedImg, "ext");
      } else {
        await addImagesInBase64(selectedImg, "ext");
        createImgUrl(selectedImg, "ext");
      }
    }
  };

  const deleteImage = (urlToDelete, imgType) => {
    if (imgType === "int") {
      const newImagesUrl = intImagesUrl.filter((urlItem, urlIndex) => {
        if (urlItem !== urlToDelete) return urlItem;
        if (urlItem === urlToDelete) {
          // modify images data
          setIntImages((prev) =>
            prev.filter((imgItem, imgIndex) => imgIndex !== urlIndex)
          );
        }
      });

      // modify images URL data
      setIntImagesUrl(newImagesUrl);
    } else if (imgType === "ext") {
      const newImagesUrl = extImagesUrl.filter((urlItem, urlIndex) => {
        if (urlItem !== urlToDelete) return urlItem;
        if (urlItem === urlToDelete) {
          // modify images data
          setExtImages((prev) =>
            prev.filter((imgItem, imgIndex) => imgIndex !== urlIndex)
          );
        }
      });

      // modify images URL data
      setExtImagesUrl(newImagesUrl);
    }
  };

  const handleModifications = () => {
    setModifications((prev) => [...prev, modificationsInputValue]);
    setModificationsInputValue("");
  };

  const handleFlaws = () => {
    setFlaws((prev) => [...prev, flawsInputValue]);
    setFlawsInputValue("");
  };

  // ADD TO DB FUNCTIONS

  const addPostToDb = async (postToAdd) => {
    try {
      const res = await axios.post(`/en/api/add-post`, postToAdd);
      return res;
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // create postToAdd
    const postToAdd = {
      name,
      phone,
      extImages,
      intImages,
      brand,
      model,
      vin,
      year,
      mileage,
      transmission,
      gears,
      drivetrain,
      engineCapacity,
      engineCylinders,
      engineConfiguration,
      category,
      eColor,
      iColor,
      location,
      description,
      modifications,
      flaws,
      buyNow: Number(buyNow),
      minimumBid: Number(minimumBid),
    };

    const res = await addPostToDb(postToAdd);

    if (res.data.message === "Success") {
      setFeedback("Listing added with success");
      setName("");
      setPhone("");
      setIntImages([]);
      setExtImages([]);
      setIntImagesUrl([]);
      setExtImagesUrl([]);
      setBrand("");
      setModel("");
      setVin("");
      setYear("");
      setMileage("");
      setTransmission("");
      setGears("");
      setDriveTrain("");
      setEngineCapacity("");
      setEngineCylinders("");
      setEngineConfiguration("");
      setCategory("");
      setEColor("");
      setIColor("");
      setLocation("");
      setDescription("");
      setModifications([]);
      setFlaws([]);
      setBuyNow("");
      setMinimumBid("");
    } else if (res.data.error) {
      console.log(res);
      setFeedback("Could not add your listing");
    }
    setIsLoading(false);
    setTimeout(() => setFeedback(""), 10000);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h2>{language.info}</h2>
      <div className="container">
        <div className="box">
          <label htmlFor="name">{language.name}</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* search for  letters*/}
        <div className="box">
          <label htmlFor="phone">{language.phone}</label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
      </div>

      <h2>{language.details}</h2>
      <div className="container">
        <div className="box">
          <label htmlFor="addeimg">{language.extimages}</label>
          <div className="addimg">
            <input
              type="file"
              name="addeimg"
              id="addeimg"
              multiple
              accept="image/*"
              onChange={(e) => uploadImages(e, "ext")}
              required
            />
            {extImagesUrl && (
              <div className="img-display">
                <div className="img-content">
                  {extImagesUrl.map((item) => (
                    <div key={item} className="img-box">
                      <Image
                        src={deleteimg}
                        alt="img"
                        className="deleteimg"
                        width={23}
                        height={23}
                        onClick={() => deleteImage(item, "ext")}
                      />
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
        <div className="box">
          <label htmlFor="addiimg">{language.intimages}</label>
          <div className="addimg">
            <input
              type="file"
              name="addiimg"
              id="addiimg"
              multiple
              accept="image/*"
              onChange={(e) => uploadImages(e, "int")}
              required
            />
            {intImagesUrl && (
              <div className="img-display">
                <div className="img-content">
                  {intImagesUrl.map((item) => (
                    <div key={item} className="img-box">
                      <Image
                        src={deleteimg}
                        alt="img"
                        className="deleteimg"
                        width={23}
                        height={23}
                        onClick={() => deleteImage(item, "int")}
                      />
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
        <div className="box">
          <label htmlFor="brand">{language.brand}</label>
          <select
            name="brand"
            id="brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            required
          >
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
        <div className="box">
          <label htmlFor="model">{language.model}</label>
          <input
            type="text"
            name="model"
            id="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            required
          />
        </div>
        <div className="box">
          <label htmlFor="vin">{language.vin}</label>
          <input
            type="text"
            name="vin"
            id="vin"
            value={vin}
            onChange={(e) => setVin(e.target.value)}
            required
          />
        </div>
        <div className="box"></div>
        {/* search for  letters*/}
        <div className="group2">
          <div>
            <label htmlFor="year">{language.year}</label>
            <label htmlFor="mileage">{language.mileage}</label>
          </div>
          <div>
            <select
              name="year"
              id="year"
              className="small-input"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
            >
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
              min={0}
              max={999999}
              value={mileage}
              onChange={(e) => setMileage(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="group2">
          <div>
            <label htmlFor="transmission">{language.transmission.title}</label>
            <label htmlFor="gears">{language.gears.title}</label>
          </div>
          <div>
            <select
              name="transmission"
              id="transmission"
              value={transmission}
              onChange={(e) => setTransmission(e.target.value)}
              required
            >
              <option value="" disabled></option>
              <option value="manual">{language.transmission.manual}</option>
              <option value="automatic">
                {language.transmission.automatic}
              </option>
            </select>

            <select
              name="gears"
              id="gears"
              value={gears}
              onChange={(e) => setGears(e.target.value)}
              required
            >
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
        <div className="box">
          <label htmlFor="drivetrain">{language.drivetrain.title}</label>
          <select
            name="drivetrain"
            id="drivetrain"
            value={drivetrain}
            onChange={(e) => setDriveTrain(e.target.value)}
            required
          >
            <option value="" disabled></option>
            <option value="rwd">{language.drivetrain.rwd}</option>
            <option value="fwd">{language.drivetrain.fwd}</option>
            <option value="4wd">{language.drivetrain.ffwd}</option>
            <option value="awd">{language.drivetrain.awd}</option>
          </select>
        </div>
        <div className="group3">
          <div>
            <label htmlFor="capacity">{language.engine.capacity}</label>
            <label htmlFor="cylinders">{language.engine.cylinders}</label>
            <label htmlFor="configuration">
              {language.engine.configuration.title}
            </label>
          </div>
          <div>
            <input
              type="text"
              id="capacity"
              value={engineCapacity}
              onChange={(e) => setEngineCapacity(e.target.value)}
              required
            />

            <select
              name="cylinders"
              id="cylinders"
              value={engineCylinders}
              onChange={(e) => setEngineCylinders(e.target.value)}
              required
            >
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
              name="configuration"
              id="configuration"
              value={engineConfiguration}
              onChange={(e) => setEngineConfiguration(e.target.value)}
              required
            >
              <option value="" disabled></option>
              <option value="I">{language.engine.configuration.inline}</option>
              <option value="V">V</option>
            </select>
          </div>
        </div>
        <div className="box">
          {/* search for  letters*/}
          <label htmlFor="body">{language.bodystyle.title}</label>
          <select
            name="body"
            id="body"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
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
        <div className="group2">
          <div>
            <label htmlFor="ecolor">{language.ecolor}</label>
            <label htmlFor="icolor">{language.icolor}</label>
          </div>
          <div>
            <input
              type="text"
              name="ecolor"
              id="ecolor"
              value={eColor}
              onChange={(e) => setEColor(e.target.value)}
              required
            />

            <input
              type="text"
              name="icolor"
              id="icolor"
              value={iColor}
              onChange={(e) => setIColor(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="box">
          <label htmlFor="location">{language.location}</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="box">
          <label htmlFor="description">{language.description}</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="group1">
          <label htmlFor="modifications">{language.modifications.title}</label>
          <div>
            <input
              type="text"
              id="modifications"
              value={modificationsInputValue}
              onChange={(e) => setModificationsInputValue(e.target.value)}
            />
            <button
              type="button"
              className="button-green"
              onClick={handleModifications}
            >
              {language.modifications.button}
            </button>
          </div>
          {modifications &&
            modifications.map((item, idx) => (
              <span key={item + idx}>{item}, </span>
            ))}
        </div>
        <div className="group1">
          <label htmlFor="flaws">{language.flaws.title}</label>
          <div>
            <input
              type="text"
              id="flaws"
              value={flawsInputValue}
              onChange={(e) => setFlawsInputValue(e.target.value)}
            />
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
        <div className="group2">
          <div>
            <label htmlFor="buynow">{language.buynow}</label>
            <label htmlFor="minbid">{language.minbid}</label>
          </div>
          <div>
            <input
              type="number"
              id="buynow"
              min={0}
              max={999999}
              value={buyNow}
              onChange={(e) => setBuyNow(e.target.value)}
            />
            <input
              type="number"
              id="minbid"
              min={0}
              max={999999}
              value={minimumBid}
              onChange={(e) => setMinimumBid(e.target.value)}
            />
          </div>
        </div>
      </div>
      {isLoading && <Spinner />}
      <button type="submit" className="button-blue">
        {language.button}
      </button>
      {feedback && <span className="feedback">{feedback}</span>}
    </form>
  );
};

export default AddForm;
