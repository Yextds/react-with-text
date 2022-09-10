import * as React from "react";
// import Cta from "./Cta";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { pathToRegexp, compile } from "path-to-regexp";
import logo1 from "../images/logo1.png";
import appStore from "../images/appstore.png";
import googlePlay from "../images/googleplay.png";

type Link = {
  label: string;
  url: string;
};

const generateLanguage = (locale: string, location: Location) => {
  const ROUTE = "/:locale/:path*";
  const definePath = compile(ROUTE);
  let subPaths = null;

  if (location !== null) {
    const routeComponents = pathToRegexp(ROUTE).exec(location.pathname);
    if (routeComponents && routeComponents[2]) {
      subPaths = routeComponents[2].split("/");
    }
  }
  return definePath({
    locale,
    path: subPaths,
  });
};

const links: Link[] = [
  {
    label: "ORDER NOW",
    url: "/",
  },
  {
    label: "ORDER FOOD",
    url: "/",
  },
  {
    label: "ABOUT",
    url: "/about",
  },
  {
    label: "LOCATION",
    url: "/turtlehead-tacos",
  },
];

const languages = [
  { name: "English", code: "en" },
  { name: "French", code: "fr" },
];

const DetailHeader = () => {
  const { t, i18n } = useTranslation();
  function toggle(lng: any) {
    i18n.changeLanguage(lng);
  }

  const onLanguageChange = (locale: string) => {
    toggle(locale);
    const path = generateLanguage(locale, window.location);
    localStorage.setItem("language", locale);
    // console.log(path, "path");
    window.history.pushState({}, "", path);
  };

  const linkDoms = links.map((link) => (
    <div key={link.label}>
      <a href={link.url} target="_blank" rel="noreferrer">
        {link.label}
      </a>
    </div>
  ));
  function changeLang(lng: string) {
    i18n.changeLanguage(lng);
  }

  useEffect(() => {
    let lang: any = localStorage.getItem("language");
    console.log(lang, "language");
    changeLang(lang);
    // const path = generateLanguage2("en", window.location);
    // window.history.pushState({}, "", path);
    // console.log("working");
    // localStorage.setItem("language", "en");
  }, []);
  return (
    <>
      {
        <div className="site-header">
          <div className="header-top">
            <div className="container flex flex-row justify-between items-center">
              <div className="logo">
                <a href="#">
                  <img src={logo1} alt="Favorite Fried Chicken" />
                </a>
              </div>
              <a href="#" className="store-locator-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21.23"
                  height="30"
                  viewBox="0 0 21.23 30"
                >
                  <g transform="translate(0 0)">
                    <path
                      d="M6.789,23.576c1.079,1.719,2.246,3.8,3.4,5.825.427.747.813.859,1.326-.027,1.113-1.931,2.207-3.931,3.359-5.8,3.5-5.661,9.223-11.181,4.67-18.8C15.5-1.987,4.5-1.265,1.216,5.034c-3.769,7.219,2.117,13.039,5.574,18.542Z"
                      fill="#d61a0c"
                      fill-rule="evenodd"
                    />
                    <path
                      d="M10.61,6.247a4.116,4.116,0,1,1-4.116,4.116A4.117,4.117,0,0,1,10.61,6.247Z"
                      fill="#a60d0d"
                      fill-rule="evenodd"
                    />
                  </g>
                </svg>
              </a>
              <button type="button" className="menu-btn" id="menu-btn">
                <span></span>
              </button>
              <div className="app-link">
                <a href="#" target="_blank">
                  <img src={appStore} alt="App Store" />
                </a>
                <a href="#" target="_blank">
                  <img src={googlePlay} alt="Google Play" />
                </a>
              </div>
            </div>
          </div>
          <nav className="navigation">
            <div className="container flex flex-row justify-between">
              <ul id="main-nav" className="main-nav">
                {linkDoms}
                {/* <li className="group relative">
                  <a href="#">Order Now</a>
                  <ul className="submenu">
                    <li>
                      <a href="#">Order Favorite</a>
                    </li>
                    <li>
                      <a href="#">Find Us Here Too</a>
                    </li>
                    <li>
                      <a href="#">Download Our App</a>
                    </li>
                  </ul>
                </li>
                <li className="group relative">
                  <a href="#">Order Food</a>
                  <ul className="submenu">
                    <li>
                      <a href="#">View Menu</a>
                    </li>
                    <li>
                      <a href="#">Allergens</a>
                    </li>
                  </ul>
                </li>
                <li className="group relative">
                  <a href="#">About</a>
                  <ul className="submenu">
                    <li>
                      <a href="#">Our Story</a>
                    </li>
                    <li>
                      <a href="#">Customer FAQS</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                  </ul>
                </li>
                <li className="group relative">
                  <a href="#">We Franchise</a>
                  <ul className="submenu">
                    <li>
                      <a href="#">Join Us</a>
                    </li>
                    <li>
                      <a href="#">Franchise FAQs</a>
                    </li>
                  </ul>
                </li> */}
              </ul>
              <ul className="social-links">
                {languages.map((lng) => (
                  <li key={lng.code}>
                    <button
                      onClick={() => onLanguageChange(lng.code)}
                      style={{
                        background:
                          i18n.resolvedLanguage === lng.code
                            ? "#fff"
                            : "transparent",
                        color:
                          i18n.resolvedLanguage === lng.code
                            ? "#10106a"
                            : "#fff",
                        padding: "10px",
                      }}
                    >
                      {lng.name}
                    </button>
                  </li>
                ))}

                <li>
                  <a href="{{global.facebook_url}}" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="20"
                      viewBox="0 0 10 20"
                    >
                      <path
                        d="M14,6.875H10.25v-2.5a1.25,1.25,0,0,1,1.25-1.25h1.25V0h-2.5A3.75,3.75,0,0,0,6.5,3.75V6.875H4V10H6.5V20h3.75V10h2.5Z"
                        transform="translate(-4)"
                        fill="#fff"
                        fill-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="{{global.twitter_url}}" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="19.507"
                      viewBox="0 0 24 19.507"
                    >
                      <path
                        d="M23.953,4.57a10,10,0,0,1-2.825.775,4.958,4.958,0,0,0,2.163-2.723,10.163,10.163,0,0,1-3.127,1.184A4.92,4.92,0,0,0,11.78,8.288,13.938,13.938,0,0,1,1.64,3.162,4.822,4.822,0,0,0,.974,5.637a4.921,4.921,0,0,0,2.188,4.1A4.9,4.9,0,0,1,.934,9.117v.06A4.923,4.923,0,0,0,4.88,14a5,5,0,0,1-2.212.085,4.936,4.936,0,0,0,4.6,3.417,9.867,9.867,0,0,1-6.1,2.1A10.444,10.444,0,0,1,0,19.544a14,14,0,0,0,7.557,2.209,13.9,13.9,0,0,0,14-13.985c0-.21,0-.42-.015-.63A9.935,9.935,0,0,0,24,4.59Z"
                        transform="translate(0 -2.246)"
                        fill="#fff"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="{{global.instagram_url}}" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                    >
                      <path
                        d="M22.962,10.98H20.7a7.986,7.986,0,1,1-15.448,0H2.994V21.962a1,1,0,0,0,1,1H21.962a1,1,0,0,0,1-1Zm0-6.988a1,1,0,0,0-1-1H18.968a1,1,0,0,0-1,1v3a1,1,0,0,0,1,1h2.994a1,1,0,0,0,1-1ZM12.978,7.986a4.992,4.992,0,1,0,4.992,4.991,4.991,4.991,0,0,0-4.992-4.991m9.984,17.97H2.994a3,3,0,0,1-2.994-3V2.994A2.994,2.994,0,0,1,2.994,0H22.962a2.994,2.994,0,0,1,2.994,2.994V22.959a3,3,0,0,1-2.994,3"
                        fill="#fff"
                        fill-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      }
    </>
  );
};

export default DetailHeader;
