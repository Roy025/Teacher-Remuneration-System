import React from "react";
import { Link } from "react-router-dom";
import "./AdminHome.css";
import SimpleButton from "../Buttons/SimpleButton"

function AdminHome() {
  return (
    <div className="CreateCards">
      <div className="IndCreateCard">
        <i class="fa-solid fa-user Admin-icons"></i>
        <Link to="/createaccount">
          <SimpleButton buttonName="Create Account" />
        </Link>
        <p className="Card-text">Create accounts for teachers</p>
      </div>
      <div className="IndCreateCard">
        <i class="fa-solid fa-building-columns Admin-icons"></i>
        <Link to="/addinstitute">
          <SimpleButton buttonName="Add Institutes" />
        </Link>
        <p className="Card-text">Add instituitions </p>
      </div>
      <div className="IndCreateCard">
        <i class="fas fa-chalkboard Admin-icons"></i>
        <Link to="/adddepartment">
          <SimpleButton buttonName="Add Departments" />
        </Link>
        <p className="Card-text">Add departments to existing instituitions</p>
      </div>
      <div className="IndCreateCard">
      <i class="fa-regular fa-rectangle-list Admin-icons"></i>
        <Link to="/viewaccounts">
          <SimpleButton buttonName="View Accounts" />
        </Link>
        <p className="Card-text">See existing accounts in the system</p>
      </div>
      <div className="IndCreateCard">
      <i class="fa-solid fa-star-of-life Admin-icons"></i>
        <Link to="/updaterole">
          <SimpleButton buttonName="Update Role" />
        </Link>
        <p className="Card-text">
          Update the roles of Department heads and Directors
        </p>
      </div>
    </div>
  );
}

export default AdminHome;
