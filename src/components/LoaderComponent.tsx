import React from "react";
import Loader from "react-js-loader";
const LoaderComponent = () => {
  return (
    <div className="loader">
      <div className={"row"}>
        <div className={"item"}>
          <div className={"item"}>
            <Loader
              type="spinner-cub"
              bgColor={"black"}
              title={"spinner-cub"}
              color={"#FFFFFF"}
              size={50}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoaderComponent;