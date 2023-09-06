import React from "react";

const Settings = ({ language }) => {
  return (
    <section className="settings">
      <ul>
        <h2>{language.email.title}</h2>
        <li>
          <span>{language.email.line1}</span>
          <button className="button-toggle-on">
            On <span className="switch"></span>
          </button>
        </li>
        <li>
          <span>{language.email.line2}</span>
          <button className="button-toggle-off">
            Off <span className="switch"></span>
          </button>
        </li>
      </ul>
      <ul>
        <h2>{language.notifications.title}</h2>
        <li>
          <span>{language.notifications.line1}</span>
          <button className="button-toggle-on">
            On <span className="switch"></span>
          </button>
        </li>
        <li>
          <span>{language.notifications.line2}</span>
          <button className="button-toggle-off">
            Off <span className="switch"></span>
          </button>
        </li>
        <li>
          <span>{language.notifications.line3}</span>
          <button className="button-toggle-off">
            Off <span className="switch"></span>
          </button>
        </li>
      </ul>
    </section>
  );
};

export default Settings;
