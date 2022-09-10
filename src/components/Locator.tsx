import * as React from "react";
import { useEffect, useState } from "react";
const Locator = () => {
  return (
    <>
      <section className="testimonial-bg">
        <div className="full-width-locator inline-block w-full px-2.5 2xl:px-10 py-5 lg:py-[50px]">
          <div className="search-box float-left w-full lg:w-1/2 lg:pr-[30px] xl:pr-[72px] relative">
            <div className="w-full lg:w-[calc(100%_-_100px)] float-left relative">
              <h1 className="text-[15px] font-normal leading-6 m-0 mb-1">
                Find A Store
              </h1>
              <div className="directions"></div>
              <div className="input-group flex items-stretch lg:pr-0">
                {/* <Autosuggestion  searchQuery={searchQuery} /> */}
                <input
                  className=" border border-[#999]  search_key flex-[1] !pr-11"
                  placeholder="Eg. EC2A 1RS"
                  aria-label="Eg. EC2A 1RS"
                  autoComplete="off"
                />
                <button
                  className="button button--small button--secondary"
                  aria-label="Search bar icon"
                  id="search-location-button"
                  type="submit"
                  data-yext-analytics="searchStore"
                >
                  Search
                </button>
              </div>
              <div className="error-text mt-2 leading-[20px] text-red"></div>
              <div className="currentLocation text-right my-2 float-right">
                <button
                  data-yext-analytics="useMyLocation"
                  id="useLocation"
                  type="button"
                  className=""
                >
                  Use my location{" "}
                  <span className="inline-block align-middle rounded-full w-8 lg:w-10 h-8 lg:h-10 bg-locationIcon bg-no-repeat bg-center bg-[length:16px] lg:bg-[length:20px] bg-lightgrey"></span>
                </button>
              </div>
              <div className="nearest-store-locations mb-5"></div>
              <div className="selectedFilterDiv"></div>
            </div>
          </div>
          <p>Locator page</p>
          <div className="search-listing float-left w-full lg:w-1/2 lg:pr-[30px] xl:pr-[72px]">
            <div className="panel min-h-[150px] lg:min-h-[260px] lg:w-[calc(100%_-_100px)]">
              <div className="spinner">
                <div className="sk-wave">
                  <div className="sk-rect sk-rect1"></div>
                  <div className="sk-rect sk-rect2"></div>
                  <div className="sk-rect sk-rect3"></div>
                  <div className="sk-rect sk-rect4"></div>
                  <div className="sk-rect sk-rect5"></div>
                </div>
              </div>
              <div className="result-list">
                <div className="result-list-inner">
                  <p>locator page</p>
                </div>

                {/* <div className="viewMoreBtnDiv text-center pt-5 md:pt-0">
                  <button
                    id="viewMoreBtn"
                    className="button button--small button--secondary"
                  >
                    {" "}
                    View More{" "}
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Locator;
