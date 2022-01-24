import React from "react";
import "./topdiv.css";

// make structure for display image in two column

function Topdiv() {
  return (
    <section className="section top-div-section">
      <div className="container">
        <div className="row">
          <div className="col-md-7 overflow-hidden">
            <img
              className="mount-pic"
              src={process.env.PUBLIC_URL + "/media/mountain.jpg"}
            />
          </div>
          <div className="col-md-5">
            <div className="row">
              <div className="col-md-12 mb-1 second-first-column overflow-hidden">
                <img
                  className="flower"
                  src={process.env.PUBLIC_URL + "/media/flowermount.jpg"}
                />
              </div>
              <div className="col-md-12 overflow-hidden">
                <img
                  className="flower"
                  src={process.env.PUBLIC_URL + "/media/flowermount.jpg"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Topdiv;

// {/* <div className="topdiv">
//             <img className="mount-pic" src={process.env.PUBLIC_URL + '/media/mountain.jpg'}></img>
//             {/* <h2 className="text-mount">TITLE OF VERTICAL GALLERY</h2> */}
//             <span><img className="flower" src={process.env.PUBLIC_URL + '/media/flowermount.jpg'}></img></span>
//             <img className="flower-2" src={process.env.PUBLIC_URL + '/media/flowermount.jpg'}></img>

//         </div> */}
