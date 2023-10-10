import React from "react";

const loading = () => {
  return (
    <main className="loading-listings center-align">
      <div className="navl">
        <div className="boxl loading-bg"></div>
        <div className="boxl loading-bg"></div>
        <div className="boxl loading-bg"></div>
      </div>
      <div className="listingsl">
        <div className="cpl">
          <div className="imgl loading-bg"></div>
          <div className="titl loading-bg"></div>
          <div className="descl loading-bg"></div>
          <div className="locl loading-bg"></div>
        </div>

        <div className="cpl">
          <div className="imgl loading-bg"></div>
          <div className="titl loading-bg"></div>
          <div className="descl loading-bg"></div>
          <div className="locl loading-bg"></div>
        </div>

        <div className="cpl">
          <div className="imgl loading-bg"></div>
          <div className="titl loading-bg"></div>
          <div className="descl loading-bg"></div>
          <div className="locl loading-bg"></div>
        </div>
      </div>
    </main>
  );
};

export default loading;
