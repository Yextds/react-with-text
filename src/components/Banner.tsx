import * as React from "react";
import { useTranslation } from "react-i18next";
import { withTranslation } from "react-i18next";
import "../i18n";
export type Address = {
  line1: string;
  city: string;
  region: string;
  postalCode: string;
  countryCode: string;
};
type prop = {
  prop: any;
};

const Banner = (banner: prop) => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="hero">
        <img className="hero-img" src={`${banner.prop}`} alt="banner" />
        <div className="container text-center">
          <h1>{t("FAVORITE CHICKEN & RIBS")}</h1>
          <p>
            {t(
              "Favorite is a family business, as are the majority of our franchise stores"
            )}
          </p>
        </div>
      </div>
    </>
  );
};
export default withTranslation()(Banner);
