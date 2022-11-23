import React from "react";
import ThesisSuper from "./ThesisSuper";
import ThreeFields from "./ThreeFields";
import TempTwo from "./ThesisCoSuper";
import ThesisCoSuper from "./ThesisCoSuper";
import ThesisAssess from "./ThesisAssess";

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
      <div className="labelFlex labelTermpaperCompElement">
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
        <ThesisSuper
          inputFields={inputThesisManagers}
          setInputFields={setThesisManagers}
        />
      </div>

      <div className="formRow">
        <label className="subLabel">Co-supervisor Assign</label>
        <ThesisCoSuper
          inputFields={inputThesisManagers}
          setInputFields={setThesisManagers}
        />
      </div>

      <div className="formRow">
        <label className="subLabel">Assessor Assign</label>
        <ThesisAssess
          inputFields={inputThesisManagers}
          setInputFields={setThesisManagers}
        />
      </div>
    </div>
  );
}

export default ThesisComp;
