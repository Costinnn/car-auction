import React from "react";
import AddToFavorite from "@/client-components/global/AddToFavorite";

import "./Heading.css";

const Heading = ({
  language,
  title,
  gears,
  transmission,
  engineCapacity,
  engineConfiguration,
  engineCylinders,
  userFavorites,
  sellerId,
  postId,
  userId,
}) => {
  return (
    <div className="heading">
      <div className="row1">
        <h1 className="title">{title}</h1>
        {userId && (
          <AddToFavorite
            width={23}
            height={23}
            userId={userId}
            userFavorites={userFavorites}
            sellerId={sellerId}
            postId={postId}
          />
        )}
      </div>
      <span className="description">{`${gears}-${language.speed} ${transmission} ${engineCapacity}L ${language.engine}
          ${engineConfiguration}${engineCylinders}`}</span>
    </div>
  );
};

export default Heading;
