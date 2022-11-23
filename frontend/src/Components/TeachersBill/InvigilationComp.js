import React from "react";

function InvigilationComp({ tag, invigilation, setInvigilation }) {
  
  const addInputFieldCourse = () => {
    setInvigilation([
      ...invigilation,
      {
        course: "",
        names: [""],
      },
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
    <div className="Container">
      {data.map((data, index) => {
        console.log(course);
        return (
          <div className="ParentFormRow">
            <div
              className={
                data.length === 1 ? "FormRow" : "FormRow CrossFormRow"
              }
              key={index}
            >
              <div classname="FormRowNoCross">
                <div className="labelFlex">
                  <label>Course ID</label>
                  <input
                    type="text"
                    name="course"
                    onChange={(evnt) => handleChangeCourse(evnt, index)}
                    value={data.courseID}
                    className="FormControl"
                    placeholder="Course"
                  />
                </div>

                    <div
                      classname="childFormRowElementWithCrossAndAdd"
                      key={ind}
                    >
                      <div className="labelFlex">
                        {ind === 0 && <label>{tag}</label>}
                        <input
                          type="text"
                          name="name"
                          onChange={(event) =>
                            handleChangeTeacher(event, index, ind)
                          }
                          value={info}
                          className="FormControl"
                          placeholder="Name"
                        />
                      </div>
                      {data.names.length !== 1 && (
                        <div className="childCross">
                          <button
                            className="childCrossButton"
                            onClick={(evnt) =>
                              removeInputFieldsTeacher(evnt, ind, index)
                            }
                          >
                            x
                          </button>
                        </div>

                      {data.length - 1 === ind && (
                        <div className="childAdd">
                          <button
                            className="childAddButton"
                            onClick={() => addInputFieldTeacher(index)}
                            type="button"
                          >
                            <i className="fa-sharp fa-solid fa-plus"></i>
                          </button>
                        </div>
                      )}
                    </div>
                  );
              </div>

              {invigilation.length !== 1 ? (
                <div className="FormRowElement">
                  <button
                    className={
                      index === 0
                        ? "crossButton crossButton-first"
                        : "crossButton"
                    }
                    onClick={(evnt) => removeInputFieldsCourse(evnt, index)}
                  >
                    x
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>

            {invigilation.length - 1 === index && (
              <div className="FormRowElement">
                <button
                  className="addButton"
                  onClick={() => addInputFieldCourse()}
                  type="button"
                >
                  <i className="fa-sharp fa-solid fa-plus"></i>
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default InvigilationComp;
