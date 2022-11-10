import { useEffect, useState } from 'react';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Dropdown({ options, dropdownTitle, handleData }) {
	const [isActive, setIsActive] = useState(false);
	const [selected, setSelected] = useState('Select');
	// useEffect(() => {
	// 	handleData(selected);
	// }, [selected]);

	return (
		<div className="Dropdown select">
			<p>{dropdownTitle}</p>
			<div
				className="Dropdown-btn"
				onClick={(e) => setIsActive(!isActive)}>
				{selected}
				<FontAwesomeIcon icon={faCaretDown} />
			</div>
			{isActive && (
				<div className="Dropdown-content">
					{options.map((option, index) => (
						<div
							onClick={() => {
								setSelected(option);
								setIsActive(false);
								handleData(option);
							}}
							key={index}
							className="Dropdown-item">
							{' '}
							{option}
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default Dropdown;

export const sessionTitle = 'Session';
export const sessionOptions = [
	'2016-17',
	'2017-18',
	'2018-19',
	'2019-20',
	'2020-21',
];
export const semesterTitle = 'Semester';
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
export const deptOptions = [
	'Forestry & Environmental Science',
	'Architecture',
	'Chemical Engineering & Polymer Science',
	'Civil & Environmental Engineering',
	'Computer Science & Engineering',
	'Electrical & Electronic Engineering',
	'Food Engineering & Tea Technology',
	'Industrial & Production Engineering',
	'Mechanical Engineering',
	'Petroleum and Mining Engineering',
	'Biochemistry and Molecular Biology',
	'Genetic Engineering & Biotechnology',
	'Business Administration',
	'Chemistry',
	'Geography and Environment',
	'Mathematics',
	'Oceanography',
	'Physics',
	'Statistics',
	'Anthropology',
	'Bangla',
	'Economics',
	'English',
	'Political Studies',
	'Public Administration',
	'Social Work',
	'Sociology',
	'Institute of Information and Communication Technology',
];
