using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Business.Data.Migrations
{
    public partial class InitialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Admins",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: true),
                    Email = table.Column<string>(type: "text", nullable: false),
                    Password = table.Column<string>(type: "text", nullable: false),
                    Role = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Admins", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Institutes",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    ShortName = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Institutes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Departments",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    ShortName = table.Column<string>(type: "text", nullable: true),
                    InstituteId = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Departments", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Departments_Institutes_InstituteId",
                        column: x => x.InstituteId,
                        principalTable: "Institutes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Courses",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    DepartmentId = table.Column<Guid>(type: "uuid", nullable: false),
                    Code = table.Column<string>(type: "character varying(7)", maxLength: 7, nullable: false),
                    Title = table.Column<string>(type: "text", nullable: false),
                    Credit = table.Column<decimal>(type: "numeric", nullable: false),
                    Type = table.Column<string>(type: "text", nullable: false),
                    Level = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Courses", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Courses_Departments_DepartmentId",
                        column: x => x.DepartmentId,
                        principalTable: "Departments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Students",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: true),
                    RegistraionNo = table.Column<string>(type: "text", nullable: false),
                    DepartmentId = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Students", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Students_Departments_DepartmentId",
                        column: x => x.DepartmentId,
                        principalTable: "Departments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Teachers",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: true),
                    Email = table.Column<string>(type: "text", nullable: false),
                    Role = table.Column<string>(type: "text", nullable: true),
                    Password = table.Column<string>(type: "text", nullable: false),
                    DepartmentId = table.Column<Guid>(type: "uuid", nullable: false),
                    BankAccount = table.Column<string>(type: "text", nullable: true),
                    Designation = table.Column<string>(type: "text", nullable: false),
                    Image = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Teachers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Teachers_Departments_DepartmentId",
                        column: x => x.DepartmentId,
                        principalTable: "Departments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Exams",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    DepartmentId = table.Column<Guid>(type: "uuid", nullable: false),
                    Session = table.Column<string>(type: "text", nullable: false),
                    Semester = table.Column<string>(type: "text", nullable: false),
                    ChairmanId = table.Column<Guid>(type: "uuid", nullable: false),
                    CheifInvigilatorId = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Exams", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Exams_Departments_DepartmentId",
                        column: x => x.DepartmentId,
                        principalTable: "Departments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Exams_Teachers_ChairmanId",
                        column: x => x.ChairmanId,
                        principalTable: "Teachers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Exams_Teachers_CheifInvigilatorId",
                        column: x => x.CheifInvigilatorId,
                        principalTable: "Teachers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ExamTeacher",
                columns: table => new
                {
                    ExamsId = table.Column<Guid>(type: "uuid", nullable: false),
                    MembersId = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ExamTeacher", x => new { x.ExamsId, x.MembersId });
                    table.ForeignKey(
                        name: "FK_ExamTeacher_Exams_ExamsId",
                        column: x => x.ExamsId,
                        principalTable: "Exams",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ExamTeacher_Teachers_MembersId",
                        column: x => x.MembersId,
                        principalTable: "Teachers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Invigilators",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    ExamId = table.Column<Guid>(type: "uuid", nullable: false),
                    TeacherId = table.Column<Guid>(type: "uuid", nullable: false),
                    CourseId = table.Column<Guid>(type: "uuid", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Invigilators", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Invigilators_Courses_CourseId",
                        column: x => x.CourseId,
                        principalTable: "Courses",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Invigilators_Exams_ExamId",
                        column: x => x.ExamId,
                        principalTable: "Exams",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Invigilators_Teachers_TeacherId",
                        column: x => x.TeacherId,
                        principalTable: "Teachers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LabCoursesResponsibles",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    ExamId = table.Column<Guid>(type: "uuid", nullable: false),
                    CourseId = table.Column<Guid>(type: "uuid", nullable: false),
                    ExaminerId = table.Column<Guid>(type: "uuid", nullable: true),
                    TabulatorId = table.Column<Guid>(type: "uuid", nullable: true),
                    VivaExaminerId = table.Column<Guid>(type: "uuid", nullable: true),
                    NumberOfRegisteredStudents = table.Column<int>(type: "integer", nullable: true),
                    NumberOfExaminee = table.Column<int>(type: "integer", nullable: true),
                    NumberOfVivaParticipants = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LabCoursesResponsibles", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LabCoursesResponsibles_Courses_CourseId",
                        column: x => x.CourseId,
                        principalTable: "Courses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_LabCoursesResponsibles_Exams_ExamId",
                        column: x => x.ExamId,
                        principalTable: "Exams",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_LabCoursesResponsibles_Teachers_ExaminerId",
                        column: x => x.ExaminerId,
                        principalTable: "Teachers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_LabCoursesResponsibles_Teachers_TabulatorId",
                        column: x => x.TabulatorId,
                        principalTable: "Teachers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_LabCoursesResponsibles_Teachers_VivaExaminerId",
                        column: x => x.VivaExaminerId,
                        principalTable: "Teachers",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "TermPaperResponsibilities",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    CourseId = table.Column<Guid>(type: "uuid", nullable: false),
                    TabulatorId = table.Column<Guid>(type: "uuid", nullable: true),
                    IsIncludedInExamCommittee = table.Column<bool>(type: "boolean", nullable: false),
                    NumberOfRegisteredStudents = table.Column<int>(type: "integer", nullable: true),
                    ExamId = table.Column<Guid>(type: "uuid", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TermPaperResponsibilities", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TermPaperResponsibilities_Courses_CourseId",
                        column: x => x.CourseId,
                        principalTable: "Courses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_TermPaperResponsibilities_Exams_ExamId",
                        column: x => x.ExamId,
                        principalTable: "Exams",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_TermPaperResponsibilities_Teachers_TabulatorId",
                        column: x => x.TabulatorId,
                        principalTable: "Teachers",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "TheoryCoursesResponsibles",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    ExamId = table.Column<Guid>(type: "uuid", nullable: false),
                    CourseId = table.Column<Guid>(type: "uuid", nullable: false),
                    QuestionModeratorId = table.Column<Guid>(type: "uuid", nullable: true),
                    AnswerPaperCheckerPartAId = table.Column<Guid>(type: "uuid", nullable: true),
                    AnswerPaperCheckerPartBId = table.Column<Guid>(type: "uuid", nullable: true),
                    TermTestAnswerCheckerId = table.Column<Guid>(type: "uuid", nullable: true),
                    TabulatorId = table.Column<Guid>(type: "uuid", nullable: true),
                    QuestionScrutinizerPartAId = table.Column<Guid>(type: "uuid", nullable: true),
                    QuestionScrutinizerPartBId = table.Column<Guid>(type: "uuid", nullable: true),
                    QuestionTyperId = table.Column<Guid>(type: "uuid", nullable: true),
                    NumberOfRegisteredStudents = table.Column<int>(type: "integer", nullable: true),
                    NumberOfExamineePartA = table.Column<int>(type: "integer", nullable: true),
                    NumberOfExamineePartB = table.Column<int>(type: "integer", nullable: true),
                    NumberOfTermTestParticipants = table.Column<int>(type: "integer", nullable: true),
                    NumberOfVivaParticipants = table.Column<int>(type: "integer", nullable: true),
                    NumberOfStudentsScrutinizedPartA = table.Column<int>(type: "integer", nullable: true),
                    NumberOfStudentsScrutinizedPartB = table.Column<int>(type: "integer", nullable: true),
                    NumberOfPracticalExamParticipants = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TheoryCoursesResponsibles", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TheoryCoursesResponsibles_Courses_CourseId",
                        column: x => x.CourseId,
                        principalTable: "Courses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_TheoryCoursesResponsibles_Exams_ExamId",
                        column: x => x.ExamId,
                        principalTable: "Exams",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_TheoryCoursesResponsibles_Teachers_AnswerPaperCheckerPartAId",
                        column: x => x.AnswerPaperCheckerPartAId,
                        principalTable: "Teachers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_TheoryCoursesResponsibles_Teachers_AnswerPaperCheckerPartBId",
                        column: x => x.AnswerPaperCheckerPartBId,
                        principalTable: "Teachers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_TheoryCoursesResponsibles_Teachers_QuestionModeratorId",
                        column: x => x.QuestionModeratorId,
                        principalTable: "Teachers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_TheoryCoursesResponsibles_Teachers_QuestionScrutinizerPartA~",
                        column: x => x.QuestionScrutinizerPartAId,
                        principalTable: "Teachers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_TheoryCoursesResponsibles_Teachers_QuestionScrutinizerPartB~",
                        column: x => x.QuestionScrutinizerPartBId,
                        principalTable: "Teachers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_TheoryCoursesResponsibles_Teachers_QuestionTyperId",
                        column: x => x.QuestionTyperId,
                        principalTable: "Teachers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_TheoryCoursesResponsibles_Teachers_TabulatorId",
                        column: x => x.TabulatorId,
                        principalTable: "Teachers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_TheoryCoursesResponsibles_Teachers_TermTestAnswerCheckerId",
                        column: x => x.TermTestAnswerCheckerId,
                        principalTable: "Teachers",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "TeacherTermPaperResponsibilities",
                columns: table => new
                {
                    SupervisorOfTermPapersId = table.Column<Guid>(type: "uuid", nullable: false),
                    SupervisorsId = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TeacherTermPaperResponsibilities", x => new { x.SupervisorOfTermPapersId, x.SupervisorsId });
                    table.ForeignKey(
                        name: "FK_TeacherTermPaperResponsibilities_Teachers_SupervisorsId",
                        column: x => x.SupervisorsId,
                        principalTable: "Teachers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_TeacherTermPaperResponsibilities_TermPaperResponsibilities_~",
                        column: x => x.SupervisorOfTermPapersId,
                        principalTable: "TermPaperResponsibilities",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "TeacherTermPaperResponsibilities1",
                columns: table => new
                {
                    ExaminerOfTermPapersId = table.Column<Guid>(type: "uuid", nullable: false),
                    ExaminersId = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TeacherTermPaperResponsibilities1", x => new { x.ExaminerOfTermPapersId, x.ExaminersId });
                    table.ForeignKey(
                        name: "FK_TeacherTermPaperResponsibilities1_Teachers_ExaminersId",
                        column: x => x.ExaminersId,
                        principalTable: "Teachers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_TeacherTermPaperResponsibilities1_TermPaperResponsibilities~",
                        column: x => x.ExaminerOfTermPapersId,
                        principalTable: "TermPaperResponsibilities",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "TeacherTheoryCourseResponsibles",
                columns: table => new
                {
                    QuestionSettersId = table.Column<Guid>(type: "uuid", nullable: false),
                    QuestionSettersOfCoursesId = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TeacherTheoryCourseResponsibles", x => new { x.QuestionSettersId, x.QuestionSettersOfCoursesId });
                    table.ForeignKey(
                        name: "FK_TeacherTheoryCourseResponsibles_Teachers_QuestionSettersId",
                        column: x => x.QuestionSettersId,
                        principalTable: "Teachers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_TeacherTheoryCourseResponsibles_TheoryCoursesResponsibles_Q~",
                        column: x => x.QuestionSettersOfCoursesId,
                        principalTable: "TheoryCoursesResponsibles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Courses_DepartmentId",
                table: "Courses",
                column: "DepartmentId");

            migrationBuilder.CreateIndex(
                name: "IX_Departments_InstituteId",
                table: "Departments",
                column: "InstituteId");

            migrationBuilder.CreateIndex(
                name: "IX_Exams_ChairmanId",
                table: "Exams",
                column: "ChairmanId");

            migrationBuilder.CreateIndex(
                name: "IX_Exams_CheifInvigilatorId",
                table: "Exams",
                column: "CheifInvigilatorId");

            migrationBuilder.CreateIndex(
                name: "IX_Exams_DepartmentId",
                table: "Exams",
                column: "DepartmentId");

            migrationBuilder.CreateIndex(
                name: "IX_ExamTeacher_MembersId",
                table: "ExamTeacher",
                column: "MembersId");

            migrationBuilder.CreateIndex(
                name: "IX_Institutes_Name",
                table: "Institutes",
                column: "Name",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Invigilators_CourseId",
                table: "Invigilators",
                column: "CourseId");

            migrationBuilder.CreateIndex(
                name: "IX_Invigilators_ExamId",
                table: "Invigilators",
                column: "ExamId");

            migrationBuilder.CreateIndex(
                name: "IX_Invigilators_TeacherId",
                table: "Invigilators",
                column: "TeacherId");

            migrationBuilder.CreateIndex(
                name: "IX_LabCoursesResponsibles_CourseId",
                table: "LabCoursesResponsibles",
                column: "CourseId");

            migrationBuilder.CreateIndex(
                name: "IX_LabCoursesResponsibles_ExamId",
                table: "LabCoursesResponsibles",
                column: "ExamId");

            migrationBuilder.CreateIndex(
                name: "IX_LabCoursesResponsibles_ExaminerId",
                table: "LabCoursesResponsibles",
                column: "ExaminerId");

            migrationBuilder.CreateIndex(
                name: "IX_LabCoursesResponsibles_TabulatorId",
                table: "LabCoursesResponsibles",
                column: "TabulatorId");

            migrationBuilder.CreateIndex(
                name: "IX_LabCoursesResponsibles_VivaExaminerId",
                table: "LabCoursesResponsibles",
                column: "VivaExaminerId");

            migrationBuilder.CreateIndex(
                name: "IX_Students_DepartmentId",
                table: "Students",
                column: "DepartmentId");

            migrationBuilder.CreateIndex(
                name: "IX_Teachers_DepartmentId",
                table: "Teachers",
                column: "DepartmentId");

            migrationBuilder.CreateIndex(
                name: "IX_TeacherTermPaperResponsibilities_SupervisorsId",
                table: "TeacherTermPaperResponsibilities",
                column: "SupervisorsId");

            migrationBuilder.CreateIndex(
                name: "IX_TeacherTermPaperResponsibilities1_ExaminersId",
                table: "TeacherTermPaperResponsibilities1",
                column: "ExaminersId");

            migrationBuilder.CreateIndex(
                name: "IX_TeacherTheoryCourseResponsibles_QuestionSettersOfCoursesId",
                table: "TeacherTheoryCourseResponsibles",
                column: "QuestionSettersOfCoursesId");

            migrationBuilder.CreateIndex(
                name: "IX_TermPaperResponsibilities_CourseId",
                table: "TermPaperResponsibilities",
                column: "CourseId");

            migrationBuilder.CreateIndex(
                name: "IX_TermPaperResponsibilities_ExamId",
                table: "TermPaperResponsibilities",
                column: "ExamId");

            migrationBuilder.CreateIndex(
                name: "IX_TermPaperResponsibilities_TabulatorId",
                table: "TermPaperResponsibilities",
                column: "TabulatorId");

            migrationBuilder.CreateIndex(
                name: "IX_TheoryCoursesResponsibles_AnswerPaperCheckerPartAId",
                table: "TheoryCoursesResponsibles",
                column: "AnswerPaperCheckerPartAId");

            migrationBuilder.CreateIndex(
                name: "IX_TheoryCoursesResponsibles_AnswerPaperCheckerPartBId",
                table: "TheoryCoursesResponsibles",
                column: "AnswerPaperCheckerPartBId");

            migrationBuilder.CreateIndex(
                name: "IX_TheoryCoursesResponsibles_CourseId",
                table: "TheoryCoursesResponsibles",
                column: "CourseId");

            migrationBuilder.CreateIndex(
                name: "IX_TheoryCoursesResponsibles_ExamId",
                table: "TheoryCoursesResponsibles",
                column: "ExamId");

            migrationBuilder.CreateIndex(
                name: "IX_TheoryCoursesResponsibles_QuestionModeratorId",
                table: "TheoryCoursesResponsibles",
                column: "QuestionModeratorId");

            migrationBuilder.CreateIndex(
                name: "IX_TheoryCoursesResponsibles_QuestionScrutinizerPartAId",
                table: "TheoryCoursesResponsibles",
                column: "QuestionScrutinizerPartAId");

            migrationBuilder.CreateIndex(
                name: "IX_TheoryCoursesResponsibles_QuestionScrutinizerPartBId",
                table: "TheoryCoursesResponsibles",
                column: "QuestionScrutinizerPartBId");

            migrationBuilder.CreateIndex(
                name: "IX_TheoryCoursesResponsibles_QuestionTyperId",
                table: "TheoryCoursesResponsibles",
                column: "QuestionTyperId");

            migrationBuilder.CreateIndex(
                name: "IX_TheoryCoursesResponsibles_TabulatorId",
                table: "TheoryCoursesResponsibles",
                column: "TabulatorId");

            migrationBuilder.CreateIndex(
                name: "IX_TheoryCoursesResponsibles_TermTestAnswerCheckerId",
                table: "TheoryCoursesResponsibles",
                column: "TermTestAnswerCheckerId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Admins");

            migrationBuilder.DropTable(
                name: "ExamTeacher");

            migrationBuilder.DropTable(
                name: "Invigilators");

            migrationBuilder.DropTable(
                name: "LabCoursesResponsibles");

            migrationBuilder.DropTable(
                name: "Students");

            migrationBuilder.DropTable(
                name: "TeacherTermPaperResponsibilities");

            migrationBuilder.DropTable(
                name: "TeacherTermPaperResponsibilities1");

            migrationBuilder.DropTable(
                name: "TeacherTheoryCourseResponsibles");

            migrationBuilder.DropTable(
                name: "TermPaperResponsibilities");

            migrationBuilder.DropTable(
                name: "TheoryCoursesResponsibles");

            migrationBuilder.DropTable(
                name: "Courses");

            migrationBuilder.DropTable(
                name: "Exams");

            migrationBuilder.DropTable(
                name: "Teachers");

            migrationBuilder.DropTable(
                name: "Departments");

            migrationBuilder.DropTable(
                name: "Institutes");
        }
    }
}
