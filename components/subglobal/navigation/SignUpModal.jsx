"use client";

import React, { useState } from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import axios from "axios";

import close from "@/assets/global/close.png";
import eye from "@/assets/global/eye.png";

import "./SignUpModal.css";

const SignUpModal = ({ toggleSignModal, isSignModalOpen, language }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [isSignIn, setIsSignIn] = useState(true);
  const [activeLabel, setActiveLabel] = useState({
    username: false,
    email: false,
    password: false,
    cpassword: false,
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState({
    vpassword: false,
    vcpassword: false,
  });

  const toggleSignIn = () => {
    setIsSignIn((prev) => !prev);
  };
  const toggleVisiblePassword = (labelName) => {
    setIsPasswordVisible((prev) => ({
      ...prev,
      [labelName]: !prev[labelName],
    }));
  };

  const handleActiveLabel = (labelName) => {
    setActiveLabel({
      username: false,
      email: false,
      password: false,
      cpassword: false,
      [labelName]: true,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignIn) {
      // User want to sign in
      try {
        const res = await signIn("credentials", {
          email,
          password,
          redirect: false,
          callbackUrl: "/serverpage",
        });

        if (res.error) {
          console.log(res.error);
        } else {
          console.log(res);
        }
      } catch (err) {
        console.log(err);
      }
    } else if (!isSignIn) {
      // User want to sign up
      try {
        const res = await axios.post(`/api/register`, {
          email,
          name: username,
          password,
        });
        if (res.data.id) {
          console.log(res);
        } else {
          console.log("Fetch didn't worked", res);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className={`signup-modal ${isSignModalOpen ? "open" : "close"}`}>
      <div className="modal">
        <Image
          src={close}
          alt="close"
          width={25}
          className="close-btn"
          onClick={() => toggleSignModal()}
        />
        <h3>{isSignIn ? language.signin.title : language.signup.title}</h3>
        <p>
          {isSignIn
            ? language.signin.changemodal1
            : language.signup.changemodal1}
          <span onClick={toggleSignIn}>
            {isSignIn
              ? language.signin.changemodal2
              : language.signup.changemodal2}
          </span>
        </p>
        <form onSubmit={handleSubmit}>
          {isSignIn ? (
            ""
          ) : (
            <div>
              <label
                htmlFor="username"
                className={
                  activeLabel.username || username ? "active-label" : ""
                }
              >
                {language.match.username}
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onFocus={() => handleActiveLabel("username")}
              />
            </div>
          )}

          <div>
            <label
              htmlFor="email"
              className={activeLabel.email || email ? "active-label" : ""}
            >
              {language.match.email}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => handleActiveLabel("email")}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className={activeLabel.password || password ? "active-label" : ""}
            >
              {language.match.password}
            </label>
            <input
              type={isPasswordVisible.vpassword ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => handleActiveLabel("password")}
            />
            <Image
              src={eye}
              alt="eye"
              width={25}
              className="eye"
              onClick={() => toggleVisiblePassword("vpassword")}
            />
          </div>
          {isSignIn ? (
            ""
          ) : (
            <div>
              <label
                htmlFor="cpassword"
                className={
                  activeLabel.cpassword || cpassword ? "active-label" : ""
                }
              >
                {language.match.cpassword}
              </label>
              <input
                type={isPasswordVisible.vcpassword ? "text" : "password"}
                id="cpassword"
                name="cpassword"
                value={cpassword}
                onChange={(e) => setCpassword(e.target.value)}
                onFocus={() => handleActiveLabel("cpassword")}
              />
              <Image
                src={eye}
                alt="eye"
                width={25}
                className="eye"
                onClick={() => toggleVisiblePassword("vcpassword")}
              />
            </div>
          )}

          <button className="button-green">
            {isSignIn ? language.signin.button : language.signup.button}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpModal;
