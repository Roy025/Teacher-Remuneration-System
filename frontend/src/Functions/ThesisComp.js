import React from "react";
import ThesisTwoField from "./ThesisTwoField";
import ThreeFields from "./ThreeFields";
import TempTwo from "./TempTwo";

function ThesisComp({
  inputVivaBoard,
  setVivaBoard,
  inputThesisSuper,
  setThesisSuper,
  inputThesisCoSuper,
  setThesisCoSuper,
  inputThesisAssess,
  setThesisAssess,
  inputThesisManagers,
  setThesisManagers,
  localTeacherDB,
}) {
  const handleChangeCourse = (evnt, index) => {
    const { name, value } = evnt.target;
    const list = [...inputThesisManagers];
    list[index][name] = value;
    setThesisManagers(list);
  };

  return (
    <div className="Container">
      <div className="labelFlex TermpaperCompElement TermPaperCourse">
        <label>Course ID</label>
        <input
          type="text"
          name="course"
          onChange={(evnt) => handleChangeCourse(evnt, 0)}
          value={inputThesisManagers.course}
          className="FormControl"
          placeholder="Course"
        />
      </div>
      <div className="formRow">
        <label className="subLabel">Viva board</label>
        <ThreeFields
          inputFields={inputVivaBoard}
          setInputFields={setVivaBoard}
          localTeacherDB={localTeacherDB}
        />
      </div>

      <div className="formRow">
        <label className="subLabel">Thesis Superviser</label>
        <ThreeFields
          inputFields={inputThesisSuper}
          setInputFields={setThesisSuper}
          localTeacherDB={localTeacherDB}
        />
      </div>

      <div className="formRow">
        <label className="subLabel">Thesis Co-superviser</label>
        <ThreeFields
          inputFields={inputThesisCoSuper}
          setInputFields={setThesisCoSuper}
          localTeacherDB={localTeacherDB}
        />
      </div>

      <div className="formRow">
        <label className="subLabel">Thesis Assessor</label>
        <ThreeFields
          inputFields={inputThesisAssess}
          setInputFields={setThesisAssess}
          localTeacherDB={localTeacherDB}
        />
      </div>

      <div className="formRow">
        <label className="subLabel">Supervisor Assign</label>
        <TempTwo
          inputFields={inputThesisManagers}
          setInputFields={setThesisManagers}
          field="super"
        />
      </div>

      <div className="formRow">
        <label className="subLabel">Co-superviser Assign</label>
        <TempTwo
          inputFields={inputThesisManagers}
          setInputFields={setThesisManagers}
          field="cosuper"
        />
      </div>

      <div className="formRow">
        <label className="subLabel">Assessor Assign</label>
        <TempTwo
          inputFields={inputThesisManagers}
          setInputFields={setThesisManagers}
          field="assess"
        />
      </div>
    </div>
  );
}

export default ThesisComp;
