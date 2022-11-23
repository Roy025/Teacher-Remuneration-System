using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Business.Data.Migrations
{
    public partial class QuestionSetterUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Teachers_TheoryCoursesResponsibles_TheoryCourseResponsibles~",
                table: "Teachers");

            migrationBuilder.DropIndex(
                name: "IX_Teachers_TheoryCourseResponsiblesId",
                table: "Teachers");

            migrationBuilder.DropColumn(
                name: "TheoryCourseResponsiblesId",
                table: "Teachers");

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
                name: "IX_TeacherTheoryCourseResponsibles_QuestionSettersOfCoursesId",
                table: "TeacherTheoryCourseResponsibles",
                column: "QuestionSettersOfCoursesId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TeacherTheoryCourseResponsibles");

            migrationBuilder.AddColumn<Guid>(
                name: "TheoryCourseResponsiblesId",
                table: "Teachers",
                type: "uuid",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Teachers_TheoryCourseResponsiblesId",
                table: "Teachers",
                column: "TheoryCourseResponsiblesId");

            migrationBuilder.AddForeignKey(
                name: "FK_Teachers_TheoryCoursesResponsibles_TheoryCourseResponsibles~",
                table: "Teachers",
                column: "TheoryCourseResponsiblesId",
                principalTable: "TheoryCoursesResponsibles",
                principalColumn: "Id");
        }
    }
}
