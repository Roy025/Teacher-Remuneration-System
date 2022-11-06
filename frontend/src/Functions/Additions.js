import "../Components/TeachersBill/TeachersBill.css";

const Additions = ({ inputFields, defaultInput, setInputFields }) => {
  const addInputField = (e) => {
    e.preventDefault();
    const clone = Object.assign({}, defaultInput);
    setInputFields([...inputFields, clone]);
    console.log(inputFields);
  };

  return (
    <button
      className="addButton"
      onClick={(e) => addInputField(e)}
      type="button"
    >
      <i className="fa-sharp fa-solid fa-plus"></i>
    </button>
  );
};

export default Additions;
