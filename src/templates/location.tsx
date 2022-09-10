import * as React from "react";
import { useEffect } from "react";
import StaticMap from "../components/Static-map";
import Banner from "../components/Banner";
import HeaderDetail from "../components/DetailHeader";
import Breadcrumb from "../components/Breadcrumb";
import LocationInformation from "../components/LocationInformation";
import About from "../components/About";
import FoodList from "../components/FoodList";
import NearBy from "../components/NearBy";
import Dfooter from "../components/Dfooter";
import StoreInfo from "../components/SotreInfo";
import LocationTimming from "../components/LocationTimming";
import Map from "../components/Map";
import PhotoGallery from "../components/photo-gallery";
import { useTranslation } from "react-i18next";
import { withTranslation } from "react-i18next";
import "../i18n";
import { nearByLocation } from "../types/nearByLocation";
import "../index.css";
import "../main.css";

// const location = useLocation();

import {
  Template,
  GetPath,
  GetRedirects,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
  TransformProps,
} from "@yext/pages";

var arr4: any = [];
var Array: any = {};
/**
 * Required when Knowledge Graph data is used for a template.
 */

export const config: TemplateConfig = {
  stream: {
    $id: "locations",

    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.

    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "address",
      "description",
      "hours",
      "slug",
      "geocodedCoordinate",
      "yextDisplayCoordinate",
      "services",
      "photoGallery",
      "c_webbanner",
      "mainPhone",
    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityTypes: ["location"],
    },

    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en", "fr"],
      primary: false,
    },
  },
};

/**
 * Defines the path that the generated file will live at for production.
 *
 * NOTE: This currently has no impact on the local dev path. Local dev urls currently
 * take on the form: featureName/entityId
 */

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  // return `location/${document.locale}/${document.slug}`;
  return `${document.locale}/${document.id.toString()}`;
};

/**
 * Defines a list of paths which will redirect to the path created by getPath.
 *
 * NOTE: This currently has no impact on the local dev path. Redirects will be setup on
 * a new deploy.
 */

export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
  return [`/en/location5`];
};

/**
 * This allows the user to define a function which will take in their template
 * data and procude a HeadConfig object. When the site is generated, the HeadConfig
 * will be used to generate the inner contents of the HTML document's <head> tag.
 * This can include the title, meta tags, script tags, etc.
 */
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          description: "This site was generated by the Yext SSG",
        },
      },
    ],
  };
};
type ExternalApiData = TemplateProps & { externalApiData: nearByLocation };
export const transformProps: TransformProps<ExternalApiData> = async (
  data: any
) => {
  const url = `https://liveapi-sandbox.yext.com/v2/accounts/me/entities/geosearch?radius=500&location=${data.document.yextDisplayCoordinate.latitude},${data.document.yextDisplayCoordinate.longitude}&filter={}&api_key=b262ae7768eec3bfa53bfca6d48e4000&v=20181201&resolvePlaceholders=true&entityTypes=location`;
  const externalApiData = (await fetch(url).then((res: any) =>
    res.json()
  )) as nearByLocation;
  return { ...data, externalApiData };
};

/**
 * This is the main template. It can have any name as long as it's the default export.
 * The props passed in here are the direct stream document defined by `config`.
 *
 * There are a bunch of custom components being used from the src/components folder. These are
 * an example of how you could create your own. You can set up your folder structure for custom
 * components any way you'd like as long as it lives in the src folder (though you should not put
 * them in the src/templates folder as this is specific for true template files).
 */

type ExternalApiRenderData = TemplateRenderProps & {
  externalApiData: nearByLocation;
};

const Location: Template<ExternalApiRenderData> = ({
  relativePrefixToRoot,
  path,
  externalApiData,
  document,
}) => {
  const {
    _site,
    name,
    meta,
    photoGallery,
    address,
    openTime,
    hours,
    mainPhone,
    geocodedCoordinate,
    yextDisplayCoordinate,
    services,
    c_webbanner,
    slug,
  } = document;
  const [img, setImg] = React.useState("");
  const [banner, setBanner] = React.useState("");
  const [closingTime, setClosingTime] = React.useState("");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    let dayName = getDayName(dayIndex);
    if (hours) {
      getRestoTimming(dayName);
    } else {
      console.log("hours not exist");
    }
    setBanner(c_webbanner.banner.url);
    setImg(photoGallery);
  }, []);

  var dayIndex = new Date().getDay();
  const getDayName = (dayIndex: any) => {
    const days = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];
    return days[dayIndex];
  };

  function getRestoTimming(cday: any) {
    let day = hours != undefined && hours ? hours : [];

    let indexOfCurrentDay = new Date().getDay() - 1;

    let arr =
      day &&
      Object.keys(day).map((key) => {
        return { [key]: day[key] };
      });

    let arr2 = [];
    for (let i = indexOfCurrentDay; i < arr.length; i++) {
      arr2.push(arr[i]);
    }

    for (let i = 0; i < indexOfCurrentDay; i++) {
      arr2.push(arr[i]);
    }
    let arr3: any = [];
    arr3 = arr2;
    var index: any;

    let days = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];
    let DAY: any = [];
    days.map((i: any) => {
      arr3.map((j: any) => {
        if (i === Object.keys(j)[0]) {
          DAY = [...DAY, j];
        }
      });
    });

    DAY.map((i: any) => {
      if (Object.keys(i)[0] === cday) {
        index = DAY.indexOf(i);
      }
    });

    for (let i = index; i < DAY.length; i++) {
      arr4.push(DAY[i]);
    }

    for (let i = 0; i < index; i++) {
      arr4.push(DAY[i]);
    }
    let time: any = Object.values(arr4[0])[0];

    setClosingTime(time.openIntervals[0].end);
    // Array.push({
    //   photoGallery: photoGallery,
    //   address: address,
    //   mainPhone: mainPhone,
    //   name: name,
    //   _site: _site,
    //   geocodedCoordinate: geocodedCoordinate,
    //   services: services,
    //   hours: arr4,
    //   closeTime: time.openIntervals[0].end,
    // });
  }

  return (
    <>
      {/* <AppInformation/> */}
      <HeaderDetail />
      <Breadcrumb />
      <Banner prop={banner} />
      <div className="location-information">
        <div className="container">
          <div className="w-full text-center pb-3 md:pb-5">
            <h2 className="store-time-status">
              <strong>{t("Open now")}</strong> - {t("closes at")} {closingTime}
            </h2>
          </div>
          <div className="boxes">
            <StoreInfo
              prop={
                (Array = {
                  address: address,
                  mainPhone: mainPhone,
                  name: name,
                  _site: _site,
                  geocodedCoordinate: yextDisplayCoordinate,
                })
              }
            />
            <LocationTimming props={arr4} />
            {/* <Map props={geocodedCoordinate} /> */}
            <div className="box map-info">
              <div className="inner-box">
                <StaticMap
                  latitude={yextDisplayCoordinate.latitude}
                  longitude={yextDisplayCoordinate.longitude}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <LocationInformation props={Array} /> */}
      <About prop={img} />
      {/* <FoodList prop={img} /> */}
      {/* <PhotoGallery photoGallery={photoGallery} /> */}
      <NearBy prop={externalApiData} />
      <Dfooter />
      {/*
       */}
    </>
  );
};

export default withTranslation()(Location);
