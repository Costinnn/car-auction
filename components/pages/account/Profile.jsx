"use client";

import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import Resizer from "react-image-file-resizer";

import blankProfileImg from "@/assets/global/profile.png";
import deleteimg from "@/assets/global/deleteimg.png";

import Spinner from "@/components/decoration/Spinner";

const Profile = ({ language, accInfo }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdateProfileOpen, setIsUpdateProfileOpen] = useState(false);
  const [profileImgUrl, setProfileImgUrl] = useState("");
  const [imgToUpload, setImgToUpload] = useState("");
  const [nameToUpload, setNameToUpload] = useState("");
  const [bioToUpload, setBioToUpload] = useState("");

  const handleProfileImage = async (e) => {
    const compressImage = (file) =>
      new Promise((resolve) => {
        Resizer.imageFileResizer(
          file,
          500,
          500,
          "WEBP",
          70,
          0,
          (uri) => {
            resolve(uri);
          },
          "base64"
        );
      });
    const currentImage = await compressImage(e.target.files[0]);
    // create image state for db upload
    setImgToUpload(currentImage);
    setProfileImgUrl(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async () => {
    if (imgToUpload || nameToUpload || bioToUpload) {
      setIsLoading(true);
      try {
        const res = await axios.patch("/en/api/profile", {
          image: imgToUpload,
          name: nameToUpload,
          bio: bioToUpload,
        });

        if (res.data.message === "Success") {
          setIsUpdateProfileOpen(false);
        } else if (res.data.error) {
          console.log(res.data.error);
        }
      } catch (err) {
        console.log("Could not update profile!", err);
      }
      setIsLoading(false);
    }
  };

  return (
    <section className="profile">
      <Image
        src={
          accInfo.image
            ? accInfo.image
            : profileImgUrl
            ? profileImgUrl
            : blankProfileImg
        }
        alt="profile"
        width={100}
        height={100}
      />
      {isUpdateProfileOpen && (
        <div className="addimg">
          <Image
            src={deleteimg}
            alt="img"
            className="deleteimg"
            width={20}
            height={20}
            onClick={() => {
              setProfileImgUrl("");
              setImgToUpload("");
            }}
          />
          <input type="file" accept="image/*" onChange={handleProfileImage} />
          <span className="button-blue">{language.addimg}</span>
        </div>
      )}

      <div className="profile-info">
        <span className="name">{accInfo.name}</span>
        {isUpdateProfileOpen && (
          <input
            type="text"
            placeholder={language.iplaceholder}
            value={nameToUpload}
            onChange={(e) => setNameToUpload(e.target.value)}
          />
        )}
        <span className="date">{language.date}</span>
        <p className="bio">{accInfo.bio}</p>
        {isUpdateProfileOpen && (
          <textarea
            cols="30"
            rows="5"
            placeholder={language.tplaceholder}
            value={bioToUpload}
            onChange={(e) => setBioToUpload(e.target.value)}
          ></textarea>
        )}
      </div>
      {isUpdateProfileOpen && (
        <>
          <button
            className="button-blue"
            onClick={() => setIsUpdateProfileOpen(false)}
          >
            {language.cancel}
          </button>
          {isLoading ? <Spinner /> : ""}
          <button className="button-green" onClick={handleSubmit}>
            {language.save}
          </button>
        </>
      )}

      {!isUpdateProfileOpen && (
        <button
          className="button-empty"
          onClick={() => setIsUpdateProfileOpen(true)}
        >
          {language.edit}
        </button>
      )}
    </section>
  );
};

export default Profile;
