import React from 'react';
import './ProfilePage.css';
import DatePicker from 'sassy-datepicker';
import { useState } from 'react';

function ProfilePage() {
	const [date, setDate] = useState(new Date());

	const onChange = (date) => {
		setDate(date);
	};


  return (
    <div className="MainProfileBody">
      {/* Profile avatar and calendar */}
      <div className="ProfileHeadContainer">
        <div className="ProfileHead">
          <div className="ProfileAvatar">
            <img
              className="ProfilePic"
              src={require("./images/profilePic.jpg")}
              alt="profilePic"
            />
          </div>
          <div className="NameAndInstitution">
            <div className="ProfileName">Raihan Ullah</div>
            <div className="ProfileInstitution">
              Shahjalal University of Science and Technology
            </div>
            <div className="ProfileDesignation">Lecturer</div>
          </div>
        </div>
        <div className="ProfileCalender">
          <DatePicker
            onChange={onChange}
            value={date}
            className="Calendar-design"
            weekStartsFrom="Sunday"
          />
        </div>
      </div>

      {/* Dashboard */}
      <div className="Summary-dashboard">
        <h3 className="Summary">Summary</h3>

        <div className="Money-dashboard">
          <div className="Money-card">
            <h3 className="Money-card-title">Total Income</h3>
            <h5 className="Money-card-amount">BDT 4,49,650</h5>
          </div>
          <div className="Money-card Withdrwan">
            <h3 className="Money-card-title">Withdrwan Amount</h3>
            <h5 className="Money-card-amount">BDT 4,00,650</h5>
          </div>
          <div className="Money-card Remaining">
            <h3 className="Money-card-title">Remaining Amount</h3>
            <h5 className="Money-card-amount">BDT 49,650</h5>
          </div>
          <div className="Money-card Committee">
            <h3 className="Money-card-title">Active Committee</h3>
            <h5 className="Money-card-amount">02</h5>
          </div>
        </div>
      </div>

      {/* Profile info */}
      <div className="Profile-info">
        <div className="Cleared-voucher">
          <h1>Cleared Vouchers</h1>
          <div className="Catalogue-summary-container">
            <div className="Catalogue-summary">
              
            </div>
          </div>
        </div>
        <div className="Cleared-voucher">
          <h1>Uncleared Vouchers</h1>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
