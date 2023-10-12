"use client";

import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

import Notification from "./Notification";

import "./NotifModal.css";

const NotifModal = ({
  toggleNotifModal,
  langParam,
  isNotifModalOpen,
  notifications,
}) => {
  const params = useParams();

  const updateNotif = async () => {
    try {
      const res = await axios.post("/en/api/notifications");
      // console.log("NotifModal", res);
    } catch (err) {
      console.log("NotifModal", err);
    }
  };

  useEffect(() => {
    updateNotif();
  }, []);

  return (
    <div className={`notif-modal ${isNotifModalOpen ? "open" : "close"} `}>
      {notifications &&
        notifications.map((notif) => (
          <Notification data={notif} key={notif.id} />
        ))}
    </div>
  );
};

export default NotifModal;
