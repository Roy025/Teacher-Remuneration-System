import { useState } from 'react';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Dropdown({ session, semester, handleData }) {
	const [isActive, setIsActive] = useState(false);
	const [selectedsession, setSelectedsession] = useState('Select');
	const [selectedsemester, setSelectedsemester] = useState('Select');
	console.log(selectedsession);
	console.log(selectedsemester);

	return (
		<div className="Dropdown select">
			<p>Semester</p>
			<div
				className="Dropdown-btn"
				onClick={(e) => setIsActive(!isActive)}>
				{selectedsemester}
				<FontAwesomeIcon icon={faCaretDown} />
			</div>
			{isActive && (
				<div className="Dropdown-content">
					{semester.map((sem, index) => (
						<div
							onClick={(e) => {
								setSelectedsemester(sem);
								setIsActive(false);
								handleData(selectedsemester);
							}}
							key={index}
							className="Dropdown-item">
							{' '}
							{sem}
						</div>
					))}
				</div>
			)}
			setIsActive({false});
			<p>Session</p>
			<div
				className="Dropdown-btn"
				onClick={(e) => setIsActive(!isActive)}>
				{selectedsession}
				<FontAwesomeIcon icon={faCaretDown} />
			</div>
			{isActive && (
				<div className="Dropdown-content">
					{session.map((ses, index) => (
						<div
							onClick={(e) => {
								setSelectedsession(ses);
								setIsActive(false);
								handleData(selectedsession);
							}}
							key={index}
							className="Dropdown-item">
							{' '}
							{ses}
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default Dropdown;

//export const sessionTitle = 'Session';
export const sessionOptions = [
	'2016-17',
	'2017-18',
	'2018-19',
	'2019-20',
	'2020-21',
];
//export const semesterTitle = 'Semester';
export const semesterOptions = [
	'1st',
	'2nd',
	'3rd',
	'4th',
	'5th',
	'6th',
	'7th',
	'8th',
];
