"use client";

import axios from "axios";
import React, { useState } from "react";

const Settings = ({ language, accInfo }) => {
  const [weeklyEmail, setWeeklyEmail] = useState(accInfo.weeklyEmail);
  const [outbidEmail, setOutbidEmail] = useState(accInfo.outbidEmail);
  const [endNotify, setEndNotify] = useState(accInfo.endNotify);
  const [newBidsNotify, setNewBidsNotify] = useState(accInfo.newBidsNotify);
  const [resultsNotify, setResultsNotify] = useState(accInfo.resultsNotify);

  const handleSettings = async (field, value) => {
    try {
      const res = await axios.patch("/en/api/settings", { field, value });
      if (res.data.message === "Success") {
        if (field === "weeklyEmail") setWeeklyEmail((prev) => !prev);
        if (field === "outbidEmail") setOutbidEmail((prev) => !prev);
        if (field === "endNotify") setEndNotify((prev) => !prev);
        if (field === "newBidsNotify") setNewBidsNotify((prev) => !prev);
        if (field === "resultsNotify") setResultsNotify((prev) => !prev);
      } else if (res.data.error) {
        console.log(res.data.error);
      }
    } catch (err) {
      console.log("Could not update settings!", err);
    }
  };

  return (
    <section className="settings">
      <ul>
        <h2>{language.email.title}</h2>
        <li>
          <span>{language.email.line1}</span>
          <button
            className={weeklyEmail ? "button-toggle-on" : "button-toggle-off"}
            onClick={() => handleSettings("weeklyEmail", !weeklyEmail)}
          >
            {weeklyEmail ? "On" : "Off"} <span className="switch"></span>
          </button>
        </li>
        <li>
          <span>{language.email.line2}</span>
          <button
            className={outbidEmail ? "button-toggle-on" : "button-toggle-off"}
            onClick={() => handleSettings("outbidEmail", !outbidEmail)}
          >
            {outbidEmail ? "On" : "Off"} <span className="switch"></span>
          </button>
        </li>
      </ul>
      <ul>
        <h2>{language.notifications.title}</h2>
        <li>
          <span>{language.notifications.line1}</span>
          <button
            className={endNotify ? "button-toggle-on" : "button-toggle-off"}
            onClick={() => handleSettings("endNotify", !endNotify)}
          >
            {endNotify ? "On" : "Off"} <span className="switch"></span>
          </button>
        </li>
        <li>
          <span>{language.notifications.line2}</span>
          <button
            className={newBidsNotify ? "button-toggle-on" : "button-toggle-off"}
            onClick={() => handleSettings("newBidsNotify", !newBidsNotify)}
          >
            {newBidsNotify ? "On" : "Off"} <span className="switch"></span>
          </button>
        </li>
        <li>
          <span>{language.notifications.line3}</span>
          <button
            className={resultsNotify ? "button-toggle-on" : "button-toggle-off"}
            onClick={() => handleSettings("resultsNotify", !resultsNotify)}
          >
            {resultsNotify ? "On" : "Off"} <span className="switch"></span>
          </button>
        </li>
      </ul>
    </section>
  );
};

export default Settings;
