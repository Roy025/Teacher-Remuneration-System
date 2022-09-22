import { useState } from 'react';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Dropdown({ options, dropdownTitle }) {
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
					{options.map((option) => (
						<div
							onClick={(e) => {
								setSelected(option);
								setIsActive(false);
							}}
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

// dependancies
// "@fortawesome/fontawesome-svg-core": "^6.2.0",
//     "@fortawesome/free-regular-svg-icons": "^6.2.0",
//     "@fortawesome/free-solid-svg-icons": "^6.2.0",
//     "@fortawesome/react-fontawesome": "^0.2.0",
