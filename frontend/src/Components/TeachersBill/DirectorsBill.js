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
import HandleSem from '../../Functions/HandleSem';

// const DirectorsBill = () => {
//   const [inputMembers, setMembers] = useState([
//     {
//       id: "",
//       institute: "",
//       department: "",
//       name: "",
//     },
//   ]);
//   const [inputChair, setInputChair] = useState([
//     {
//       id: "",
//       institute: "",
//       department: "",
//       name: "",
//     },
//   ]);
//   const [inputInvi, setInputInvi] = useState([
//     {
//       id: "",
//       institute: "",
//       department: "",
//       name: "",
//     },
//   ]);

//   const localTeacherDB = [
//     {
//       id: "",
//       name: "",
//       email: "",
//       institute: "",
//       department: "",
//       designation: "",
//       image: "",
//     },
//   ];

//   const [data, setData] = useState({
//     session: "",
//     semester: "",
//     chairman: {
//       id: "",
//       institute: "",
//       department: "",
//     },
//     members: [
//       {
//         id: "",
//         institute: "",
//         department: "",
//       },
//     ],
//   })
//   const handleMainData = (property, value) => {
//     const newData = { ...data };
//     newData[property] = value;
//     setData(newData);
//   };
//   // useEffect(() => {
//   //   console.log(data);
//   // }, [data]);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };
//   const [exam, setExam] = useState({
//     session: "",
//     semester: "",
//   });
//   return (
//     <>
//       <div>
//         <Links />
//       </div>

//       <div className="FullFormPage">
//         <form
//           className="Form"
//           onSubmit={handleSubmit}>
//           <div className="DropdownformRow">
//             <div className="FormSubRow">
//               <Dropdown
//                 options={sessionOptions}
//                 dropdownTitle={sessionTitle}
//                 handleData={handleMainData}
//               />
//             </div>

//             <div className="FormSubRow">
//               <Dropdown
//                 options={semesterOptions}
//                 dropdownTitle={semesterTitle}
//                 handleData={handleMainData}
//               />
//             </div>
//           </div>
//           <div className="formRow">
//             <label className="Label">Committee Chairman</label>
//             <ThreeFieldsNoAdd
//               inputFields={inputChair}
//               setInputFields={setInputChair}
//               localTeacherDB={localTeacherDB}
//             />
//           </div>
// {/*
//           <div className="formRow">
//             <label className="Label">Chief Invigilator</label>
//             <ThreeFieldsNoAdd
//               inputFields={inputInvi}
//               setInputFields={setInputInvi}
//               localTeacherDB={localTeacherDB}
//             />
//           </div>

//           <div className="formRow">
//             <label className="Label">Committee Members</label>
//             <ThreeFields
//               inputFields={inputMembers}
//               setInputFields={setMembers}
//               localTeacherDB={localTeacherDB}
//             />
//             <div className="formRow SubmitRow">
//               <button type="submit" className="submitButton">
//                 Submit
//               </button>
//             </div>
//           </div> */}
//         </form>
//       </div>
//     </>
//   );
// };
const DirectorsBill = () => {
  const [inputMembers, setMembers] = useState([
    {
      id: "",
      institute: "",
      department: "",
      name: "",
    },
  ]);
  const [inputChair, setInputChair] = useState([
    {
      id: "",
      institute: "",
      department: "",
      name: "",
    },
  ]);
  const [inputInvi, setInputInvi] = useState([
    {
      id: "",
      institute: "",
      department: "",
      name: "",
    },
  ]);

  const localTeacherDB = [
    {
      id: "",
      name: "",
      email: "",
      institute: "",
      department: "",
      designation: "",
      image: "",
    },
  ];

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
  const [exam, setExam] = useState({
    session: "",
    semester: "",
  });

  // const [threeInputOptions, setThreeInputOptions] = useState({
  //   institutes: ["Shahjalal University of Science and Technology, Sylhet", "Dhaka University", "Khulna University"],
  //   departments: ["Computer Science and Engineering", "Electrical and Electronic Engineering", "Civil Engineering"],
  //   teachers: [{
  //     id: "1",
  //     name: "Dr. Md. Shamsuzzaman",
  //     institute: "Shahjalal University of Science and Technology, Sylhet",
  //     department: "Computer Science and Engineering",
  //   },
  //   {
  //     id: "2",
  //     name: "Dr. Md. Nihal",
  //     institute: "Shahjalal University of Science and Technology, Sylhet",
  //     department: "Computer Science and Engineering",
  //   },
  //   ],
  // });
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
