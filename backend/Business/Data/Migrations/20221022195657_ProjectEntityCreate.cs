using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Business.Data.Migrations
{
    public partial class ProjectEntityCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Project",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    ExamId = table.Column<Guid>(type: "uuid", nullable: false),
                    CourseId = table.Column<Guid>(type: "uuid", nullable: false),
                    NumberOfRegisteredStudents = table.Column<int>(type: "integer", nullable: true),
                    NumberOfExaminee = table.Column<int>(type: "integer", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    ModifiedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Project", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Project_Courses_CourseId",
                        column: x => x.CourseId,
                        principalTable: "Courses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Project_Exams_ExamId",
                        column: x => x.ExamId,
                        principalTable: "Exams",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ProjectTeacher",
                columns: table => new
                {
                    ExaminersId = table.Column<Guid>(type: "uuid", nullable: false),
                    ProjectsId = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProjectTeacher", x => new { x.ExaminersId, x.ProjectsId });
                    table.ForeignKey(
                        name: "FK_ProjectTeacher_Project_ProjectsId",
                        column: x => x.ProjectsId,
                        principalTable: "Project",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ProjectTeacher_Teachers_ExaminersId",
                        column: x => x.ExaminersId,
                        principalTable: "Teachers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Project_CourseId",
                table: "Project",
                column: "CourseId");

            migrationBuilder.CreateIndex(
                name: "IX_Project_ExamId_CourseId",
                table: "Project",
                columns: new[] { "ExamId", "CourseId" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ProjectTeacher_ProjectsId",
                table: "ProjectTeacher",
                column: "ProjectsId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ProjectTeacher");

            migrationBuilder.DropTable(
                name: "Project");
        }
    }
}
