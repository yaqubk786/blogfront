import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className="navbar">
        <span className="spans home">
          <NavLink style={{ textDecoration: "none" }} to="/">
            Home
          </NavLink>
        </span>
        <span className="spans boll">
          <NavLink style={{ textDecoration: "none" }} to="/category/bollywood">Bollywood</NavLink>
        </span>
        <span className="spans tech">
          <NavLink style={{ textDecoration: "none" }} to="/category/technology">Technology</NavLink>
        </span>
        <span className="spans holl">
          <NavLink style={{ textDecoration: "none" }} to="/category/hollywood">Hollywood</NavLink>
        </span>
        <span className="spans fit">
          <NavLink style={{ textDecoration: "none" }} to="/category/fitness">Fittness</NavLink>
        </span>
        <span className="spans food">
          <NavLink style={{ textDecoration: "none" }} to="/category/food">Food</NavLink>
        </span>
      </div>
      <hr className="nav-hr"></hr>
    </>
  );
}
export default Nav;
