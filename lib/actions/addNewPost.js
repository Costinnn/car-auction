"use server";

import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";
import { v2 as cloudinary } from "cloudinary";

import getUserId from "@/lib/getUserId";

export const AddNewPost = async (formData, prevState) => {
  cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  try {
    const userId = await getUserId();
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 5);

    // GET FORM DATA
    const mainImage = formData.get("mainImage");
    const intImages = formData.getAll("intImages");
    const extImages = formData.getAll("extImages");

    const name = formData.get("name");
    const phone = formData.get("phone");
    const brand = formData.get("brand");
    const model = formData.get("model");
    const vin = formData.get("vin");
    const year = formData.get("year");
    const mileage = formData.get("mileage");
    const transmission = formData.get("transmission");
    const gears = formData.get("gears");
    const drivetrain = formData.get("drivetrain");
    const engineCapacity = formData.get("engineCapacity");
    const engineCylinders = formData.get("engineCylinders");
    const engineConfiguration = formData.get("engineConfiguration");
    const category = formData.get("category");
    const eColor = formData.get("eColor");
    const iColor = formData.get("iColor");
    const location = formData.get("location");
    const description = formData.get("description");
    const strModifications = formData.get("modifications");
    const strFlaws = formData.get("flaws");
    const buyNow = formData.get("buyNow");
    const minimumBid = formData.get("minimumBid");

    const modifications = strModifications.split(",");
    const flaws = strFlaws.split(",");

    const newPostData = {
      name,
      phone,
      mainImage: "",
      extImages: [],
      intImages: [],
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

    // PROCESS DATA
    if (intImages[0]?.size !== 0 && extImages[0]?.size !== 0) {
      // 1/2 UPLOAD IMAGES TO CDN

      // // MAIN IMAGE UPLOAD
      // if (mainImage.size !== 0) {
      //   const arrayBuffer = await mainImage.arrayBuffer();
      //   const buffer = new Uint8Array(arrayBuffer);

      //   const uploadResult = await new Promise((resolve, reject) => {
      //     cloudinary.uploader
      //       .upload_stream(
      //         { folder: userId },
      //         function (streamError, streamResult) {
      //           if (streamError) {
      //             reject(JSON.stringify(streamError));
      //             return {
      //               message: "Error",
      //               status: "ERROR - Image CDN uploader",
      //             };
      //           }
      //           resolve(streamResult);
      //         }
      //       )
      //       .end(buffer);
      //   });
      //   newPostData.mainImage = uploadResult.secure_url;
      // }

      // // INT IMAGES UPLOAD
      // for await (const img of intImages) {
      //   const arrayBuffer = await img.arrayBuffer();
      //   const buffer = new Uint8Array(arrayBuffer);

      //   const uploadResult = await new Promise((resolve, reject) => {
      //     cloudinary.uploader
      //       .upload_stream(
      //         { folder: userId },
      //         function (streamError, streamResult) {
      //           if (streamError) {
      //             reject(JSON.stringify(streamError));
      //             return {
      //               message: "Error",
      //               status: "ERROR - Image CDN uploader",
      //             };
      //           }
      //           return resolve(streamResult);
      //         }
      //       )
      //       .end(buffer);
      //   });

      //   console.log(uploadResult);
      //   newPostData.intImages.push(uploadResult.secure_url);
      // }

      // // EXT IMAGES UPLOAD
      // for await (const img of extImages) {
      //   const arrayBuffer = await img.arrayBuffer();
      //   const buffer = new Uint8Array(arrayBuffer);

      //   const uploadResult = await new Promise((resolve, reject) => {
      //     cloudinary.uploader
      //       .upload_stream(
      //         { folder: userId },
      //         function (streamError, streamResult) {
      //           if (streamError) {
      //             reject(JSON.stringify(streamError));
      //             return {
      //               message: "Error",
      //               status: "ERROR - Image CDN uploader",
      //             };
      //           }
      //           return resolve(streamResult);
      //         }
      //       )
      //       .end(buffer);
      //   });
      //   newPostData.extImages.push(uploadResult.secure_url);
      // }
      console.log("Process data");
      // 2/2 UPLOAD INFO TO DATABASE

      const dbResponse = await prismadb.carpost.create({
        data: {
          ...newPostData,
          expiresAt: currentDate,
          title: `${newPostData.year} ${newPostData.brand} ${newPostData.model} `,
          seller: { connect: { id: userId } },
        },
      });

      if (dbResponse) {
        console.log("Success", dbResponse);
        return { message: "Success", status: "SUCCESS - Uploaded to database" };
      }
      return {
        message: "Error",
        status: "ERROR - Could not upload to Database",
      };
    }

    return { message: "Error", status: "ERROR - No images" };
  } catch (err) {
    console.log(err);
    return { message: "Error", status: `ERROR - ${err}` };
  }
};
