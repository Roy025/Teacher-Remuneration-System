import '../Components/TeachersBill/TeachersBill.css';

const Additions = ({ inputFields, defaultInput, setInputFields }) => {
	console.log(inputFields);

	const addInputField = (e) => {
		e.preventDefault();
		const clone = Object.assign({}, defaultInput);

		setInputFields([...inputFields, clone]);
	};

	return (
		<button
			className="btn-outline-success add"
			onClick={addInputField}
			type="button">
			<i className="fa-sharp fa-solid fa-plus"></i>
		</button>
	);
};

export default Additions;