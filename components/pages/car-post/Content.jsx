import React from "react";
import Image from "next/image";

import person from "@/assets/global/person.jpg";

import "./Content.css";

const Content = ({ language, content }) => {
  return (
    <div className="content">
      <dl>
        <dt>{language.brand}</dt>
        <dd>{content.brand}</dd>
        <dt>{language.model}</dt>
        <dd>{content.model}</dd>
        <dt>{language.year}</dt>
        <dd>{content.year}</dd>
        <dt>{language.mileage}</dt>
        <dd>
          {content.mileage} <span>km</span>
        </dd>
        <dt>{language.vin}</dt>
        <dd>{content.vin}</dd>
        <dt>{language.engine.title}</dt>
        <dd>
          {content.engineCapacity}L - {content.engineConfiguration}
          {content.engineCylinders}
        </dd>
        <dt>{language.drivetrain.title}</dt>
        <dd>{content.drivetrain}</dd>
        <dt>{language.transmission.title}</dt>
        <dd>{content.transmission}</dd>
        <dt>{language.bodystyle.title}</dt>
        <dd>{content.category}</dd>
        <dt>{language.ecolor}</dt>
        <dd>{content.eColor}</dd>
        <dt>{language.icolor}</dt>
        <dd>{content.iColor}</dd>
        <dt>{language.location}</dt>
        <dd>{content.location}</dd>
        <dt>{language.seller}</dt>
        <dd>{content.name}</dd>
      </dl>

      <div className="description">
        <div>
          <Image src={person} width={40} height={40} alt="person" />
          <span>{content.name}'s Take</span>
        </div>
        <p>{content.description}</p>
      </div>
      {content.modifications.length > 0 ? (
        <div className="modifications">
          <h2>{language.description}</h2>
          <ul>
            {content.modifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}

      {content.flaws.length > 0 ? (
        <div className="flaws">
          <h2>{language.flaws.title}</h2>
          <ul>
            {content.flaws.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Content;
