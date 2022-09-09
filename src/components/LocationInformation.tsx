import * as React from "react";
import { FC, useState, useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  MarkerClusterer,
  InfoWindow,
} from "@react-google-maps/api";

type props = {
  props: any;
};
var getCenter: any = { lat: 41.91873, lng: -87.669658 };
const LocationInformation: FC<props> = (data: props) => {
  const [isShow, setIshow] = useState(false);
  const [getData, setGetData] = useState([]);
  const [currentLocationLatLng, setCurrentLocationLatLng] = useState({
    lat: "",
    lng: "",
  });
  const containerStyle = {
    width: "400px",
    height: "400px",
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCbRR26VkSZBKO1YJfG9ZYRSzcyShBO9-A",
  });
  useEffect(() => {
    console.log(data.props, "ppppp");
    console.log(data.props.address, "j;k;");
    getCurrentLocationLatLng();
    setGetData(data.props);
  }, []);
  const getCurrentLocationLatLng = () => {
    navigator?.geolocation.getCurrentPosition(
      ({ coords: { latitude: lat, longitude: lng } }) => {
        const pos = { lat: "", lng: "" };
        // this.setState({ currentLocationLatLng: pos });
        setCurrentLocationLatLng(pos);
      }
    );
  };
  return (
    <div className="location-information">
      <div className="container">
        <div className="w-full text-center pb-3 md:pb-5">
          <h2 className="store-time-status">
            <strong>Open now</strong> - closes at
            {getData &&
              getData.map((i: any) => {
                return (
                  <span style={{ marginLeft: "15px" }}>{i.closeTime}</span>
                );
              })}
          </h2>
        </div>
        <div className="boxes">
          <div className="box store-info">
            <div className="inner-box">
              <h4>Store Info.</h4>
              <div className="store-address">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21.23"
                  height="30"
                  viewBox="0 0 21.23 30"
                >
                  <g transform="translate(0 0)">
                    <path
                      d="M6.789,23.576c1.079,1.719,2.246,3.8,3.4,5.825.427.747.813.859,1.326-.027,1.113-1.931,2.207-3.931,3.359-5.8,3.5-5.661,9.223-11.181,4.67-18.8C15.5-1.987,4.5-1.265,1.216,5.034c-3.769,7.219,2.117,13.039,5.574,18.542Z"
                      fill="#d61a0c"
                      fill-rule="evenodd"
                    />
                    <path
                      d="M10.61,6.247a4.116,4.116,0,1,1-4.116,4.116A4.117,4.117,0,0,1,10.61,6.247Z"
                      fill="#a60d0d"
                      fill-rule="evenodd"
                    />
                  </g>
                </svg>

                {getData &&
                  getData.map((i: any) => {
                    return (
                      <>
                        <p>
                          {i.address.line1},{i.address.city}
                        </p>
                      </>
                    );
                  })}
              </div>
              <div className="store-phone">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23.987"
                  height="23.987"
                  viewBox="0 0 23.987 23.987"
                >
                  <path
                    d="M19.64,17.328c-.617,1.876-3.036,2.812-4.764,2.656A15.194,15.194,0,0,1,8,17.14,22.652,22.652,0,0,1,.885,8.652C-.22,6.3-.468,3.411,1.176,1.268A2.827,2.827,0,0,1,3.429,0C4.8-.063,4.992.721,5.463,1.943c.351.913.819,1.845,1.08,2.792C7.032,6.5,5.321,6.575,5.105,8.019c-.133.911.969,2.132,1.468,2.781A13.473,13.473,0,0,0,10.051,14c.76.479,1.984,1.341,2.853.865,1.339-.733,1.213-2.991,3.084-2.227a30.12,30.12,0,0,1,2.833,1.463c1.431.769,1.364,1.567.819,3.223h0"
                    transform="translate(4.5) rotate(13)"
                    fill="#d61a0c"
                    fill-rule="evenodd"
                  />
                </svg>
                <p>
                  {getData &&
                    getData.map((i: any) => {
                      return (
                        <>
                          <a>{i.mainPhone}</a>
                        </>
                      );
                    })}
                </p>
              </div>
              <div className="store-link">
                {getData &&
                  getData.map((i: any) => {
                    return (
                      <>
                        <a
                          className="direction"
                          href={`https://www.google.com/maps/dir/?api=1&origin=${currentLocationLatLng.lat},${currentLocationLatLng.lng}&destination=${i.address.line1} `}
                          target="_blank"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M0,0H24V24H0Z" fill="none" />
                            <path
                              d="M22.43,10.59,13.42,1.58a2.051,2.051,0,0,0-2.83,0l-9,9a1.992,1.992,0,0,0,0,2.82l9,9a2,2,0,0,0,2.82,0l8.99-8.99A1.992,1.992,0,0,0,22.43,10.59ZM12.01,20.99l-9-9,9-9,9,9ZM8,11v4h2V12h4v2.5L17.5,11,14,7.5V10H9A1,1,0,0,0,8,11Z"
                              fill="#fff"
                            />
                          </svg>{" "}
                          Get Directions
                        </a>
                      </>
                    );
                  })}

                <a className="join-facebook" href="#" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="20"
                    viewBox="0 0 10 20"
                  >
                    <path
                      d="M14,6.875H10.25v-2.5a1.25,1.25,0,0,1,1.25-1.25h1.25V0h-2.5A3.75,3.75,0,0,0,6.5,3.75V6.875H4V10H6.5V20h3.75V10h2.5Z"
                      transform="translate(-4)"
                      fill="#fff"
                      fill-rule="evenodd"
                    />
                  </svg>{" "}
                  Join us on Facebook
                </a>
              </div>
              <div className="other-services">
                <div className="service-row">
                  <label>Delivery Service</label>{" "}
                  <span className="status">Offline</span>
                  <span className="avability">Yes</span>
                </div>
                <div className="service-row">
                  <label>Click & Collect</label>{" "}
                  <span className="status">Available</span>
                  <span className="avability">No</span>
                </div>
              </div>
            </div>
          </div>
          <div className="box store-timing">
            <div className="inner-box">
              <h4>Store Timing</h4>
              <div className="hours">
                <div className="time-row">
                  <div className="day"></div>
                  <div className="store-time">In-Store</div>
                  <div className="delivery-time">Delivery</div>
                </div>
                {getData &&
                  getData.map((i: any) => {
                    return (
                      <>
                        {i.hours &&
                          i.hours.map((i: any) => {
                            let a: any;
                            a = i && Object.values(i)[0];
                            let b: any = a && Object.values(a)[0];

                            return (
                              <>
                                <div className="time-row currentDay">
                                  <div className="day">
                                    {i && Object.keys(i)[0]}
                                  </div>
                                  <div className="store-time">
                                    {b === true ? (
                                      "closed"
                                    ) : (
                                      <>
                                        {b[0] && b[0].start}-{b[0] && b[0].end}
                                      </>
                                    )}
                                  </div>
                                  <div className="delivery-time"></div>
                                </div>
                              </>
                            );
                          })}
                      </>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="box map-info">
            {/* //@react-google-map */}
            {/* <div className="inner-box">
              {isLoaded ? (
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={getCenter}
                  zoom={10}
                >
                
                  {getData.map((i: any) => {
                    let center1: any;
                    center1 = {
                      lat: i.geocodedCoordinate.latitude,
                      lng: i.geocodedCoordinate.longitude,
                    };
                    return (
                      <Marker
                        position={center1}
                        onClick={() => {
                          setIshow(true);
                        }}
                      >
                        {isShow ? (
                          <InfoWindow
                            position={center1}
                            onCloseClick={() => {
                              setIshow(false);
                            }}
                          >
                            <div>
                              <p>{i.name}</p>
                              <p>
                                {i.address.line1},{i.address.city},
                                {i.address.localizedCountryName},
                                {i.address.postalCode}
                              </p>
                              <p>{i.mainPhone}</p>
                            </div>
                          </InfoWindow>
                        ) : (
                          <></>
                        )}
                      </Marker>
                    );
                  })}
                </GoogleMap>
              ) : (
                <></>
              )}
            </div> */}
            {/* // static map */}
            <div className="inner-box">
              {getData.map((i: any) => {
                let center1: any;
                center1 = {
                  lat: i.geocodedCoordinate.latitude,
                  lng: i.geocodedCoordinate.longitude,
                };

                return (
                  <>
                    <iframe
                      width="100%"
                      height="456"
                      src={`https://maps.google.com/maps?q=${i.name},${i.address.line1},${i.address.city}, ${i.address.region}${i.address.postalCode},${i.address.countryCode}&en=uk&z=14&output=embed`}
                    ></iframe>

                    {/* <img
                      className="w-full h-[300px] md:h-[460px] object-cover object-center"
                      alt="Static Google map for {{name}} - {{neighborhood}}"
                      width="1920"
                      style={{ border: 4, height: "460" }}
                      src={`https://maps.googleapis.com/maps/api/staticmap?size=600x400&maptype=roadmap&markers=color:red%7C${i.geocodedCoordinate.latitude},${i.geocodedCoordinate.longitude}&key=AIzaSyCbRR26VkSZBKO1YJfG9ZYRSzcyShBO9-A`}
                    /> */}
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationInformation;
