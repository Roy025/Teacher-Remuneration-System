import React, { useState } from "react";
import { Additions } from "./Additions";

const StudentCount = ({ inputFields, setInputFields }) => {
  // const [inputFields, setInputFields] = useState([
  // 	{
  // 		course: '',
  // 		number: '',
  // 	},
  // ]);
  const handleChange = (evnt, index) => {
    const { name, value } = evnt.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
  };
  const removeInputFields = (e, index) => {
    e.preventDefault();
    const rows = [...inputFields];
    rows.splice(index, 1);
    setInputFields(rows);
  };

  const addInputField = () => {
    setInputFields([
      ...inputFields,
      {
        course: "",
        number: "",
      },
    ]);
    console.log(inputFields);
  };
  return (
    <>
      {inputFields.map((data, index) => {
        const { number, course } = data;
        return (
          <div className="ParentFormRow">
            <div
              className={
                inputFields.length === 1 ? "FormRow" : "FormRow CrossFormRow"
              }
              key={index}
            >
              <div className="thriceFormRowElement">
                {index === 0 ? <label>Course ID</label> : ""}
                <input
                  type="text"
                  name="course"
                  onChange={(evnt) => handleChange(evnt, index)}
                  value={course}
                  className="FormControl"
                  placeholder="Course"
                />
              </div>

              <div className="thriceFormRowElement">
                {index === 0 ? <label>Number of Students</label> : ""}
                <input
                  type="text"
                  name="number"
                  onChange={(evnt) => handleChange(evnt, index)}
                  value={number}
                  className="FormControl"
                  placeholder="number"
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
                  <i className="fa-sharp fa-solid fa-plus"></i>
                </button>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default StudentCount;
