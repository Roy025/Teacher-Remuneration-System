import React, { useEffect, useState } from 'react';
import { useQuery } from "@tanstack/react-query"
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


const DirectorsBill = () => {
  const [selectedSemester, setSelectedSemester] = useState('');
  const [selectedSession, setSelectedSession] = useState('');
  const [selectedChairman, setSelectedChairman] = useState('');
  const [selectedChiefInvigilator, setSelectedChiefInvigilator] = useState('');
  const [selectedMembers, setSelectedMembers] = useState([{
    id: '',
    name: '',
    department: {
      name: "",
      institute: {
        name: '',
        id: ""
      },
      id: ""
    }
  }]);

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
    console.log(newData);
    // setData(newData);
    try {
      const res = await axios.post('/Exam/director', newData,
        {
          headers: {
            // 'Content-Type': 'application/json',
            'Authorization': `Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphaGlyLWNzZUBzdXN0LmVkdSIsInVzZXJJZCI6IjIyMTAwMmVhLWM4OWMtNDg5OC1hMmE3LTQ5MzUwNGU5OWE0NiIsImRlc2lnbmF0aW9uIjoiRGlyZWN0b3IiLCJkZXBhcnRtZW50SWQiOiJkZWIzYjE2Yi1lOTgzLTRiMjAtODdiYS05OTFlNWQ4MWI1NDQiLCJuYmYiOjE2Njg3ODQ3NjQsImV4cCI6MTY3NzQyNDc2NCwiaWF0IjoxNjY4Nzg0NzY0LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo1MDAxIn0.cYrbdFQjlNA7To2bWKYLTl5CaAVSlWa1T3-MbIFHTEz-YZc2YSjd4dwfuw3f1RtTvtEsPZDGYMhXzaQnOBtNpA`
          },
        }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }



    // const res = await axios.post
  }

  // useEffect(() => {
  //   console.log(selectedSession);
  //   console.log(selectedSemester);
  //   console.log(selectedChairman);
  //   console.log(selectedChiefInvigilator);
  //   console.log(selectedMembers);

  // }, [selectedSemester, selectedSession, selectedChairman, selectedChiefInvigilator, selectedMembers]);
  const [institutes, setInstitutes] = useState([]);

  const fetchInstitute = async () => {
    const response = await axios.get("/institute");
    return response;
  };

  useQuery(["institution-list"], async () => {
    const store = await fetchInstitute();
    setInstitutes(store.data.data);
    return store;
  });

  // useEffect(async () => {
  //   console.log(data);
  // }, [data]);

  const fetchPrevData = async () => {
    // console.log(selectedSession, selectedSemester);
    if (selectedSemester && selectedSession) {
      console.log("fetching");
      const res = await axios.get(`/Exam/director?session=${selectedSession}&semester=${selectedSemester}`, {
        headers: {
          // 'Content-Type': 'application/json',
          'Authorization': `Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphaGlyLWNzZUBzdXN0LmVkdSIsInVzZXJJZCI6IjIyMTAwMmVhLWM4OWMtNDg5OC1hMmE3LTQ5MzUwNGU5OWE0NiIsImRlc2lnbmF0aW9uIjoiRGlyZWN0b3IiLCJkZXBhcnRtZW50SWQiOiJkZWIzYjE2Yi1lOTgzLTRiMjAtODdiYS05OTFlNWQ4MWI1NDQiLCJuYmYiOjE2Njg3ODQ3NjQsImV4cCI6MTY3NzQyNDc2NCwiaWF0IjoxNjY4Nzg0NzY0LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo1MDAxIn0.cYrbdFQjlNA7To2bWKYLTl5CaAVSlWa1T3-MbIFHTEz-YZc2YSjd4dwfuw3f1RtTvtEsPZDGYMhXzaQnOBtNpA`
        },
      });
      console.log(res.data.data);
      if (res.data.data) {
        // setSelectedSession(res.data.data.session)
        // setSelectedSemester(res.data.data.semester)
        setSelectedChairman(res.data.data.chairman)
        setSelectedChiefInvigilator(res.data.data.cheifInvigilator)
        setSelectedMembers(res.data.data.members)
        // setData(res.data.data)
      }
    }
  }

  useQuery(["prev-data"], fetchPrevData);

  return (
    <>
      <div>
        <Links />
      </div>

      <div className="FullFormPage">
        <form
          className="Form"
          onSubmit={handleSubmit}
        >
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
            <div className="formRow SubmitRow">
              <button
                type="submit"
                className="submitButton" onClick={save}>
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
