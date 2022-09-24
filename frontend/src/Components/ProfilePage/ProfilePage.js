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
			<div className="ProfileHeadContainer">
				<div className="ProfileHead">
					<div className="ProfileAvatar">
						<img
							src={require('./images/profilePic.jpg')}
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
					/>
				</div>
			</div>
		</div>
	);
}

export default ProfilePage;
