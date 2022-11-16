import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../Components/SampleDropdown/styles.css";

// const ThreeFieldsNoAdd = ({ inputFields, setInputFields }) => {
const DropdownNoTitle = ({ options, propName, handleData }) => {
    const [isActive, setIsActive] = useState(false);
    const [selected, setSelected] = useState('');
    const [selectedData, setSelectedData] = useState('');
    const [filteredOptions, setfilteredOptions] = useState(options);
    const handleChange = (evnt) => {
        const arr = options.filter((x) =>
            x.toLowerCase().includes(evnt.target.value.toLowerCase())
        );
        setfilteredOptions(arr);
        setSelected(evnt.target.value);
    };
    const handleSelect = (option) => {
        handleData(propName, option);
    }
    return (
        <div className="Dropdown select">
            <div
                className="Dropdown-btn"
                onClick={(e) => setIsActive(!isActive)}>
                <input
                    type="text"
                    onChange={(evnt) => handleChange(evnt)}
                    className="FormControl inp"
                    value={selected}
                    placeholder="Select"
                />
                <FontAwesomeIcon icon={faCaretDown} />
            </div>
            {isActive && (
                <div className="Dropdown-content">
                    {filteredOptions.map((option, index) => (
                        <div
                            onClick={(e) => {
                                setSelected(option);
                                setIsActive(false);
                                // handleData(option);
                                handleSelect(option);
                                selectedData(option);
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
};

export default DropdownNoTitle;
