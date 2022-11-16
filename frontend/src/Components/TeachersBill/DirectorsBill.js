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
  const [data, setData] = useState({
    session: "",
    semester: "",
    chairman: {
      id: "",
    },
    chiefInvigilator: {
      id: "",
    },
    members: [
      {
        id: "",
        institute: "",
        department: "",
      },
    ],
  })

  const handleMainData = (property, value) => {
    const newData = { ...data };
    newData[property] = value;
    setData(newData);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [institutes, setInstitutes] = useState([
    {
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
                handleData={handleMainData}
              />
            </div>

            <div className="FormSubRow">
              <Dropdown
                options={semesterOptions}
                dropdownTitle={semesterTitle}
                handleData={handleMainData}
              />
            </div>
          </div>

          <div className="formRow">
            <label className="Label">Committee Chairman</label>
            <ThreeFieldsNoAdd
              options={institutes}
              propName="chairman"
              handleData={handleMainData}
            />
          </div>

          <div className="formRow">
            <label className="Label">Chief Invigilator</label>
            <ThreeFieldsNoAdd
              options={institutes}
              propName="chiefInvigilator"
              handleData={handleMainData}
            />
          </div>

          <div className="formRow">
            <label className="Label">Committee Members</label>
            <ThreeFields
              options={institutes}
              propName="members"
              handleData={handleMainData}
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
