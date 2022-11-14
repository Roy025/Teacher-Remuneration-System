import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "../Components/SampleDropdown/styles.css";

// const ThreeFieldsNoAdd = ({ inputFields, setInputFields }) => {
const DropdownNoTitleTeacher = ({ options, propName, handleData, index }) => {
    const [isActive, setIsActive] = useState(false);
    const [selected, setSelected] = useState('');
    const [filteredOptions, setfilteredOptions] = useState(options);
    
    const handleChange = (evnt) => {
        const arr = options.filter((x) =>
            x.name.toLowerCase().includes(evnt.target.value.toLowerCase())
        );
        setfilteredOptions(arr);
        setSelected(evnt.target.value);
    };

    useEffect(() => {
        setfilteredOptions(options);
    }, [options]);

    const handleSelect = (option) => {
        if (index === undefined) {
            handleData(propName, option);
        } else {
            handleData(propName, option, index);
        }
    }

    return (
        <div className="Dropdown select">
            <div
                className="Dropdown-btn"
                onClick={(e) => setIsActive(!isActive)}>
                <input
                    type="text"
                    onChange={(evnt) => handleChange(evnt)}
                    className="FormControl"
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
                                setSelected(option.name);
                                setIsActive(false);
                                handleSelect(option);
                            }}
                            key={index}
                            className="Dropdown-item">
                            {' '}
                            {option.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DropdownNoTitleTeacher;
