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
                    Type = table.Column<string>(type: "text", nullable: false)
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
                name: "Teachers",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Email = table.Column<string>(type: "text", nullable: false),
                    Password = table.Column<string>(type: "text", nullable: false),
                    Institute = table.Column<string>(type: "text", nullable: false),
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
                name: "Invigilators",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    ExamId = table.Column<Guid>(type: "uuid", nullable: false),
                    TeacherId = table.Column<Guid>(type: "uuid", nullable: false),
                    CourseId = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Invigilators", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Invigilators_Courses_CourseId",
                        column: x => x.CourseId,
                        principalTable: "Courses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
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
                    ExaminerId = table.Column<Guid>(type: "uuid", nullable: false),
                    TabulatorId = table.Column<Guid>(type: "uuid", nullable: false),
                    VivaExaminerId = table.Column<Guid>(type: "uuid", nullable: false),
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
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_LabCoursesResponsibles_Teachers_TabulatorId",
                        column: x => x.TabulatorId,
                        principalTable: "Teachers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_LabCoursesResponsibles_Teachers_VivaExaminerId",
                        column: x => x.VivaExaminerId,
                        principalTable: "Teachers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "TheoryCoursesResponsibles",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    ExamId = table.Column<Guid>(type: "uuid", nullable: false),
                    CourseId = table.Column<Guid>(type: "uuid", nullable: false),
                    QuestionSetter1Id = table.Column<Guid>(type: "uuid", nullable: true),
                    QuestionSetter2Id = table.Column<Guid>(type: "uuid", nullable: true),
                    QuestionModeratorId = table.Column<Guid>(type: "uuid", nullable: true),
                    AnswerPaperCheckerPartAId = table.Column<Guid>(type: "uuid", nullable: true),
                    AnswerPaperCheckerPartBId = table.Column<Guid>(type: "uuid", nullable: true),
                    TermTestAnswerCheckerId = table.Column<Guid>(type: "uuid", nullable: true),
                    TabulatorId = table.Column<Guid>(type: "uuid", nullable: true),
                    VivaExaminerId = table.Column<Guid>(type: "uuid", nullable: true),
                    QuestionScrutinizerPartAId = table.Column<Guid>(type: "uuid", nullable: true),
                    QuestionScrutinizerPartBId = table.Column<Guid>(type: "uuid", nullable: true),
                    QuestionTyperId = table.Column<Guid>(type: "uuid", nullable: true),
                    NumberOfRegisteredStudents = table.Column<int>(type: "integer", nullable: true),
                    NumberOfExamineePartA = table.Column<int>(type: "integer", nullable: true),
                    NumberOfExamineePartB = table.Column<int>(type: "integer", nullable: true),
                    NumberOfTermTestParticipants = table.Column<int>(type: "integer", nullable: true),
                    NumberOfVivaParticipants = table.Column<int>(type: "integer", nullable: true)
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
                        name: "FK_TheoryCoursesResponsibles_Teachers_QuestionSetter1Id",
                        column: x => x.QuestionSetter1Id,
                        principalTable: "Teachers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_TheoryCoursesResponsibles_Teachers_QuestionSetter2Id",
                        column: x => x.QuestionSetter2Id,
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
                    table.ForeignKey(
                        name: "FK_TheoryCoursesResponsibles_Teachers_VivaExaminerId",
                        column: x => x.VivaExaminerId,
                        principalTable: "Teachers",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Courses_DepartmentId_Code",
                table: "Courses",
                columns: new[] { "DepartmentId", "Code" },
                unique: true);

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
                name: "IX_Exams_DepartmentId_Session_Semester",
                table: "Exams",
                columns: new[] { "DepartmentId", "Session", "Semester" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Invigilators_CourseId",
                table: "Invigilators",
                column: "CourseId");

            migrationBuilder.CreateIndex(
                name: "IX_Invigilators_ExamId_CourseId_TeacherId",
                table: "Invigilators",
                columns: new[] { "ExamId", "CourseId", "TeacherId" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Invigilators_TeacherId",
                table: "Invigilators",
                column: "TeacherId");

            migrationBuilder.CreateIndex(
                name: "IX_LabCoursesResponsibles_CourseId",
                table: "LabCoursesResponsibles",
                column: "CourseId");

            migrationBuilder.CreateIndex(
                name: "IX_LabCoursesResponsibles_ExamId_CourseId",
                table: "LabCoursesResponsibles",
                columns: new[] { "ExamId", "CourseId" },
                unique: true);

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
                name: "IX_Teachers_DepartmentId",
                table: "Teachers",
                column: "DepartmentId");

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
                name: "IX_TheoryCoursesResponsibles_ExamId_CourseId",
                table: "TheoryCoursesResponsibles",
                columns: new[] { "ExamId", "CourseId" },
                unique: true);

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
                name: "IX_TheoryCoursesResponsibles_QuestionSetter1Id",
                table: "TheoryCoursesResponsibles",
                column: "QuestionSetter1Id");

            migrationBuilder.CreateIndex(
                name: "IX_TheoryCoursesResponsibles_QuestionSetter2Id",
                table: "TheoryCoursesResponsibles",
                column: "QuestionSetter2Id");

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

            migrationBuilder.CreateIndex(
                name: "IX_TheoryCoursesResponsibles_VivaExaminerId",
                table: "TheoryCoursesResponsibles",
                column: "VivaExaminerId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Invigilators");

            migrationBuilder.DropTable(
                name: "LabCoursesResponsibles");

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
