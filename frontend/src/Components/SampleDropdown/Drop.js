// import SelectSearch from 'react-select-search';
import { useRef, useState } from 'react';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css';

function Drop({ options, dropdownTitle, handleData }) {
	const [isActive, setIsActive] = useState(false);
	const [selected, setSelected] = useState('Select');
	const [filteredOptions, setfilteredOptions] = useState(options);
	const handleChange = (evnt) => {
		const arr = options.filter((x) =>
			x.toLowerCase().includes(evnt.target.value.toLowerCase())
		);
		setfilteredOptions(arr);
	};
	return (
		<div className="Dropdown select">
			<p>{dropdownTitle}</p>
			<div
				className="Dropdown-btn"
				onClick={(e) => setIsActive(!isActive)}>
				<input
					type="text"
					onChange={(evnt) => handleChange(evnt)}
					className="FormControl"
					value={selected}
				/>
				{selected}
				<FontAwesomeIcon icon={faCaretDown} />
			</div>
			{isActive && (
				<div className="Dropdown-content">
					{filteredOptions.map((option, index) => (
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

export default Drop;
