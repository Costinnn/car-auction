import React from "react";

import "./Content.css";

const Content = ({ language }) => {
  return (
    <div className="content">
      <dl>
        <dt>{language.brand}</dt>
        <dd>xxx</dd>
        <dt>{language.model}</dt>
        <dd>xxx</dd>
        <dt>{language.year}</dt>
        <dd>xxx</dd>
        <dt>{language.mileage}</dt>
        <dd>xxx</dd>
        <dt>{language.vin}</dt>
        <dd>xxx</dd>
        <dt>{language.engine.title}</dt>
        <dd>xxx</dd>
        <dt>{language.drivetrain.title}</dt>
        <dd>xxx</dd>
        <dt>{language.transmission.title}</dt>
        <dd>xxx</dd>
        <dt>{language.bodystyle.title}</dt>
        <dd>xxx</dd>
        <dt>{language.ecolor}</dt>
        <dd>xxx</dd>
        <dt>{language.icolor}</dt>
        <dd>xxx</dd>
        <dt>{language.location}</dt>
        <dd>xxx</dd>
        <dt>{language.seller}</dt>
        <dd>xxx</dd>
      </dl>
    </div>
  );
};

export default Content;
