import "../Components/SampleDropdown/styles.css";

const ThesisSuper = ({ inputFields, setInputFields}) => {
  const removeInputFields = (e, index) => {
    e.preventDefault();
    const rows = [...inputFields];
    rows[0].supers.splice(index, 1);
    setInputFields(rows);
  };

  console.log(inputFields);

  const handleChangeName = (evnt, index) => {
    const { name, value } = evnt.target;
    const list = [...inputFields];
    list[0].supers[index].name = value;
    setInputFields(list);
  };

  const handleChangeStudent = (evnt, index) => {
    const { name, value } = evnt.target;
    const list = [...inputFields];
    list[0].supers[index].stdntID = value;
    setInputFields(list);
  };


  const addInputField = () => {
    const list = [...inputFields];
    list[0].supers.push({
        name: "",
        stdntID: "",
      },)
    setInputFields(list)
  };
  return (
    <div className="Container">
      {inputFields[0].supers.map((data, index) => {
        const { name, id } = data;
        return (
          <div className="ParentFormRow" key={index}>
            <div
              className={
                inputFields[0].supers.length === 1 ? "FormRow" : "FormRow CrossFormRow"
              }
              key={index}
            >
              <div className="TwoFormRowElementWithAdd">
                {index === 0 ? <label>Teacher's Name</label> : ""}
                <input
                  type="text"
                  name="name"
                  onChange={(evnt) => handleChangeName(evnt, index)}
                  value={name}
                  className="FormControl"
                  placeholder="Name"
                />
              </div>

              <div className="TwoFormRowElementWithAdd">
                {index === 0 ? <label>Student ID</label> : ""}
                <input
                  type="text"
                  name="reg"
                  onChange={(evnt) => handleChangeStudent(evnt, index)}
                  value={id}
                  className="FormControl"
                  placeholder="Student ID"
                />
              </div>

              {inputFields[0].supers.length !== 1 ? (
                <div className="FormRowElement">
                  <button
                    className={
                      index === 0
                        ? "crossButton crossButton-first"
                        : "crossButton"
                    }
                    onClick={(evnt) => removeInputFields(evnt, index)}
                  >
                    x
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
            {inputFields[0].supers.length - 1 === index && (
              <div className="FormRowElement">
                <button
                  className="addButton"
                  onClick={() => addInputField()}
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
};

export default ThesisSuper;
