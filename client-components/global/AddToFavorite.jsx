"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

import addFavorite from "@/assets/global/add-favorite.png";
import favorite from "@/assets/global/favorite.png";

const AddToFavorite = ({
  width,
  height,
  userId,
  userFavorites,
  sellerId,
  postId,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isShown, setIsShown] = useState(false);

  const toggleFavorite = async () => {
    if (userId && isShown && userId !== sellerId) {
      setIsFavorite((prev) => !prev);
      try {
        const res = await axios.patch(`/en/api/addToFavorite`, {
          userId,
          postId,
        });

        if (res.data.message === "Success") {
          console.log("User favorites changed!");
        } else {
          console.log("Could not change user favorites!");
          setIsFavorite(false);
        }
      } catch (err) {
        console.log("HandleFavoritesPost ERROR");
        setIsFavorite(false);
      }
    }
  };

  useEffect(() => {
    if (userId && userId !== sellerId) {
      userFavorites?.forEach((item) =>
        item === postId ? setIsFavorite(true) : ""
      );
    }
    if (!userId || (userId && userId === sellerId)) {
      setIsShown(false);
    } else {
      setIsShown(true);
    }
  }, [userId, isShown]);

  return (
    <>
      {isShown && (
        <Image
          src={isFavorite ? favorite : addFavorite}
          alt="img"
          width={width}
          height={height}
          onClick={toggleFavorite}
        />
      )}
    </>
  );
};

export default AddToFavorite;
