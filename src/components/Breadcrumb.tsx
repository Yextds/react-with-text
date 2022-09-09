import * as React from "react";
import { FC, useState } from "react";
type props = {};
const Breadcrumb: FC<props> = () => {
  return (
    <div className="breadcrumb">
      <div className="container">
        <ul>
          <li>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="14.769"
                viewBox="0 0 16 14.769"
              >
                <path
                  d="M9.529,19.269V14.346h3.692v4.923h3.754V11.885h2.4l-8-7.385-8,7.385h2.4v7.385Z"
                  transform="translate(-3.375 -4.5)"
                  fill="#10106a"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="#">Store Locator</a>
          </li>
          <li>
            <a href="#">United Kingdom</a>
          </li>
          <li>
            <a href="#">London</a>
          </li>
          <li>Favorite Chicken & Ribs</li>
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumb;
