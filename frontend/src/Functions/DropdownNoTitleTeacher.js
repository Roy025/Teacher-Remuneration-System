import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "../Components/SampleDropdown/styles.css";

const DropdownNoTitleTeacher = ({ options, propName, handleData, index, selected, setSelected }) => {
    // console.log(options);
    const [isActive, setIsActive] = useState(false);
    const [filteredOptions, setfilteredOptions] = useState(options);

    const handleChange = (evnt) => {
        const arr = options.filter((x) =>
            x.name.toLowerCase().includes(evnt.target.value.toLowerCase())
        );
        setfilteredOptions(arr);
        if (index !== undefined) {
            const newSelected = [...selected];
            newSelected[index] = evnt.target.value;
            setSelected(newSelected);
        } else {
            setSelected(evnt.target.value);
        }
    };

    useEffect(() => {
        setfilteredOptions(options);
    }, [options]);

    const handleSelect = (option) => {
        if (index === undefined) {
            setSelected(option.name);
            handleData(propName, option);
        } else {
            const newSelected = [...selected];
            newSelected[index] = option.name;
            setSelected(newSelected);
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
                    value={index!==undefined? selected[index] : selected}
                    placeholder="Select"
                />
                <FontAwesomeIcon icon={faCaretDown} />
            </div>
            {isActive && (
                <div className="Dropdown-content">
                    {filteredOptions.map((option, ind) => (
                        <div
                            onClick={(e) => {
                                setIsActive(false);
                                handleSelect(option);
                            }}
                            key={ind}
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
