import * as React from "react";
import { useState, useEffect } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
type props = {
  prop: any;
};

const Slider = (image: props) => {
  const [photoGallery, setPhotoGallery] = useState([]);

  useEffect(() => {
    setPhotoGallery(image.prop);
  });
  return (
    <div className="slide-container">
      <Slide>
        {photoGallery &&
          photoGallery.map((i: any) => {
            return (
              <>
                <div className="each-slide">
                  <div>
                    <img src={i.image.url}></img>
                  </div>
                </div>
              </>
            );
          })}
      </Slide>
    </div>
  );
};

export default Slider;
