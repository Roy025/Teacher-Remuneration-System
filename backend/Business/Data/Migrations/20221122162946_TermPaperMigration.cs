using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Business.Data.Migrations
{
    public partial class TermPaperMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "NumberOfPracticalExamParticipants",
                table: "TheoryCoursesResponsibles",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "NumberOfStudentsScrutinizedPartA",
                table: "TheoryCoursesResponsibles",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "NumberOfStudentsScrutinizedPartB",
                table: "TheoryCoursesResponsibles",
                type: "integer",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "TermPaperResponsibilities",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    CourseId = table.Column<Guid>(type: "uuid", nullable: false),
                    IsIncludedInExamCommittee = table.Column<bool>(type: "boolean", nullable: false),
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
                    ExaminerId = table.Column<Guid>(type: "uuid", nullable: false),
                    ExaminerOfTermPapersId = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TeacherTermPaperResponsibilities1", x => new { x.ExaminerId, x.ExaminerOfTermPapersId });
                    table.ForeignKey(
                        name: "FK_TeacherTermPaperResponsibilities1_Teachers_ExaminerId",
                        column: x => x.ExaminerId,
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

            migrationBuilder.CreateIndex(
                name: "IX_TeacherTermPaperResponsibilities_SupervisorsId",
                table: "TeacherTermPaperResponsibilities",
                column: "SupervisorsId");

            migrationBuilder.CreateIndex(
                name: "IX_TeacherTermPaperResponsibilities1_ExaminerOfTermPapersId",
                table: "TeacherTermPaperResponsibilities1",
                column: "ExaminerOfTermPapersId");

            migrationBuilder.CreateIndex(
                name: "IX_TermPaperResponsibilities_CourseId",
                table: "TermPaperResponsibilities",
                column: "CourseId");

            migrationBuilder.CreateIndex(
                name: "IX_TermPaperResponsibilities_ExamId",
                table: "TermPaperResponsibilities",
                column: "ExamId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TeacherTermPaperResponsibilities");

            migrationBuilder.DropTable(
                name: "TeacherTermPaperResponsibilities1");

            migrationBuilder.DropTable(
                name: "TermPaperResponsibilities");

            migrationBuilder.DropColumn(
                name: "NumberOfPracticalExamParticipants",
                table: "TheoryCoursesResponsibles");

            migrationBuilder.DropColumn(
                name: "NumberOfStudentsScrutinizedPartA",
                table: "TheoryCoursesResponsibles");

            migrationBuilder.DropColumn(
                name: "NumberOfStudentsScrutinizedPartB",
                table: "TheoryCoursesResponsibles");
        }
    }
}
