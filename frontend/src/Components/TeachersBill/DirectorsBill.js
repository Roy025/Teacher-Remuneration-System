import React, { useEffect, useState } from 'react';
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


const DirectorsBill = () => {
  const [selectedSemester, setSelectedSemester] = useState('');
  const [selectedSession, setSelectedSession] = useState('');
  const [selectedChairman, setSelectedChairman] = useState('');
  const [selectedChiefInvigilator, setSelectedChiefInvigilator] = useState('');
  const [selectedMembers, setSelectedMembers] = useState([]);

  const [data, setData] = useState({
    session: "",
    semester: "",
    chairman: {
      id: "",
      name: "Nihal",
      institute: "SUST",
      department: "SWE",
    },
    chiefInvigilator: {
      id: "",
      name: "Nihal",
      institute: "SUST",
      department: "CSE",
    },
    members: [
      {
        id: "",
        name: "Muna",
        institute: "SUST",
        department: "CSE",
      },
      {
        id: "",
        name: "Nijhum",
        institute: "SUST",
        department: "CSE",
      },
    ],
  })

  // const handleMainData = (property, value) => {
  //   const newData = { ...data };
  //   newData[property] = value;
  //   setData(newData);
  // };

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleSubmit = (e) => {
    const newData = { ...data };
    newData.session = selectedSession;
    newData.semester = selectedSemester;
    newData.chairman = selectedChairman;
    newData.chiefInvigilator = selectedChiefInvigilator;
    newData.members = selectedMembers;
    setData(newData);
    e.preventDefault();
  };


  const [institutes, setInstitutes] = useState([
    {
      id: 101,
      name: "Shahjalal University of Science and Technology",
      departments: [
        {
          name: "Computer Science and Engineering",
          teachers: [
            {
              id: "1",
              name: "Dr. Md. Shamsuzzaman",
            },
            {
              id: "2",
              name: "Dr. Md. Nihal",
            },
          ]
        }
      ],
    }
  ]);

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
              />
            </div>

            <div className="FormSubRow">
              <Dropdown
                options={semesterOptions}
                dropdownTitle={semesterTitle}
                selected={selectedSemester}
                setSelected={setSelectedSemester}
              />
            </div>
          </div>

          <div className="formRow">
            <label className="Label">Committee Chairman</label>
            <ThreeFieldsNoAdd
              options={institutes}
              propName="chairman"
              existingData={data.chairman}
              setExistingData={setSelectedChairman}
            />
          </div>

          <div className="formRow">
            <label className="Label">Chief Invigilator</label>
            <ThreeFieldsNoAdd
              options={institutes}
              propName="chiefInvigilator"
              existingData={data.chiefInvigilator}
              setExistingData={setSelectedChiefInvigilator}
            />
          </div>

          <div className="formRow">
            <label className="Label">Committee Members</label>
            <ThreeFields
              options={institutes}
              propName="members"
              existingData={data.members}
              setExistingData={setSelectedMembers}
            />
            <div className="formRow SubmitRow">
              <button type="submit" className="submitButton">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default DirectorsBill;
