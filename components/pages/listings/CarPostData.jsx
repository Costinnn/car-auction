import CarPost from "@/components/global/CarPost";
import React from "react";

const CarPostData = ({ language, lang, data, userId, userFavorites }) => {
  return (
    <div>
      <CarPost
        language={language}
        lang={lang}
        data={data}
        userId={userId}
        userFavorites={userFavorites}
      />
      <div className="bids-display">
        <span>{language.lastbids}:</span>
        <div className="frame">
          <ul>
            {data.bids.length > 0 ? (
              data.bids.map((bid) => (
                <li key={bid.id} className="button-empty">
                  {`$${bid.bidValue}`}
                </li>
              ))
            ) : (
              <li className="button-empty">{language.nobids}</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CarPostData;
