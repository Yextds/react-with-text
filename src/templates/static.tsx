import * as React from "react";
import "../index.css";
import { useTranslation } from "react-i18next";
import { withTranslation } from "react-i18next";
import "../i18n";
import {
  Template,
  GetPath,
  TransformProps,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import { ExternalImage } from "../types/ExternalImage";
import DetailHeader from "../components/DetailHeader";
import Dfooter from "../components/Dfooter";
import Locator from "../components/Locator";

export const config: TemplateConfig = {
  name: "turtlehead-tacos",
};

type ExternalImageData = TemplateProps & { externalImage: ExternalImage };

export const getPath: GetPath<ExternalImageData> = () => {
  return `index.html`;
};

type ExternalImageRenderData = TemplateRenderProps & {
  externalImage: ExternalImage;
};

const Static: Template<ExternalImageRenderData> = ({
  relativePrefixToRoot,
  path,
  document,
  externalImage,
}) => {
  const { _site } = document;

  return (
    <>
      <DetailHeader />
      <div className="centered-container">
        <div className="bg-red-900 text-5xl font-bold text-white p-10 flex items-center justify-center flex-col gap-x-14 gap-y-10 md:flex-row">
          <Locator />
        </div>
      </div>
      <Dfooter />
    </>
  );
};

export default Static;
