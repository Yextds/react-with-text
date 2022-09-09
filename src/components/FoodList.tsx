import * as React from "react";
import { FC, useState } from "react";
import "../../src/main.css";
import "../index.css";
type props = {
  prop: any;
};

const FoodList: FC<props> = (img: props) => {
  const [photoGallery, setPhotoGallery] = useState([]);
  React.useEffect(() => {
    setPhotoGallery(img.prop);
  });
  return (
    <div className="food-list">
      <div className="container">
        <div className="w-full text-center">
          <h3>Food For Every Occasion</h3>
        </div>
        <div id="splide" className="splide -mx-[15px]">
          <div className="splide__track">
            <ul className="splide__list">
              {photoGallery &&
                photoGallery.map((i: any) => {
                  return (
                    <>
                      <li className="splide__slide">
                        <div className="slide-img">
                          <img src={i.image.url} className="block" alt="..." />
                          <h4>Burger Duo</h4>
                        </div>
                      </li>
                    </>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FoodList;
