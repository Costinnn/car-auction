import Image from "next/image";
import React from "react";

import profileImg from "@/assets/global/profile.png";

const Profile = ({ language }) => {
  return (
    <section className="profile">
      <Image src={profileImg} alt="profile" width={100} />
      <div>
        <span className="name">Username</span>
        <span className="date">{language.date}</span>
        <p className="bio">Here is a little bio</p>
      </div>
      <button className="button-empty">{language.button}</button>
    </section>
  );
};

export default Profile;
