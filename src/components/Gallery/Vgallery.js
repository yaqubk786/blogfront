import React from "react";
import "./vg.css";
import Catch from "../Catch/Catch"

function Vgallery() {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="vg">
              <img
                className="vg-img"
                src={process.env.PUBLIC_URL + "/media/building.jpg"}
              ></img>
              <p className="vg-title">Title of vertical gallery</p>
            </div>
          </div>
          <div className="col-md-5">
            <Catch/>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Vgallery;
