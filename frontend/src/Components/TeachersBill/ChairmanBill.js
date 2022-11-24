import React, { useState } from "react";
import Links from "./Links";
import "./TeachersBill.css";
import "./FormButton.css";
import "../SampleDropdown/styles.css";
import TwoField from "../../Functions/TwoField";
import StudentCount from "../../Functions/StudentCount";
import TermPaperComp from "../../Functions/TermPaperComp";
import ThreeFields from "../../Functions/ThreeFields";
import { useMutation, useQuery } from "@tanstack/react-query";
import { instance as axios } from "../axios";
import DropdownNoTitleTeacher from "../../Functions/DropdownNoTitleTeacher";

const ChairmanBill = () => {
  const [sessionOptions, setSessionOptions] = useState([
    { name: "2016-17" },
    { name: "2017-18" },
    { name: "2018-19" },
    { name: "2019-20" },
    { name: "2020-21" },
  ]);

  const [semesterOptions, setSemesterOptions] = useState([
    { name: "1st" },
    { name: "2nd" },
    { name: "3rd" },
    { name: "4th" },
    { name: "5th" },
    { name: "6th" },
    { name: "7th" },
    { name: "8th" },
  ]);

  const [sessionAvailable, setSessionAvailable] = useState(false);
  const [semesterAvailable, setSemesterAvailable] = useState(false);

  const [exam, setExam] = useState({
    session: "",
    semester: "",
  });
  const [selectedSession, setSelectedSession] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");
  const [listOfInstitutes, setListOfInstitutes] = useState([{}]);
  const [listOfTeachers, setListOfTeachers] = useState([{}]);
  const [listOfCourses, setListOfCourses] = useState([{}]);
  const [listOfQuestionSetters, setListOfQuestionSetters] = useState([
    {
      course: {
        id: "",
        title: "",
        code: "",
      },
      teacher: {
        id: "",
        name: "",
      },
    },
  ]);
  const [listOfQuestionModerators, setListOfQuestionModerators] = useState([
    {
      course: {
        id: "",
        title: "",
        code: "",
      },
      teacher: {
        id: "",
        name: "",
      },
    },
  ]);
  const [listOfAnswerpaperCheckersPartA, setListOfAnswerpaperCheckersPartA] =
    useState([
      {
        course: {
          id: "",
          title: "",
          code: "",
        },
        teacher: {
          id: "",
          name: "",
        },
      },
    ]);
  const [listOfAnswerpaperCheckersPartB, setListOfAnswerpaperCheckersPartB] =
    useState([
      {
        course: {
          id: "",
          title: "",
          code: "",
        },
        teacher: {
          id: "",
          name: "",
        },
      },
    ]);
  const [listOfTermTestAnswerCheckers, setListOfTermTestAnswerCheckers] =
    useState([
      {
        course: {
          id: "",
          title: "",
          code: "",
        },
        teacher: {
          id: "",
          name: "",
        },
      },
    ]);
  const [listOfLabExaminer, setListOfLabExaminer] = useState([
    {
      course: {
        id: "",
        title: "",
        code: "",
      },
      teacher: {
        id: "",
        name: "",
      },
    },
  ]);
  const [listOfTabulators, setListOfTabulators] = useState([
    {
      course: {
        id: "",
        title: "",
        code: "",
      },
      teacher: {
        id: "",
        name: "",
      },
    },
  ]);
  const [listOfVivaExaminers, setListOfVivaExaminers] = useState([
    {
      course: {
        id: "",
        title: "",
        code: "",
      },
      teacher: {
        id: "",
        name: "",
      },
    },
  ]);
  const [listOfScrutinizersPartA, setListOfScrutinizersPartA] = useState([
    {
      course: {
        id: "",
        title: "",
        code: "",
      },
      teacher: {
        id: "",
        name: "",
      },
    },
  ]);
  const [listOfScrutinizersPartB, setListOfScrutinizersPartB] = useState([
    {
      course: {
        id: "",
        title: "",
        code: "",
      },
      teacher: {
        id: "",
        name: "",
      },
    },
  ]);
  const [listOfQuestionTypers, setListOfQuestionTypers] = useState([
    {
      course: {
        id: "",
        title: "",
        code: "",
      },
      teacher: {
        id: "",
        name: "",
      },
    },
  ]);

  const [listOfInvigilators, setListOfInvigilators] = useState([
    { id: "", name: "", department: "", institute: "" },
  ]);

  const [termPaperData, setTermPaperData] = useState([
    {
      course: {
        id: "",
        code: "",
      },
      supervisors: [
        {
          id: "",
          name: "",
        },
      ],
      examiners: [
        {
          id: "",
          name: "",
        },
      ],
      isIncludedInExamCommittee: false,
    },
  ]);

  const [regisretedStudents, setRegisretedStudents] = useState([
    {
      course: {
        id: "",
        code: "",
      },
      numberOfStudents: "",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const submit = async () => {
    const body = {
      session: selectedSession,
      semester: selectedSemester,
      questionSetters: listOfQuestionSetters,
      questionModerators: listOfQuestionModerators,
      answerpaperCheckersPartA: listOfAnswerpaperCheckersPartA,
      answerpaperCheckersPartB: listOfAnswerpaperCheckersPartB,
      termTestAnswerCheckers: listOfTermTestAnswerCheckers,
      labExaminers: listOfLabExaminer,
      tabulators: listOfTabulators,
      vivaExaminers: listOfVivaExaminers,
      scrutinizersPartA: listOfScrutinizersPartA,
      scrutinizersPartB: listOfScrutinizersPartB,
      questionTypers: listOfQuestionTypers,
      invigilators: listOfInvigilators,
      termPaperData: termPaperData,
      registeredStudents: regisretedStudents,
    };

    console.log(body);
  };

  ///Fetching teacher data

  const fetchTeachers = async () => {
    const config = {
      headers: {
        Authorization: localStorage.getItem("accesstoken"),
      },
    };
    const response = await axios.get(
      `/Exam/chairman/teacher?Semester=${selectedSemester}&Session=${selectedSession}`,
      config
    );
    console.log(response);
    setListOfTeachers(response.data.data);
    return response;
  };
  useQuery(["teacher-list"], () => fetchTeachers(), {
    enabled: !!sessionAvailable && !!semesterAvailable,
  });

  //Fetching course data

  const fetchCourse = async () => {
    //console.log(localStorage.getItem("accesstoken"));
    const config = {
      headers: {
        Authorization: localStorage.getItem("accesstoken"),
      },
    };
    const response = await axios.get(
      `/Exam/chairman/course?Semester=${selectedSemester}&Session=${selectedSession}`,
      config
    );
    console.log(response);
    setListOfCourses(response.data.data);
    return response;
  };
  useQuery(["course-list"], () => fetchCourse(), {
    enabled: !!sessionAvailable && !!semesterAvailable,
  });

  //Fetching institute data
  const fetchInstitute = async () => {
    const response = await axios.get("/institute");
    return response;
  };

  useQuery(["institution-list"], async () => {
    const store = await fetchInstitute();
    setListOfInstitutes(store.data.data);
    return store;
  });

  //handle semester and session

  const handleSession = (propName, option) => {
    const newData = { ...exam };
    newData.session = option.name;
    setExam(newData);
    setSessionAvailable(true);
  };

  const handleSemester = (propName, option) => {
    const newData = { ...exam };
    newData.semester = option.name;
    setExam(newData);
    setSemesterAvailable(true);
  };

  //sending data to backend

  const addChairmanInfo = async (info) => {
    console.log(info);
    const config = {
      headers: {
        Authorization: localStorage.getItem("accesstoken"),
      },
    };
    const response = await axios.put("/Exam/chairman", info, config);
    console.log(response);
    return response;
  };

  const {
    mutate: ChairmanMutate,
    isError,
    error,
  } = useMutation(addChairmanInfo, {
    onSuccess: (success) => {
      console.log(success);
      window.location.reload(false);
    },
  });
  if (isError) {
    console.log(error);
  }

  const fetchPrevData = async () => {
    if (selectedSemester && selectedSession) {
      console.log("fetching");
      const res = await axios.get(
        `Exam/chairman?Semester=${selectedSemester}&Session=${selectedSession}`,
        {
          headers: {
            Authorization: localStorage.getItem("accesstoken"),
          },
        }
      );
      console.log(res.data.data);
      if (res.data.data) {
        const examinfo = res.data.data;
        setListOfQuestionSetters(examinfo.questionSetters);
        setListOfQuestionModerators(examinfo.questionModerators);
        setListOfAnswerpaperCheckersPartA(examinfo.answerpaperCheckersPartA);
        setListOfAnswerpaperCheckersPartB(examinfo.answerpaperCheckersPartB);
        setListOfTermTestAnswerCheckers(examinfo.termTestAnswerCheckers);
        setListOfLabExaminer(examinfo.labExaminers);
        setListOfTabulators(examinfo.tabulators);
        setListOfVivaExaminers(examinfo.vivaExaminers);
        setListOfScrutinizersPartA(examinfo.scrutinizersPartA);
        setListOfScrutinizersPartB(examinfo.scrutinizersPartB);
        setListOfQuestionTypers(examinfo.questionTypers);
        setListOfInvigilators(examinfo.invigilators);
        setTermPaperData(examinfo.termPaperData);
        setRegisretedStudents(examinfo.registeredStudents);
        // setData(res.data.data)
      } else {
        setListOfQuestionSetters([
          {
            course: {
              id: "",
              title: "",
              code: "",
            },
            teacher: {
              id: "",
              name: "",
            },
          },
        ]);
        setListOfQuestionModerators([
          {
            course: {
              id: "",
              title: "",
              code: "",
            },
            teacher: {
              id: "",
              name: "",
            },
          },
        ]);
        setListOfAnswerpaperCheckersPartA([
          {
            course: {
              id: "",
              title: "",
              code: "",
            },
            teacher: {
              id: "",
              name: "",
            },
          },
        ]);
        setListOfAnswerpaperCheckersPartB([
          {
            course: {
              id: "",
              title: "",
              code: "",
            },
            teacher: {
              id: "",
              name: "",
            },
          },
        ]);
        setListOfTermTestAnswerCheckers([
          {
            course: {
              id: "",
              title: "",
              code: "",
            },
            teacher: {
              id: "",
              name: "",
            },
          },
        ]);
        setListOfLabExaminer([
          {
            course: {
              id: "",
              title: "",
              code: "",
            },
            teacher: {
              id: "",
              name: "",
            },
          },
        ]);
        setListOfTabulators([
          {
            course: {
              id: "",
              title: "",
              code: "",
            },
            teacher: {
              id: "",
              name: "",
            },
          },
        ]);
        setListOfVivaExaminers([
          {
            course: {
              id: "",
              title: "",
              code: "",
            },
            teacher: {
              id: "",
              name: "",
            },
          },
        ]);
        setListOfScrutinizersPartA([
          {
            course: {
              id: "",
              title: "",
              code: "",
            },
            teacher: {
              id: "",
              name: "",
            },
          },
        ]);
        setListOfScrutinizersPartB([
          {
            course: {
              id: "",
              title: "",
              code: "",
            },
            teacher: {
              id: "",
              name: "",
            },
          },
        ]);
        setListOfQuestionTypers([
          {
            course: {
              id: "",
              title: "",
              code: "",
            },
            teacher: {
              id: "",
              name: "",
            },
          },
        ]);
        setListOfInvigilators([
          { id: "", name: "", department: "", institute: "" },
        ]);
        setTermPaperData([
          {
            course: {
              id: "",
              code: "",
            },
            supervisors: [
              {
                id: "",
                name: "",
              },
            ],
            examiners: [
              {
                id: "",
                name: "",
              },
            ],
            isIncludedInExamCommittee: false,
          },
        ]);
        setRegisretedStudents([
          {
            course: {
              id: "",
              code: "",
            },
            numberOfStudents: "",
          },
        ]);
      }
    }
  };

  return (
    <>
      <div>
        <Links />
      </div>
      <div className="FullFormPage">
        <form className="Form" onSubmit={handleSubmit}>
          <div className="DropdownformRow">
            <div className="FormSubRow">
              <label className="Label">Session</label>
              <DropdownNoTitleTeacher
                options={sessionOptions}
                propName="session"
                handleData={handleSession}
                selected={selectedSession}
                setSelected={setSelectedSession}
              />
            </div>
            <div className="FormSubRow">
              <label className="Label">Semester</label>
              <DropdownNoTitleTeacher
                options={semesterOptions}
                propName="semester"
                handleData={handleSemester}
                selected={selectedSemester}
                setSelected={setSelectedSemester}
              />
            </div>
          </div>

          <div className="formRow">
            <label className="Label"> Question Setting</label>
            <TwoField
              courses={listOfCourses}
              teachers={listOfTeachers}
              existingData={listOfQuestionSetters}
              setExistingData={setListOfQuestionSetters}
            />
          </div>

          <div className="formRow">
            <label className="Label"> Question Moderation</label>
            <TwoField
              courses={listOfCourses}
              teachers={listOfTeachers}
              existingData={listOfQuestionModerators}
              setExistingData={setListOfQuestionModerators}
            />
          </div>

          <div className="formRow">
            <label className="Label">Answerpaper Checking</label>
            <h4 className="subLabel">Part - A</h4>
            <TwoField
              courses={listOfCourses}
              teachers={listOfTeachers}
              existingData={listOfAnswerpaperCheckersPartA}
              setExistingData={setListOfAnswerpaperCheckersPartA}
            />

            <h4 className="subLabel">Part - B</h4>
            <TwoField
              courses={listOfCourses}
              teachers={listOfTeachers}
              existingData={listOfAnswerpaperCheckersPartB}
              setExistingData={setListOfAnswerpaperCheckersPartB}
            />
          </div>

          <div className="formRow">
            <label className="Label">Term Test / Internal Assessment</label>
            <TwoField
              courses={listOfCourses}
              teachers={listOfTeachers}
              existingData={listOfTermTestAnswerCheckers}
              setExistingData={setListOfTermTestAnswerCheckers}
            />
          </div>

          <div className="formRow">
            <label className="Label">
              Practical Exam / Sessional Assessment / LAB
            </label>
            <TwoField
              courses={listOfCourses}
              teachers={listOfTeachers}
              existingData={listOfLabExaminer}
              setExistingData={setListOfLabExaminer}
            />
          </div>

          <div className="formRow">
            <label className="Label">Tabulation</label>
            <TwoField
              courses={listOfCourses}
              teachers={listOfTeachers}
              existingData={listOfTabulators}
              setExistingData={setListOfTabulators}
            />
          </div>

          <div className="formRow">
            <label className="Label">Viva</label>
            <TwoField
              courses={listOfCourses}
              teachers={listOfTeachers}
              existingData={listOfVivaExaminers}
              setExistingData={setListOfVivaExaminers}
            />
          </div>

          <div className="formRow">
            <label className="Label">Scrutiny</label>
            <h4 className="subLabel">Part - A</h4>
            <TwoField
              courses={listOfCourses}
              teachers={listOfTeachers}
              existingData={listOfScrutinizersPartA}
              setExistingData={setListOfScrutinizersPartA}
            />
            <h4 className="subLabel">Part - B</h4>
            <TwoField
              courses={listOfCourses}
              teachers={listOfTeachers}
              existingData={listOfScrutinizersPartB}
              setExistingData={setListOfScrutinizersPartB}
            />
          </div>

          <div className="formRow">
            <label className="Label">
              Term Paper / Seminar Paper / Field Work / MonoGraph / Study Tour /
              Content Analysis / Workshop / Project / Thesis(Under-graduate) /
              Internship / Research Planning
            </label>
            <TermPaperComp
              options={listOfCourses}
              existingData={termPaperData}
              setExistingData={setTermPaperData}
              teacherList={listOfTeachers}
            />
          </div>

          <div className="formRow">
            <label className="Label">Question Type</label>
            <TwoField
              courses={listOfCourses}
              teachers={listOfTeachers}
              existingData={listOfQuestionTypers}
              setExistingData={setListOfQuestionTypers}
            />
          </div>

              {/* <div className="formRow">
                <label className="Label">Invigilation</label>
                <ThreeFields
                  options={listOfInstitutes}
                  propName="members"
                  existingData={listOfInvigilators}
                  setExistingData={setListOfInvigilators}
                />
              </div> */}

          {/* <div className="formRow">
            <label className="Label">Thesis(Post-graduate)</label>
            <ThesisComp
              inputVivaBoard={inputVivaBoard}
              setVivaBoard={setVivaBoard}
              inputThesisSuper={inputThesisSuper}
              setThesisSuper={setThesisSuper}
              inputThesisCoSuper={inputThesisCoSuper}
              setThesisCoSuper={setThesisCoSuper}
              inputThesisAssess={inputThesisAssess}
              setThesisAssess={setThesisAssess}
              inputThesisManagers={inputThesisManagers}
              setThesisManagers={setThesisManagers}
              localTeacherDB={localTeacherDB}
            />
          </div> */}

          <div className="formRow">
            <label className="Label">Student Registration</label>
            <StudentCount
              options={listOfCourses}
              existingData={regisretedStudents}
              setExistingData={setRegisretedStudents}
            />
          </div>

          <div className="formRow SubmitRow">
            <button
              type="submit"
              className="submitButton"
              onClick={() =>
                ChairmanMutate({
                  session: selectedSession,
                  semester: selectedSemester,
                  questionSetters:
                    listOfQuestionSetters[0].course.id === ""
                      ? undefined
                      : listOfQuestionSetters,
                  questionModerators:
                    listOfQuestionModerators[0].course.id === ""
                      ? undefined
                      : listOfQuestionModerators,
                  answerpaperCheckersPartA:
                    listOfAnswerpaperCheckersPartA[0].course.id === ""
                      ? undefined
                      : listOfAnswerpaperCheckersPartA,
                  answerpaperCheckersPartB:
                    listOfAnswerpaperCheckersPartB[0].course.id === ""
                      ? undefined
                      : listOfAnswerpaperCheckersPartB,
                  termTestAnswerCheckers:
                    listOfTermTestAnswerCheckers[0].course.id === ""
                      ? undefined
                      : listOfTermTestAnswerCheckers,
                  labExaminers:
                    listOfLabExaminer[0].course.id === ""
                      ? undefined
                      : listOfLabExaminer,
                  tabulators:
                    listOfTabulators[0].course.id === ""
                      ? undefined
                      : listOfTabulators,
                  vivaExaminers:
                    listOfVivaExaminers[0].course.id === ""
                      ? undefined
                      : listOfVivaExaminers,
                  scrutinizersPartA:
                    listOfScrutinizersPartA[0].course.id === ""
                      ? undefined
                      : listOfScrutinizersPartA,
                  scrutinizersPartB:
                    listOfScrutinizersPartB[0].course.id === ""
                      ? undefined
                      : listOfScrutinizersPartB,
                  questionTypers:
                    listOfQuestionTypers[0].course.id === ""
                      ? undefined
                      : listOfQuestionTypers,
                  invigilators:
                    listOfInvigilators[0].id === ""
                      ? undefined
                      : listOfInvigilators,
                  termPaperData:
                    termPaperData[0].course.id === ""
                      ? undefined
                      : termPaperData,
                  registeredStudents:
                    regisretedStudents[0].course.id === ""
                      ? undefined
                      : regisretedStudents,
                })
              }
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChairmanBill;
