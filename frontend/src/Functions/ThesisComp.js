import React from "react";

function ThesisComp({
  inputVivaBoard,
  setVivaBoard,
  inputThesisSuper,
  setThesisSuper,
  inputThesisCoSuper,
  setThesisCoSuper,
  inputThesisAssess,
  setThesisAssess,
}) {
  return (
    <div className="Container">
      <div className="">
        <input
          type="text"
          name="name"
          // onChange={(event) =>
          //   handleChangeTeacher(event, index, ind)
          // }
          className=""
          placeholder="Name"
        />
      </div>
    </div>
  );
}

export default ThesisComp;
