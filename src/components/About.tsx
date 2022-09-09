import * as React from "react";
import Slider from "../components/Slider";

type props = {
  prop: any;
};

const About = (img: props) => {
  return (
    <div className="about-sec">
      <div className="container flex flex-wrap">
        <div className="w-full lg:w-2/5">
          {/* <img className="w-full" src="images/store-img.jpg" alt="Store"/> */}
          <Slider prop={img.prop} />
        </div>
        <div className="w-full lg:w-3/5 about-content">
          <h3>Favorite Chicken & Ribs</h3>
          <a href="https://developers.google.com/search/docs/advanced/crawling/301-redirects">
            yutuytu
          </a>
          <p>
            OUR FOOD Great taste and great value are not enough. You want to be
            confident that what you eat yourself and feed to your family is safe
            and wholesome. Our Traditional Chicken Pieces are prepared and
            cooked in store using top quality fresh chicken. Our Chicken
            Burgers, Crispy Fillet Strips and Chicken Poppas are not minced or
            processed, just tender chicken breast coated and cooked the way only
            Favorite can. Our Fries are pure potato, blanched in sunflower oil
            and all Favorite cooking oils are free from harmful trans\-fats.
          </p>
          <div className="available-option">
            <h5>Available Here Too!</h5>
            <ul>
              <li>
                <img src="images/justeats.svg" alt="" />
              </li>
              <li>
                <img src="images/uber-eats.svg" alt="" />
              </li>
              <li>
                <img src="images/deliveroo.svg" alt="" />
              </li>
            </ul>
          </div>
          <div className="cta_btn">
            <a href="#" className="button">
              Primary CTA
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
