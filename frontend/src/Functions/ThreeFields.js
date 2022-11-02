import React, { useState } from "react";
import "../Components/SampleDropdown/styles.css";

const ThreeFields = ({ inputFields, setInputFields }) => {
  const removeInputFields = (e, index) => {
    e.preventDefault();
    const rows = [...inputFields];
    rows.splice(index, 1);
    setInputFields(rows);
  };
  const handleChange = (evnt, index) => {
    const { name, value } = evnt.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
  };
  const addInputField = () => {
    setInputFields([
      ...inputFields,
      {
        institute: "",
        department: "",
        name: "",
      },
    ]);
  };
  return (
    // <div className="container">
    <div className="Container">
      {inputFields.map((data, index) => {
        const { institute, department, name } = data;
        return (
          <div className="ParentFormRow">
            <div
              className={
                inputFields.length === 1 ? "FormRow" : "FormRow CrossFormRow"
              }
              key={index}
            >
              <div className="fourFormRowElement">
                {index === 0 ? <label>Institute</label> : ""}
                <input
                  type="text"
                  name="institute"
                  onChange={(evnt) => handleChange(evnt, index)}
                  value={institute}
                  className="FormControl"
                  placeholder="Institute"
                />
              </div>

              <div className="fourFormRowElement">
                {index === 0 ? <label>Department</label> : ""}
                <input
                  type="text"
                  name="department"
                  onChange={(evnt) => handleChange(evnt, index)}
                  value={department}
                  className="FormControl"
                  placeholder="Department"
                />
              </div>

              <div className="fourFormRowElement">
                {index === 0 ? <label>Teacher's Name</label> : ""}
                <input
                  type="text"
                  name="name"
                  onChange={(evnt) => handleChange(evnt, index)}
                  value={name}
                  className="FormControl"
                  placeholder="Name"
                />
              </div>

              {inputFields.length !== 1 ? (
                <div className="FormRowElement">
                  <button
                    className={
                      index === 0
                        ? "crossButton crossButton-first"
                        : "crossButton"
                    }
                    onClick={(evnt) => removeInputFields(evnt, index)}
                  >
                    x
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>

            {inputFields.length - 1 === index && (
              <div className="FormRowElement">
                <button
                  className="addButton"
                  onClick={() => addInputField()}
                  type="button"
                >
                  <i className="fa-sharp fa-solid fa-plus "></i>
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ThreeFields;
