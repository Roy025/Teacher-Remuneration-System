import React, { useState } from "react";
import "../Components/SampleDropdown/styles.css";

const ThreeFieldsNoAdd = ({ inputFields, setInputFields }) => {
  const handleChange = (evnt, index) => {
    const { name, value } = evnt.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
  };

  return (
    <div className="Container">
      {inputFields.map((data, index) => {
        const { institute, department, name } = data;
        return (
          <div className="FormRow" key={index}>
            <div className="threeFormRowElement">
              <label>Institute</label>
              <input
                type="text"
                name="institute"
                onChange={(evnt) => handleChange(evnt, index)}
                value={institute}
                className="FormControl"
                placeholder="Institute"
              />
            </div>

            <div className="threeFormRowElement">
              <label>Department</label>
              <input
                type="text"
                name="department"
                onChange={(evnt) => handleChange(evnt, index)}
                value={department}
                className="FormControl"
                placeholder="Department"
              />
            </div>

            <div className="threeFormRowElement">
              <label>Teacher's Name</label>
              <input
                type="text"
                name="name"
                onChange={(evnt) => handleChange(evnt, index)}
                value={name}
                className="FormControl"
                placeholder="Name"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ThreeFieldsNoAdd;
