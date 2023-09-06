import React from "react";

import "./Newsletter.css";

const Newsletter = ({ language }) => {
  return (
    <form className="newsletter">
      <h2>{language.title}</h2>
      <input type="text" placeholder={language.placeholder} />
      <button className="button-empty">{language.button}</button>
    </form>
  );
};

export default Newsletter;
