using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Business.Data.Migrations
{
    public partial class CourseResponsiblesEntityCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CoursesResponsibles",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    ExamId = table.Column<Guid>(type: "uuid", nullable: false),
                    CourseId = table.Column<Guid>(type: "uuid", nullable: false),
                    QuestionSetterPartAId = table.Column<Guid>(type: "uuid", nullable: true),
                    QuestionSetterPartBId = table.Column<Guid>(type: "uuid", nullable: true),
                    QuestionExaminerPartAId = table.Column<Guid>(type: "uuid", nullable: true),
                    QuestionExaminerPartBId = table.Column<Guid>(type: "uuid", nullable: true),
                    QuestionScrutinizerPartAId = table.Column<Guid>(type: "uuid", nullable: true),
                    QuestionScrutinizerPartBId = table.Column<Guid>(type: "uuid", nullable: true),
                    NumberOfRegisteredStudents = table.Column<int>(type: "integer", nullable: true),
                    NumberOfExaminee = table.Column<int>(type: "integer", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    ModifiedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CoursesResponsibles", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CoursesResponsibles_Courses_CourseId",
                        column: x => x.CourseId,
                        principalTable: "Courses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CoursesResponsibles_Exams_ExamId",
                        column: x => x.ExamId,
                        principalTable: "Exams",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CoursesResponsibles_Teachers_QuestionExaminerPartAId",
                        column: x => x.QuestionExaminerPartAId,
                        principalTable: "Teachers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_CoursesResponsibles_Teachers_QuestionExaminerPartBId",
                        column: x => x.QuestionExaminerPartBId,
                        principalTable: "Teachers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_CoursesResponsibles_Teachers_QuestionScrutinizerPartAId",
                        column: x => x.QuestionScrutinizerPartAId,
                        principalTable: "Teachers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_CoursesResponsibles_Teachers_QuestionScrutinizerPartBId",
                        column: x => x.QuestionScrutinizerPartBId,
                        principalTable: "Teachers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_CoursesResponsibles_Teachers_QuestionSetterPartAId",
                        column: x => x.QuestionSetterPartAId,
                        principalTable: "Teachers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_CoursesResponsibles_Teachers_QuestionSetterPartBId",
                        column: x => x.QuestionSetterPartBId,
                        principalTable: "Teachers",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_CoursesResponsibles_CourseId",
                table: "CoursesResponsibles",
                column: "CourseId");

            migrationBuilder.CreateIndex(
                name: "IX_CoursesResponsibles_ExamId_CourseId",
                table: "CoursesResponsibles",
                columns: new[] { "ExamId", "CourseId" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_CoursesResponsibles_QuestionExaminerPartAId",
                table: "CoursesResponsibles",
                column: "QuestionExaminerPartAId");

            migrationBuilder.CreateIndex(
                name: "IX_CoursesResponsibles_QuestionExaminerPartBId",
                table: "CoursesResponsibles",
                column: "QuestionExaminerPartBId");

            migrationBuilder.CreateIndex(
                name: "IX_CoursesResponsibles_QuestionScrutinizerPartAId",
                table: "CoursesResponsibles",
                column: "QuestionScrutinizerPartAId");

            migrationBuilder.CreateIndex(
                name: "IX_CoursesResponsibles_QuestionScrutinizerPartBId",
                table: "CoursesResponsibles",
                column: "QuestionScrutinizerPartBId");

            migrationBuilder.CreateIndex(
                name: "IX_CoursesResponsibles_QuestionSetterPartAId",
                table: "CoursesResponsibles",
                column: "QuestionSetterPartAId");

            migrationBuilder.CreateIndex(
                name: "IX_CoursesResponsibles_QuestionSetterPartBId",
                table: "CoursesResponsibles",
                column: "QuestionSetterPartBId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CoursesResponsibles");
        }
    }
}
