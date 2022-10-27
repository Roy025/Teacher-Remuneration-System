import React, { useState } from "react";
import "../Components/SampleDropdown/styles.css";

const FourField = () => {
  const [inputFields, setInputFields] = useState([
    {
		name: "",
        course: "",
    },
  ]);
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
        name: "",
        course: ""
      },
    ]);
    console.log(inputFields);
  };
  return (
    <div className="container">
      {inputFields.map((data, index) => {
        const { name, course } = data;
        return (
          <div className="row" key={index}>
            <div className="form-group col-md-3">
			{index === 0 ? <label>Teacher's Name</label> : ""}
              <input
                type="text"
                name="name"
                onChange={(evnt) => handleChange(evnt, index)}
                value={name}
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="form-group col-md-2">
			{index === 0 ? <label>Course ID</label> : ""}
              <input
                type="text"
                name="course"
                onChange={(evnt) => handleChange(evnt, index)}
                value={course}
                className="form-control"
                placeholder="Course"
              />
            </div>
            <div className="col-md-1 text-center mt-3">
              {inputFields.length !== 1 ? (
                <button
                  className="btn-outline-danger add"
                  onClick={(evnt) => removeInputFields(evnt, index)}
                >
                  x
                </button>
              ) : (
                ""
              )}
            </div>
            {inputFields.length - 1 === index && (
              <div className="row">
                <div className="col-sm-1">
                  {/* <Additions
                    inputFields={inputFields}
                    setInputFields={setInputFields}
                    defaultInput={defaultInput}
                  />{" "} */}
                  <button
                    className="btn-outline-success add"
                    onClick={() => addInputField()}
                    type="button"
                  >
                    <i className="fa-sharp fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FourField;
