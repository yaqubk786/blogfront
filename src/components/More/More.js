import React from "react";
import "./more.css";

function Latest() {
  return (
    <section className="section mb-4 pb-4">
      <div className="container">
        <h1 className="l-head">The Latest</h1>
        <hr className="l-hr"></hr>
        <div className="row">
          {[1, 2, 3].map((i) => {
            return (
              <div className="col-md-4 overflow-hidden">
                <div className="l-box shadow">
                  <img
                    className="lake-img"
                    src={process.env.PUBLIC_URL + "/media/lakehouse.jfif"}
                  ></img>
                  <h3>
                    Joshua Tree
                    <br /> Overnight Advemture
                  </h3>
                  <p className="text">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default Latest;
