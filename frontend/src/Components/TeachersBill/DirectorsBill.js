import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Links from './Links';
import './TeachersBill.css';
import './FormButton.css';

import Dropdown, {
	semesterOptions,
	semesterTitle,
	sessionTitle,
	sessionOptions,
} from '../SampleDropdown/Dropdown';
import '../SampleDropdown/styles.css';
import ThreeFieldsNoAdd from '../../Functions/ThreeFieldsNoAdd';
import ThreeFields from '../../Functions/ThreeFields';
import { instance as axios } from '../axios';
import DropdownNoTitleTeacher from '../../Functions/DropdownNoTitleTeacher';
const DirectorsBill = () => {
	const [selectedSemester, setSelectedSemester] = useState('');
	const [selectedSession, setSelectedSession] = useState('');
	const [selectedChairman, setSelectedChairman] = useState('');
	const [selectedChiefInvigilator, setSelectedChiefInvigilator] = useState('');
	const [selectedCourses, setSelectedCourses] = useState([{}]);
	const [courses, setCourses] = useState([""]);
	const [courseList, setCourseList] = useState([{
		id: "1",
		code: "Swe123",
	},
		{
			id: "2",
			code: "swe111"
	}]);
	const [selectedMembers, setSelectedMembers] = useState([
		{
			id: '',
			name: '',
			department: {
				name: '',
				institute: {
					name: '',
					id: '',
				},
				id: '',
			},
		},
	]);

	// const [data, setData] = useState({
	//   session: "",
	//   semester: "",
	//   chairman: {
	//     id: "",
	//     name: "",
	//     institute: "",
	//     department: "",
	//   },
	//   cheifInvigilator: {
	//     id: "",
	//     name: "",
	//     institute: "",
	//     department: "",
	//   },
	//   members: [
	//     {
	//       id: "",
	//       name: "",
	//       institute: "",
	//       department: "",
	//     },
	//   ],
	// })

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const save = async () => {
		const newData = {};
		// const newData = { ...data };
		console.log(selectedSession);
		newData.session = selectedSession;
		newData.semester = selectedSemester;
		newData.chairman = selectedChairman;
		newData.cheifInvigilator = selectedChiefInvigilator;
		newData.members = selectedMembers;
		newData.courses = selectedCourses;
		console.log(newData);
		setSelectedSession('');
		setSelectedSemester('');
		setSelectedChairman('');
		setSelectedChiefInvigilator('');
		setSelectedMembers([
			{
				id: '',
				name: '',
				department: {
					name: '',
					institute: {
						name: '',
						id: '',
					},
					id: '',
				},
			},
		]);
		// setData(newData);
		try {
			const res = await axios.post('/Exam/director', newData, {
				headers: {
					// 'Content-Type': 'application/json',
					Authorization: `Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFoc2FuLWlpY3RAc3VzdC5lZHUiLCJ1c2VySWQiOiJkMDA2YzlmMC1lNWRmLTQ2MDQtYWZkNS1iNzRlNTc2NTVlMDkiLCJyb2xlIjoiRGlyZWN0b3IiLCJkZXBhcnRtZW50SWQiOiJmYzUwZjJkOC0yZDRhLTRiYzctOGNkNy02ZGY5OTU1YjRiMzIiLCJuYmYiOjE2Njg4Njg4MjksImV4cCI6MTY3NzUwODgyOSwiaWF0IjoxNjY4ODY4ODI5LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo1MDAxIn0.JJZpdw6zrX_5SUQeeZpRpNd3N-HGfhpbHtWHkinS3L1SXF7gQKq1piPpKqSp-N9F7QW_mDF36Hi9z778AtzPEw`,
				},
			});
			console.log(res);
		} catch (error) {
			console.log(error);
		}

		// const res = await axios.post
	};

	const [institutes, setInstitutes] = useState([]);

	const fetchInstitute = async () => {
		const response = await axios.get('/institute');
		return response;
	};
	const departmentId = 'deb3b16b-e983-4b20-87ba-991e5d81b544';
	const fetchCourse = async () => {
		const response = await axios.get(`/course?departmentId=${departmentId}`);
		return response;
	};

	useQuery(['institution-list'], async () => {
		const store = await fetchCourse();
		setCourseList(store.data.data);
		return store;
	});

	useQuery(['course-list'], async () => {
		const store = await fetchInstitute();
		setInstitutes(store.data.data);
		return store;
	});



	const handleCourses = (propName, option, index) => {
		const newCourses = [...selectedCourses];
		newCourses[index] = option;
		setSelectedCourses(newCourses);
	}

	const removeInputFields = (evnt, index) => {
		const values = [...selectedCourses];
		values.splice(index, 1);
		setSelectedCourses(values);

		const tmp = [...courses];
		tmp.splice(index, 1);
		setCourses(tmp);
	}
	const addInputField = () => {
		setCourses([...courses, ""]);
		setSelectedCourses([...selectedCourses, {
			id: '',
			code: '',
		}]);
	}

	const fetchPrevData = async () => {
		if (selectedSemester && selectedSession) {
			console.log('fetching');
			const res = await axios.get(
				`/Exam/director?session=${selectedSession}&semester=${selectedSemester}`,
				{
					headers: {
						// 'Content-Type': 'application/json',
						Authorization: `Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFoc2FuLWlpY3RAc3VzdC5lZHUiLCJ1c2VySWQiOiJkMDA2YzlmMC1lNWRmLTQ2MDQtYWZkNS1iNzRlNTc2NTVlMDkiLCJyb2xlIjoiRGlyZWN0b3IiLCJkZXBhcnRtZW50SWQiOiJmYzUwZjJkOC0yZDRhLTRiYzctOGNkNy02ZGY5OTU1YjRiMzIiLCJuYmYiOjE2Njg4Njg4MjksImV4cCI6MTY3NzUwODgyOSwiaWF0IjoxNjY4ODY4ODI5LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo1MDAxIn0.JJZpdw6zrX_5SUQeeZpRpNd3N-HGfhpbHtWHkinS3L1SXF7gQKq1piPpKqSp-N9F7QW_mDF36Hi9z778AtzPEw`,
					},
				}
			);
			console.log(res.data.data);
			if (res.data.data) {
				setSelectedChairman(res.data.data.chairman);
				setSelectedChiefInvigilator(res.data.data.cheifInvigilator);
				setSelectedMembers(res.data.data.members);
				setSelectedCourses(res.data.data.courses);
				setCourses(res.data.data.courses.map((course) => course.code));
				// setData(res.data.data)
			} else {
				setSelectedChairman('');
				setSelectedChiefInvigilator('');
				setSelectedMembers([
					{
						id: '',
						name: '',
						department: {
							name: '',
							institute: {
								name: '',
								id: '',
							},
							id: '',
						},
					},
				]);
				setSelectedCourses([{}]);
			}
		}
	};
	useEffect(() => {
		fetchPrevData();
	}, [selectedSession, selectedSemester]);
	return (
		<>
			<div>
				<Links />
			</div>

			<div className="FullFormPage">
				<form
					className="Form"
					onSubmit={handleSubmit}>
					<div className="DropdownformRow">
						<div className="FormSubRow">
							<Dropdown
								options={sessionOptions}
								dropdownTitle={sessionTitle}
								selected={selectedSession}
								setSelected={setSelectedSession}
								handleData={fetchPrevData}
							/>
						</div>

						<div className="FormSubRow">
							<Dropdown
								options={semesterOptions}
								dropdownTitle={semesterTitle}
								selected={selectedSemester}
								setSelected={setSelectedSemester}
								handleData={fetchPrevData}
							/>
						</div>
					</div>

					<div className="formRow">
						<label className="Label">Committee Chairman</label>
						<ThreeFieldsNoAdd
							options={institutes}
							propName="chairman"
							existingData={selectedChairman}
							setExistingData={setSelectedChairman}
						/>
					</div>

					<div className="formRow">
						<label className="Label">Chief Invigilator</label>
						<ThreeFieldsNoAdd
							options={institutes}
							propName="chiefInvigilator"
							existingData={selectedChiefInvigilator}
							setExistingData={setSelectedChiefInvigilator}
						/>
					</div>

					<div className="formRow">
						<label className="Label">Committee Members</label>
						<ThreeFields
							options={institutes}
							propName="members"
							existingData={selectedMembers}
							setExistingData={setSelectedMembers}
						/>
					</div>

					<label className="Label">Courses</label>
					{courses.map((course, index) => {
						return (
							<div>
								<div className="threeFormRowElement">
									<DropdownNoTitleTeacher
										options={courseList}
										propName="course"
										selected={courses}
										setSelected={setCourses}
										handleData={handleCourses}
										index={index}
									/>
									{courses.length !== 1 && (
										<div className="FormRowElement">
											<button
												className={`crossButton ${index === 0 && "crossButton-first"}`}
												onClick={(evnt) => removeInputFields(evnt, index)}
											>x</button>
										</div>
									)}
								</div>
								{courses.length - 1 === index && (
									<div className="FormRowElement">
										<button
											className="addButton"
											onClick={() => addInputField()}
											type="button"
										>
											<i className="fa-sharp fa-solid fa-plus "></i>
										</button>
									</div>
								)}
							</div>

						)
					})}
					<div className="formRow SubmitRow">
						<button
							type="submit"
							className="submitButton"
							onClick={save}>
							Submit
						</button>
					</div>
				</form>
			</div >
		</>
	);
};

export default DirectorsBill;
