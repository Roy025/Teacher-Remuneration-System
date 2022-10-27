import React, { useState } from "react";
import { Additions } from "./InfoComp";

const StudentCount = () => {
  const [inputFields, setInputFields] = useState([
    {
      course: "",
      number: "",
    },
  ]);
  const defaultInput = {
    course: "",
    number: "",
  };
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
		  }
	  ]);
  }
  return (
    <>
      {inputFields.map((data, index) => {
        const { number, course } = data;
        return (
          <div className="row">
            <div class="form-group col-md-3">
              <label for="exampleFormControlInput1">CourseID</label>
              <input
                type="text"
                name="course"
                onChange={(evnt) => handleChange(evnt, index)}
                value={course}
                className="form-control"
                placeholder="Course"
              />
            </div>
            <div class="form-group col-md-3">
              <label for="exampleFormControlInput1">
                Resgistered Student Count
              </label>
              <input
                type="text"
                name="number"
                onChange={(evnt) => handleChange(evnt, index)}
                value={number}
                className="form-control"
                placeholder="number"
              />
            </div>
            <div className="col-md-1 text-center mt-3">
              {inputFields.length !== 1 ? (
                <button
                  className="btn-outline-danger add"
                  onClick={removeInputFields}
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
    </>
  );
};

export default StudentCount;
