import React from "react";
import { useState } from "react";

function InvigilationComp({tag}) {
  const [invigilation, setInvigilation] = useState([
    {
      course: "",
      names: [""],
    }
  ]);

  const addInputFieldCourse = () => {
    setInvigilation([
      ...invigilation,
      {
        course: "",
        names: [""],
      }
    ]);
  };

  const removeInputFieldsCourse = (e, index) => {
    e.preventDefault();
    const rows = [...invigilation];
    rows.splice(index, 1);
    setInvigilation(rows);
  };

  const handleChangeCourse = (evnt, index) => {
    const { name, value } = evnt.target;
    const list = [...invigilation];
    list[index][name] = value;
    setInvigilation(list);
  };

  const handleChangeTeacher = (evnt, index, ind) => {
    const { name, value } = evnt.target;
    const list = [...invigilation];
    console.log(list[index].names[name]);
    list[index].names[ind] = value;
    setInvigilation(list);
  };

  const addInputFieldTeacher = (index) => {
    const list = [...invigilation];
    list[index].names.push("");
    setInvigilation([...list]);
  };

  const removeInputFieldsTeacher = (e, ind, index) => {
    e.preventDefault();
    const list = [...invigilation];
    list[index].names.splice(ind, 1);
    setInvigilation([...list]);
  };

  return (
    <div className="row Full-form-page">
      {invigilation.map((data, index) => {
        const course = data;
        console.log(course);
        return (
          <div div className="row" key={index}>
            {index === 0 ? <label>Course ID</label> : ""}
            <input
              type="text"
              name="course"
              onChange={(evnt) => handleChangeCourse(evnt, index)}
              value={course.course}
              className="form-control"
              placeholder="Course"
            />
            {data.names.map((info, ind) => {
              console.log("Hi");
              return (
                <div className="row" key={ind}>
                  <div className="form-group col-md-3">
                    {ind === 0 ? <label>{tag}</label> : ""}
                    <input
                      type="text"
                      name="name"
                      onChange={(event) =>
                        handleChangeTeacher(event, index, ind)
                      }
                      value={info}
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="col-md-1 text-center mt-3">
                    {data.names.length !== 1 ? (
                      <button
                        className="btn-outline-danger add"
                        onClick={(evnt) =>
                          removeInputFieldsTeacher(evnt, ind, index)
                        }
                      >
                        x
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                  {data.names.length - 1 === ind && (
                    <div className="row">
                      <div className="col-sm-1">
                        <button
                          className="btn-outline-success add"
                          onClick={() => addInputFieldTeacher(index)}
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

            <div className="col-md-1 text-center mt-3">
              {invigilation.length !== 1 ? (
                <button
                  className="btn-outline-danger add"
                  onClick={(evnt) => removeInputFieldsCourse(evnt, index)}
                >
                  x
                </button>
              ) : (
                ""
              )}
            </div>
            {invigilation.length - 1 === index && (
              <div className="row">
                <div className="col-sm-1">
                  <button
                    className="btn-outline-success add"
                    onClick={() => addInputFieldCourse()}
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
}

export default InvigilationComp;
