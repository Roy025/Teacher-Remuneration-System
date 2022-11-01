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
        course: '',
        number: '',
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
              // className="row"
              className="FormRow"
              key={index}
            >
              {/* <div className="form-group col-md-3"> */}
              <div className="thriceFormRowElement">
                {/* <label for="exampleFormControlInput1">CourseID</label> */}
                {index === 0 ? <label>Course ID</label> : ""}
                <input
                  type="text"
                  name="course"
                  onChange={(evnt) => handleChange(evnt, index)}
                  value={course}
                  // className="form-control"
                  className="FormControl"
                  placeholder="Course"
                />
              </div>
              {/* <div className="form-group col-md-3"> */}
              <div className="thriceFormRowElement">
                {/* <label for="exampleFormControlInput1">Number of Students</label> */}
                {index === 0 ? <label>Number of Students</label> : ""}
                <input
                  type="text"
                  name="number"
                  onChange={(evnt) => handleChange(evnt, index)}
                  value={number}
                  // className="form-control"
                  className="FormControl"
                  placeholder="number"
                />
              </div>
              {/* <div className="col-md-1 text-center mt-3"> */}
              <div className="FormRowElement">
                {inputFields.length !== 1 ? (
                  <button
                    //   className="btn-outline-danger add"
                    className={
                      index === 0
                        ? "crossButton crossButton-first"
                        : "crossButton"
                    }
                    onClick={(evnt) => removeInputFields(evnt, index)}
                  >
                    x
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
            {inputFields.length - 1 === index && (
              //   <div className="row">
              <div className="FormRowElement">
                {/* <div className="col-sm-1"> */}
                <button
                  // className="btn-outline-success add"
                  className="addButton"
                  onClick={() => addInputField()}
                  type="button"
                >
                  <i className="fa-sharp fa-solid fa-plus"></i>
                </button>
                {/* </div> */}
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default StudentCount;
