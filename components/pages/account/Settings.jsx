"use client";

import axios from "axios";
import React, { useState } from "react";

const Settings = ({ language, accInfo }) => {
  const [weeklyEmail, setWeeklyEmail] = useState(accInfo.weeklyEmail);
  const [outbidEmail, setOutbidEmail] = useState(accInfo.outbidEmail);

  const [newListingsNotify, setNewListingsNotify] = useState(accInfo.newListingsNotify);
  const [outbidNotify, setOutbidNotify] = useState(accInfo.outbidNotify);
  const [endingNotify, setEndingNotify] = useState(accInfo.endingNotify);
  const [favResultsNotify, setFavResultsNotify] = useState(
    accInfo.favResultsNotify
  );
  const [bidResultsNotify, setBidResultsNotify] = useState(
    accInfo.bidResultsNotify
  );

  const handleSettings = async (field, value) => {
    try {
      const res = await axios.patch("/en/api/settings", { field, value });
      if (res.data.message === "Success") {
        if (field === "weeklyEmail") setWeeklyEmail((prev) => !prev);
        if (field === "outbidEmail") setOutbidEmail((prev) => !prev);
        if (field === "newListingsNotify") setNewListingsNotify((prev) => !prev);
        if (field === "outbidNotify") setOutbidNotify((prev) => !prev);
        if (field === "endingNotify") setEndingNotify((prev) => !prev);
        if (field === "favResultsNotify") setFavResultsNotify((prev) => !prev);
        if (field === "bidResultsNotify") setBidResultsNotify((prev) => !prev);
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
            className={newListingsNotify ? "button-toggle-on" : "button-toggle-off"}
            onClick={() => handleSettings("newListingsNotify", !newListingsNotify)}
          >
            {newListingsNotify ? "On" : "Off"} <span className="switch"></span>
          </button>
        </li>

        <li>
          <span>{language.notifications.line2}</span>
          <button
            className={outbidNotify ? "button-toggle-on" : "button-toggle-off"}
            onClick={() => handleSettings("outbidNotify", !outbidNotify)}
          >
            {outbidNotify ? "On" : "Off"} <span className="switch"></span>
          </button>
        </li>

        <li>
          <span>{language.notifications.line3}</span>
          <button
            className={endingNotify ? "button-toggle-on" : "button-toggle-off"}
            onClick={() => handleSettings("endingNotify", !endingNotify)}
          >
            {endingNotify ? "On" : "Off"} <span className="switch"></span>
          </button>
        </li>

        <li>
          <span>{language.notifications.line4}</span>
          <button
            className={
              favResultsNotify ? "button-toggle-on" : "button-toggle-off"
            }
            onClick={() =>
              handleSettings("favResultsNotify", !favResultsNotify)
            }
          >
            {favResultsNotify ? "On" : "Off"} <span className="switch"></span>
          </button>
        </li>

        <li>
          <span>{language.notifications.line5}</span>
          <button
            className={
              bidResultsNotify ? "button-toggle-on" : "button-toggle-off"
            }
            onClick={() =>
              handleSettings("bidResultsNotify", !bidResultsNotify)
            }
          >
            {bidResultsNotify ? "On" : "Off"} <span className="switch"></span>
          </button>
        </li>
      </ul>
    </section>
  );
};

export default Settings;
