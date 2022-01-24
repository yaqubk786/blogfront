import React from "react";
import Adv from '../Adv/Adv'
import "./articles.css";

function Articles() {
  let arr = [1, 2];
  return (
    <section className="section border">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="ar-head">Latest Articles</h1>
            <hr className="ar-hr"></hr>
            <hr className="ar-hr1"></hr>
            {arr.map((item, index) => {
              return (
                <div key={index}>
                  <div className="ar-div1">
                    <img
                      className="ar-img"
                      src={process.env.PUBLIC_URL + "/media/building.jpg"}
                    />
                    <span className="ar-text">
                      Catch waves with <br /> an adventure guide
                    </span>
                    <span className="ar-txt1">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      <br />
                      Aenean commodo ligula eget dolor.
                    </span>
                  </div>
                  <hr className="ar-hr1"></hr>
                </div>
              );
            })}
          </div>
          <div className="col-md-6">
            <Adv />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Articles;
