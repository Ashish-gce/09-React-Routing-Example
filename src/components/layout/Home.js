import React from "react";
import watchlogo from "../../assets/img/rolex-logo.jpg";

export const Home = () => {
  return (
    <React.Fragment>
      <div className="landing-page">
        <div className="wrapper">
          <div className="align-items-center justify-content-center text-center h-100">
            <p>
              <img src={watchlogo} height="60" width="60" />
              <span className="display-4 font-weight-bold offset-1 text-warning font-italic">
                ROLEX
              </span>
            </p>
            <p className="lead offset-1 text-warning">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy is available.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
