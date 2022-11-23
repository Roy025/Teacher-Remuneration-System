import React, { useEffect, useState } from "react";
import DropdownNoTitleTeacher from "./DropdownNoTitleTeacher";

const SingleDatawithadd = ({
  options,
  propName,
  index,
  existingData,
  setExistingData,
}) => {
  const [selectedData, setSelectedData] = useState(
    existingData[index]
      ? existingData[index].map((data) => {
          return data.name;
        })
      : ""
  );

  useEffect(() => {
    setSelectedData(
      existingData[index]
        ? existingData[index].map((data) => {
            if (data.name) return data.name;
            else return "";
          })
        : ""
    );
  }, [existingData]);

  const handleTeacher = (prop, option, idx) => {
    const newData = [...existingData];
    newData[index][idx] = option;
    setExistingData(newData);
  };

  const removeInputFieldsTeacher = (evnt, ind, index) => {
    const newData = [...existingData];
    const data = newData[index];
    newData[index].splice(ind, 1);
    setExistingData(newData);

    const newSelectedData = [...selectedData];
    newSelectedData.splice(ind, 1);
    setSelectedData(newSelectedData);
  };

  const addInputFieldTeacher = (index) => {
    const newData = [...existingData];
    newData[index].push({
      id: "",
      name: "",
    });
    setExistingData(newData);

    setSelectedData([...selectedData, ""]);
  };

  // useEffect(() => {
  //     console.log(existingData);
  // }, [existingData])

  return (
    <>
      {existingData[index].map((data, ind) => {
        return (
          <div className={ind === 0 ? "firstRow" : ""}>
            <div
              className={`childFormRowElementWithCrossAndAdd TermpaperCompElement`}
              key={ind}
            >
              <div className="labelFlex labelTermpaperCompElement">
                {ind === 0 ? <label>{propName}</label> : ""}
                <DropdownNoTitleTeacher
                  options={options}
                  propName="supervisors"
                  selected={selectedData}
                  setSelected={setSelectedData}
                  handleData={handleTeacher}
                  index={ind}
                />
              </div>
              {existingData[index].length !== 1 ? (
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
              ) : (
                ""
              )}

              {existingData[index].length - 1 === ind && (
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
          </div>
        );
      })}
    </>
  );
};
export default SingleDatawithadd;
