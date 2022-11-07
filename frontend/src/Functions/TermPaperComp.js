import React from "react";
import "./checkbox.css";

function TermPaperComp({ TermPaper, setTermPaper }) {
  const addInputFieldCourse = () => {
    setTermPaper([
      ...TermPaper,
      {
        course: "",
        super: [""],
        examiner: [""],
        committee: false,
      },
    ]);
  };

  const setCommitteeStatus = (e, index) => {
    const list = [...TermPaper];
    if (list[index].committee === true) list[index].committee = false;
    else list[index].committee = true;
    setTermPaper(list);
  console.log(list);
  };

  const removeInputFieldsCourse = (e, index) => {
    e.preventDefault();
    const rows = [...TermPaper];
    rows.splice(index, 1);
    setTermPaper(rows);
  };

  const handleChangeCourse = (evnt, index) => {
    const { name, value } = evnt.target;
    const list = [...TermPaper];
    list[index][name] = value;
    setTermPaper(list);
  };

  const handleChangeTeacher = (evnt, index, ind) => {
    const { name, value } = evnt.target;
    const list = [...TermPaper];
    list[index].super[ind] = value;
    setTermPaper(list);
  };

  const addInputFieldTeacher = (index) => {
    const list = [...TermPaper];
    list[index].super.push("");
    setTermPaper([...list]);
  };

  const removeInputFieldsTeacher = (e, ind, index) => {
    e.preventDefault();
    const list = [...TermPaper];
    list[index].super.splice(ind, 1);
    setTermPaper([...list]);
  };

  const handleChangeExaminer = (evnt, index, ind) => {
    const { name, value } = evnt.target;
    const list = [...TermPaper];
    list[index].examiner[ind] = value;
    setTermPaper(list);
  };

  const addInputFieldExaminer = (index) => {
    const list = [...TermPaper];
    list[index].examiner.push("");
    setTermPaper([...list]);
  };

  const removeInputFieldsExaminer = (e, ind, index) => {
    e.preventDefault();
    const list = [...TermPaper];
    list[index].examiner.splice(ind, 1);
    setTermPaper([...list]);
  };

  return (
    <div className="Container">
      {TermPaper.map((data, index) => {
        const course = data;
        return (
          <div className="ParentFormRow" key={index}>
            <div
              className={
                data.super.length === 1 ? "FormRow" : "FormRow CrossFormRow"
              }
              key={index}
            >
              <div className="FormRowNoCross">
                <div className="labelFlex">
                  <label>Course ID</label>
                  <input
                    type="text"
                    name="course"
                    onChange={(evnt) => handleChangeCourse(evnt, index)}
                    value={course.course}
                    className="FormControl"
                    placeholder="Course"
                  />
                </div>

                {data.super.map((info, ind) => {
                  return (
                    <div
                      className="childFormRowElementWithCrossAndAdd"
                      key={ind}
                    >
                      <div className="labelFlex">
                        {ind === 0 ? <label>Supervisers</label> : ""}
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
                      <div className="childCross">
                        {data.super.length !== 1 ? (
                          <button
                            className="childCrossButton"
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

                      {data.super.length - 1 === ind && (
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
                })}

                {data.examiner.map((info, ind) => {
                  return (
                    <div
                      className="childFormRowElementWithCrossAndAdd"
                      key={ind}
                    >
                      <div className="labelFlex">
                        {ind === 0 ? <label>Examiners</label> : ""}
                        <input
                          type="text"
                          name="name"
                          onChange={(event) =>
                            handleChangeExaminer(event, index, ind)
                          }
                          value={info}
                          className="FormControl"
                          placeholder="Name"
                        />
                      </div>
                      {data.examiner.length !== 1 ? (
                        <div className="childCross">
                          <button
                            className="childCrossButton"
                            onClick={(evnt) =>
                              removeInputFieldsExaminer(evnt, ind, index)
                            }
                          >
                            x
                          </button>
                        </div>
                      ) : (
                        ""
                      )}

                      {data.examiner.length - 1 === ind && (
                        <div className="childAdd">
                          <button
                            className="childAddButton"
                            onClick={() => addInputFieldExaminer(index)}
                            type="button"
                          >
                            <i className="fa-sharp fa-solid fa-plus"></i>
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
                <div className="FormRowNoCross">
                  <label class="Form-control">
                    <input
                      type="checkbox"
                      name="checkbox"
                      onChange={(evnt) => setCommitteeStatus(evnt, index)}
                    />
                    Exam committee
                  </label>
                </div>
              </div>
              {/* onChange={(evnt) => setCommitteeStatus(evnt, index)} */}

              {TermPaper.length !== 1 ? (
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

            {TermPaper.length - 1 === index && (
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

export default TermPaperComp;
