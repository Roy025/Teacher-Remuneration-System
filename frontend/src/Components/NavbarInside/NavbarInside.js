import React from "react";
import { Items } from "./NavbarInsideItems";
//import {Button} from "../Buttons/Button";
import "./NavbarInside.css";
import { Link } from "react-router-dom";

function NavbarInside() {
  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">
        <Link to="/home" className="nav-links home">
          Teacher Staff Remuneration
          <span className="material-symbols-outlined">payments</span>
        </Link>
      </h1>
      <ul className="nav-menu">
        {Items.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.url} className={item.cName}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavbarInside;
