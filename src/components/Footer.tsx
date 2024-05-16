import React from "react";

import "@src/assets/global.css";
import Facebook from "@src/assets/images/social/facebook.svg";
import Instagram from "@src/assets/images/social/instagram.svg";
import Twitter from "@src/assets/images/social/twitter.svg";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-gradient-to-t from-blue-accent-300 via-purple-400 to-purple-500 p-2 pb-10 pt-8">
        <div className="m-2 mb-10 flex flex-col flex-wrap items-start justify-between gap-10 rounded-xl bg-white-accent-1 p-6 text-black shadow-md drop-shadow-md sm:m-10 sm:mb-5 sm:flex-row sm:gap-0 sm:p-8">
          <div className="flex-start flex flex-col">
            <h1 className="open-sans-600 mb-2">Company</h1>
            <ul className="opacity-80">
              <li className="mb-2 duration-300 ease-in-out hover:underline">
                <a href="/about">About</a>
              </li>
              <li className="mb-2 duration-300 ease-in-out hover:underline">
                <a href="/overview">Overview</a>
              </li>
              <li className="mb-2 duration-300 ease-in-out hover:underline">
                <a href="/idea">Idea</a>
              </li>
            </ul>
          </div>
          <div className="">
            <h1 className="open-sans-600 mb-2">Communities</h1>
            <ul className="opacity-80">
              <li className="mb-2 duration-300 ease-in-out hover:underline">
                <a href="/mentor">For Mentor</a>
              </li>
              <li className="mb-2 duration-300 ease-in-out hover:underline">
                <a href="/mentee">For Mentee</a>
              </li>
              <li className="mb-2 duration-300 ease-in-out hover:underline">
                <a href="/tutor">For Tutor</a>
              </li>
              <li className="mb-2 duration-300 ease-in-out hover:underline">
                <a href="/investors">Investors</a>
              </li>
              <li className="mb-2 duration-300 ease-in-out hover:underline">
                <a href="/universities">Universities</a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="open-sans-600 mb-2">Resources</h1>
            <ul className="opacity-80">
              <li className="mb-2 duration-300 ease-in-out hover:underline">
                <a href="/supports">Supports</a>
              </li>
              <li className="mb-2 duration-300 ease-in-out hover:underline">
                <a href="/mobileapps">Mobile App</a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="open-sans-600 mb-2">Useful links</h1>
            <ul className="opacity-80">
              <li className="mb-2 duration-300 ease-in-out hover:underline">
                <a href="/faq">FaQ</a>
              </li>
              <li className="mb-2 duration-300 ease-in-out hover:underline">
                <a href="/announcement">Announcement</a>
              </li>
              <li className="mb-2 duration-300 ease-in-out hover:underline">
                <a href="/promotion">Promotion</a>
              </li>
            </ul>
          </div>
          <div className="mt-10 flex flex-row gap-4 sm:mt-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black p-3 transition ease-linear hover:border-purple-500">
              <a
                href="/instagram"
                target="_blank"
                rel="noreferrer"
                className="w-full cursor-pointer"
              >
                <img
                  src={Instagram}
                  alt="instagram"
                  className="h-full w-full"
                />
              </a>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black p-3 transition ease-linear hover:border-purple-500">
              <a
                href="/twitter"
                target="_blank"
                rel="noreferrer"
                className="w-full cursor-pointer"
              >
                <img src={Twitter} alt="twitter" className="h-full w-full" />
              </a>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black p-3 transition ease-linear hover:border-purple-500">
              <a
                href="/facebook"
                target="_blank"
                rel="noreferrer"
                className="w-full cursor-pointer"
              >
                <img src={Facebook} alt="facebook" className="h-full w-full" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 sm:m-7 sm:mt-10">
          <div className="mt-2 flex flex-col gap-0">
            <h1 className="ml-3 opacity-80">
              © 2024 Meja Belajar | All Rights Reserved{" "}
            </h1>
            <small className="ml-3">Jakarta, Indonesia 11480</small>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
