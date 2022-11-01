import { useState } from "react";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Dropdown({ options, dropdownTitle, handleData }) {
	const [isActive, setIsActive] = useState(false);
	const [selected, setSelected] = useState('Select');

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
							onClick={(e) => {
								setSelected(option);
								setIsActive(false);
								handleData(selected);
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

export const sessionTitle = "Session";
export const sessionOptions = [
  "2016-17",
  "2017-18",
  "2018-19",
  "2019-20",
  "2020-21",
];
export const semesterTitle = "Semester";
export const semesterOptions = [
  "1st",
  "2nd",
  "3rd",
  "4th",
  "5th",
  "6th",
  "7th",
  "8th",
];
