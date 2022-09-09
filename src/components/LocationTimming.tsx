import * as React from "react";
import { useTranslation } from "react-i18next";
import { withTranslation } from "react-i18next";
type props = {
  props: any;
};

const LocationTimming = (data: props) => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="box store-timing">
        <div className="inner-box">
          <h4>{t("Store Timing")}</h4>

          <div className="hours">
            <div className="time-row">
              <div className="day"></div>
              <div className="store-time">{t("In-Store")}</div>
              {/* <div className="delivery-time">Delivery</div> */}
            </div>
            {data.props.map((i: any) => {
              let a = i && Object.values(i)[0];
              let b: any = a && Object.values(a)[0];
              return (
                <>
                  <div className="time-row currentDay">
                    <div className="day">{Object.keys(i)[0]}</div>
                    {/* <div className="store-time">
                      {b === true ? (
                                      "closed"
                                    ) : (
                                      <>
                                        {b[0] && b[0].start}-{b[0] && b[0].end}
                                      </>
                                    )}
                    </div> */}
                    <div className="delivery-time">
                      {" "}
                      {b === true ? (
                        "closed"
                      ) : (
                        <>
                          {b[0] && b[0].start}-{b[0] && b[0].end}
                        </>
                      )}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default withTranslation()(LocationTimming);
