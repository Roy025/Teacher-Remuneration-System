using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Business.Specifications.BillSpecifications;
using Core.DTOs.OtherDTOs;
using Core.Entities;
using Core.Interfaces.Repositories;
using Core.Interfaces.Services;
using Core.Models;

namespace Business.Services
{
    public class BillService : IBillService
    {
        private readonly IUnitOfWork _unitOfWork;
        public BillService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<BillResponseDto> GetBillAsync(BillParams billParams, UserFromToken user)
        {
            billParams.TeacherId = user.UserId;
            var spec = new ExamFetchForBillSpec(billParams);
            var exams = await _unitOfWork.Repository<Exam>().ListAllAsyncWithSpec(spec);
            var bill = new BillResponseDto();

            //QuestionSetting
            var amountForQSetting = 0m;
            foreach (var exam in exams)
            {
                var courses = exam.TheoryCourses.Where(x => x.QuestionSetters.Any(y => y.Id == user.UserId)).ToList();
                foreach (var course in courses)
                {

                    if (course.Course.Type == "Undergrad")
                    {
                        if (course.Course.Credit >= 3 && course.Course.Credit <= 4)
                        {
                            amountForQSetting += 2400;
                        }
                        else
                        {
                            amountForQSetting += 2000;
                        }
                    }
                    else
                    {
                        if (course.Course.Credit >= 3 && course.Course.Credit <= 4)
                        {
                            amountForQSetting += 2800;
                        }
                        else
                        {
                            amountForQSetting += 2400;
                        }
                    }
                }
            }
            bill.QSetting = new BillRow
            {
                Criteria = "Question Setting",
                Amount = (Double)amountForQSetting
            };

            //Question Modifying
            var amountForQMod = 0m;
            foreach (var exam in exams)
            {

                var filteredExam = exam.TheoryCourses.Where(x => x.QuestionModeratorId == user.UserId).ToList();
                Decimal tk = 0m;
                Boolean flag = true;
                foreach (var x in filteredExam)
                {
                    if (x.Course.Type == "Undergrad")
                    {
                        flag = false;
                        if (x.Course.Credit >= 3 && x.Course.Credit <= 4)
                        {
                            tk += 2400;
                        }
                        else
                        {
                            tk += 2000;
                        }
                    }
                    else
                    {
                        if (x.Course.Credit >= 3 && x.Course.Credit <= 4)
                        {
                            tk += 2800;
                        }
                        else
                        {
                            tk += 2400;
                        }
                    }
                }
                if (exam.Members.Count > 0)
                    tk = tk / exam.Members.Count;
                else
                    tk = 0;
                if (!flag)
                {
                    if (tk < 2400) amountForQMod = 2400;
                    else if (tk > 5000) amountForQMod = 5000;
                    else amountForQMod = tk;
                }
                else
                {
                    if (tk < 4800) amountForQMod = 4800;
                    else if (tk > 6000) amountForQMod = 6000;
                    else amountForQMod = tk;
                }

            }
            bill.QMod = new BillRow
            {
                Criteria = "Question moderation",
                Amount = (Double)amountForQMod
            };


            //Answer Checking
            var amountForAnsCheck = 0;
            foreach (var exam in exams)
            {

                var filteredExam = exam.TheoryCourses.Where(x => x.AnswerPaperCheckerPartAId == user.UserId).ToList();
                Double tk = 0;
                Boolean flag = true;
                foreach (var x in filteredExam)
                {
                    if(x.NumberOfExamineePartA == null)
                        x.NumberOfExamineePartA = 0;
                    if (x.Course.Type == "Undergrad")
                    {
                        flag = false;
                        if (x.Course.Credit >= 3 && x.Course.Credit <= 4)
                        {
                            tk += 1.0 * 60.0 * (Double)x.NumberOfExamineePartA;
                        }
                        else
                        {
                            tk += 1.0 * 50.0 * (Double)x.NumberOfExamineePartA;
                        }
                    }
                    else
                    {
                        if (x.Course.Credit >= 3 && x.Course.Credit <= 4)
                        {
                            tk += 1.0 * 80.0 * (Double)x.NumberOfExamineePartA;
                        }
                        else
                        {
                            tk += 1.0 * 50.0 * (Double)x.NumberOfExamineePartA;
                        }
                    }
                }
                if (!flag)
                {
                    if (tk < 600) amountForAnsCheck = 600;
                    else amountForAnsCheck = (int)tk;
                }
                else
                {
                    if (tk < 750) amountForAnsCheck = 750;
                    else amountForAnsCheck = (int)tk;
                }

            }
            foreach (var exam in exams)
            {

                var filteredExam = exam.TheoryCourses.Where(x => x.AnswerPaperCheckerPartBId == user.UserId).ToList();
                Double tk = 0;
                Boolean flag = true;
                foreach (var x in filteredExam)
                {
                    if(x.NumberOfExamineePartB == null)
                        x.NumberOfExamineePartB = 0;
                    if (x.Course.Type == "Undergrad")
                    {
                        flag = false;
                        if (x.Course.Credit >= 3 && x.Course.Credit <= 4)
                        {
                            tk += 1.0 * 60.0 * (Double)x.NumberOfExamineePartB;
                        }
                        else
                        {
                            tk += 1.0 * 50.0 * (Double)x.NumberOfExamineePartB;
                        }
                    }
                    else
                    {
                        if (x.Course.Credit >= 3 && x.Course.Credit <= 4)
                        {
                            tk += 1.0 * 80.0 * (Double)x.NumberOfExamineePartB;
                        }
                        else
                        {
                            tk += 1.0 * 50.0 * (Double)x.NumberOfExamineePartB;
                        }
                    }
                }
                if (!flag)
                {
                    if (tk < 600) amountForAnsCheck += 600;
                    else amountForAnsCheck += (int)tk;
                }
                else
                {
                    if (tk < 750) amountForAnsCheck += 750;
                    else amountForAnsCheck += (int)tk;
                }

            }
            bill.AnsCheck = new BillRow
            {
                Criteria = "Answerpaper checking",
                Amount = amountForAnsCheck
            };

            // termTest
            var amountForTermTest = 0;
            foreach (var exam in exams)
            {

                var filteredExam = exam.TheoryCourses.Where(x => x.TermTestAnswerCheckerId == user.UserId).ToList();
                Double tk = 0;
                Boolean flag = true;
                foreach (var x in filteredExam)
                {
                    if (x.Course.Type == "Undergrad")
                    {
                        flag = false;
                        tk += 1.0 * 30.0 * (Double)x.NumberOfTermTestParticipants + 500;
                    }
                    else
                    {
                        tk += 1.0 * 40.0 * (Double)x.NumberOfTermTestParticipants + 600;
                    }
                }
                // if(tk<900)tk = 900;
                if (flag)
                {
                    if (tk < 1000) tk = 1000;
                }
                else
                {
                    if (tk < 900) tk = 900;
                }
                amountForTermTest += (int)tk;
            }
            bill.TermTest = new BillRow
            {
                Criteria = "Termtest",
                Amount = amountForTermTest
            };

            // Lab
            var amountForLab = 0;
            foreach (var exam in exams)
            {

                var filteredExam = exam.LabCourses.Where(x => x.ExaminerId == user.UserId).ToList();
                Double tk = 0;
                Boolean flag = true;
                foreach (var x in filteredExam)
                {
                    if (x.Course.Type == "Undergrad")
                    {
                        flag = false;
                        tk = tk + 250.0 * (Double)x.Course.Credit * (Double)x.NumberOfRegisteredStudents;
                    }
                    else
                    {
                        tk = tk + 275.0 * (Double)x.Course.Credit * (Double)x.NumberOfRegisteredStudents;
                    }
                }
                if (flag)
                {
                    if (tk < 1400) tk = 1400;
                }
                else
                {
                    if (tk < 1200) tk = 1200;
                }
                amountForLab += (int)tk;
            }
            bill.Practical = new BillRow
            {
                Criteria = "Practical exam",
                Amount = amountForLab
            };

            // Tabulation
            var amountForTabulation = 0;
            foreach (var exam in exams)
            {
                var count = exam.TheoryCourses.FirstOrDefault().NumberOfRegisteredStudents;
                if (count != null)
                {
                    amountForTabulation += (int)count * 100;
                }
            }
            bill.Tabulation = new BillRow
            {
                Criteria = "Tabulation",
                Amount = amountForTabulation
            };

            //Viva
            var amountForViva = 0;
            foreach (var exam in exams)
            {

                var filteredExam = exam.LabCourses.Where(x => x.VivaExaminerId == user.UserId).ToList();
                Double tk = 0;
                Boolean flag = true;
                foreach (var x in filteredExam)
                {
                    if (x.Course.Type == "Undergrad")
                    {
                        flag = false;
                        tk = tk + 60.0 * (Double)x.NumberOfRegisteredStudents;
                    }
                    else
                    {
                        tk = tk + 65.0 * (Double)x.NumberOfRegisteredStudents;
                    }
                }
                if (tk < 750) tk = 750;
                amountForLab += (int)tk;
            }
            bill.Viva = new BillRow
            {
                Criteria = "Viva",
                Amount = amountForViva
            };

            // scrutiny
            var amountForScrutiny = 0;
            foreach (var exam in exams)
            {

                var filteredExam = exam.TheoryCourses.Where(x => x.QuestionScrutinizerPartAId == user.UserId).ToList();
                Double tk = 0;
                Boolean flag = true;
                foreach (var x in filteredExam)
                {
                    if (x.Course.Type == "Undergrad")
                    {
                        flag = false;

                    }
                    tk += 1.0 * 20.0 * (Double)x.NumberOfStudentsScrutinizedPartA;

                }
                if (!flag)
                {
                    if (tk < 800) amountForScrutiny = 800;
                    else amountForScrutiny = (int)tk;
                }
                else
                {
                    if (tk < 1000) amountForScrutiny = 1000;
                    else amountForScrutiny = (int)tk;
                }

            }
            foreach (var exam in exams)
            {

                var filteredExam = exam.TheoryCourses.Where(x => x.QuestionScrutinizerPartBId == user.UserId).ToList();
                Double tk = 0;
                Boolean flag = true;
                foreach (var x in filteredExam)
                {
                    if (x.Course.Type == "Undergrad")
                    {
                        flag = false;

                    }
                    tk += 1.0 * 20.0 * (Double)x.NumberOfStudentsScrutinizedPartB;

                }
                if (!flag)
                {
                    if (tk < 800) amountForScrutiny += 800;
                    else amountForScrutiny = (int)tk;
                }
                else
                {
                    if (tk < 1000) amountForScrutiny += 1000;
                    else amountForScrutiny = (int)tk;
                }

            }
            bill.Scrutiny = new BillRow
            {
                Criteria = "Scrutiny",
                Amount = amountForScrutiny
            };

            // ecm members
            var amountForEcm = 1500;
            foreach (var exam in exams)
            {

                if (exam.ChairmanId == user.UserId)
                {
                    if (exam.TheoryCourses.FirstOrDefault().Course.Type == "Undergrad")
                    {
                        amountForEcm = 3500;
                    }
                    else
                    {
                        amountForEcm = 4000;
                    }
                }
                else if (exam.Members.Any(x => x.Id == user.UserId))
                {
                    if (exam.TheoryCourses.FirstOrDefault().Course.Type == "Undergrad")
                    {
                        amountForEcm = 1500;
                    }
                    else
                    {
                        amountForEcm = 2000;
                    }
                }
            }
            bill.EcmMember = new BillRow
            {
                Criteria = "Exam committee member payment",
                Amount = amountForEcm
            };


            // Question Type
            var amountForQuestionType = 0;
            foreach (var exam in exams)
            {
                var filteredExam = exam.TheoryCourses.Where(x => x.QuestionTyperId == user.UserId).ToList();

                amountForQuestionType += (int)1000 * filteredExam.Count;
            }
            bill.QTyping = new BillRow
            {
                Criteria = "Question typing",
                Amount = amountForQuestionType
            };

            bill.Invi = new BillRow
            {
                Criteria = "Invigilation",
                Amount = 0
            };

            // TermPaper
            Double amountForTermPaper = 0;
            // foreach (var exam in exams)
            // {
            //     var countOfCM = exam.Members.Count;
            //     foreach (var term in exam.TermPapers)
            //     {
            //         Double totalAmount = (Double)term.Course.Credit * 250.0 * (Double)term.NumberOfRegisteredStudents;
            //         if (term.IsIncludedInExamCommittee)
            //         {
            //             totalAmount = (Double)totalAmount*0.4;
            //             amountForTermPaper += ((Double)totalAmount / (Double)countOfCM);
            //         }
            //     }

            // }

            bill.TermPaper = new BillRow
            {
                Criteria = "Field work/ Project/ Term paper/ Seminar/ Monograph/ Thesis",
                Amount = (Double)amountForTermPaper
            };

            return bill;
        }
    }
}