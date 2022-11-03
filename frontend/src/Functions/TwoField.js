import "../Components/SampleDropdown/styles.css";

const TwoField = ({ inputFields, setInputFields }) => {
  const removeInputFields = (e, index) => {
    e.preventDefault();
    const rows = [...inputFields];
    rows.splice(index, 1);
    setInputFields(rows);
  };
  const handleChange = (evnt, index) => {
    const { name, value } = evnt.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
  };

  const addInputField = () => {
    setInputFields([
      ...inputFields,
      {
        name: "",
        course: "",
      },
    ]);
    console.log(inputFields);
  };
  return (
    <div className="Container">
      {inputFields.map((data, index) => {
        const { name, course } = data;
        return (
          <div className="ParentFormRow">
            <div className="FormRow" key={index}>
              <div className="thriceFormRowElement">
                {index === 0 ? <label>Teacher's Name</label> : ""}
                <input
                  type="text"
                  name="name"
                  onChange={(evnt) => handleChange(evnt, index)}
                  value={name}
                  className="FormControl"
                  placeholder="Name"
                />
              </div>

              <div className="thriceFormRowElement">
                {index === 0 ? <label>Course ID</label> : ""}
                <input
                  type="text"
                  name="course"
                  onChange={(evnt) => handleChange(evnt, index)}
                  value={course}
                  className="FormControl"
                  placeholder="Course"
                />
              </div>

              <div className="FormRowElement">
                {inputFields.length !== 1 ? (
                  <button
                    className="crossButton"
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

export default TwoField;
