import React from "react";
import { Items } from "./NavbarOutsideItems";
//import {Button} from "../Buttons/Button";
import "./NavbarOutside.css";

function NavbarOutside () {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          Teacher Stuff Remuneration
          <span class="material-symbols-outlined">payments</span>
        </h1>
        <ul className="nav-menu">
          {Items.map((item, index) => {
            return (
              <li key={index}>
                {" "}
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>{" "}
              </li>
            );
          })}
        </ul>
      </nav>
    );
}

export default NavbarOutside;
