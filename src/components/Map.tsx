import * as React from "react";
import { useEffect, useState } from "react";

type props = {
  props: any;
};

const Map = (data: props) => {
  return (
    <>
      <div className="box map-info">
        <div className="inner-box">
          <img
            className="w-full h-[300px] md:h-[460px] object-cover object-center"
            alt="Static Google map for {{name}} - {{neighborhood}}"
            width="1920"
            style={{ border: 4, height: "460" }}
            src={`https://maps.googleapis.com/maps/api/staticmap?size=600x400&maptype=roadmap&markers=color:red%7C${data.props.latitude},${data.props.longitude}&key=AIzaSyCbRR26VkSZBKO1YJfG9ZYRSzcyShBO9-A`}
          />
        </div>
      </div>
    </>
  );
};
export default Map;
