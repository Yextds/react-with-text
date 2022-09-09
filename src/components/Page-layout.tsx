import * as React from "react";
import Site from "../types/Site";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  _site: Site;
  children?: React.ReactNode;
};

const PageLayout = ({ _site, children }: Props) => {
  return (
    <div className="min-h-screen">
      <Header _site={_site} />
      {children}
      <Footer _site={_site}></Footer>
    </div>
  );
};

export default PageLayout;
