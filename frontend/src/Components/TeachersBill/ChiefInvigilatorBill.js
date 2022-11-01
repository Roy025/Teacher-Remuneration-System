import Links from './Links';
import './TeachersBill.css';
import Dropdown, {
	semesterOptions,
	semesterTitle,
	sessionTitle,
	sessionOptions,
} from '../SampleDropdown/Dropdown';
import '../SampleDropdown/styles.css';
import HandleSem from '../../Functions/HandleSem';
import { useState } from 'react';
import InvigilationComp from './InvigilationComp';

const ChiefInvigilatorBill = () => {
	const [exam, setExam] = useState({
		session: '',
		semester: '',
	});
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	const submit = async () => {
		console.log(exam);
	};
	return (
		<>
			<Links />
			<div className="column">
				{/* <Links /> */}
				<form
					className="col-md-8 Form"
					onSubmit={handleSubmit}>
					<h1 className="text-center Form-title">Chief Invigilator Bill</h1>
					<div className="Flex-row Form-row">
						<div className="form-group col-md-5 Subrow1">
							<Dropdown
								options={semesterOptions}
								dropdownTitle={semesterTitle}
								handleData={(child) => HandleSem(child, exam, setExam)}
							/>
						</div>
						<div className="form-group col-md-5 Subrow1">
							<Dropdown
								options={sessionOptions}
								dropdownTitle={sessionTitle}
								handleData={(child) => HandleSem(child, exam, setExam)}
							/>
						</div>
					</div>

					<div className="col-md-7">
						<h5>Invigilation</h5>

						<InvigilationComp tag={"Invigilator's name"} />
					</div>
					<div>
						<button
							type="submit"
							onClick={submit}>
							Submit
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default ChiefInvigilatorBill;
