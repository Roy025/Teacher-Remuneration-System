using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Business.Data.Migrations
{
    public partial class QuestionSettersUpdateMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TheoryCoursesResponsibles_Teachers_QuestionSetter1Id",
                table: "TheoryCoursesResponsibles");

            migrationBuilder.DropForeignKey(
                name: "FK_TheoryCoursesResponsibles_Teachers_QuestionSetter2Id",
                table: "TheoryCoursesResponsibles");

            migrationBuilder.DropIndex(
                name: "IX_TheoryCoursesResponsibles_QuestionSetter1Id",
                table: "TheoryCoursesResponsibles");

            migrationBuilder.DropIndex(
                name: "IX_TheoryCoursesResponsibles_QuestionSetter2Id",
                table: "TheoryCoursesResponsibles");

            migrationBuilder.DropColumn(
                name: "QuestionSetter1Id",
                table: "TheoryCoursesResponsibles");

            migrationBuilder.DropColumn(
                name: "QuestionSetter2Id",
                table: "TheoryCoursesResponsibles");

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

        protected override void Down(MigrationBuilder migrationBuilder)
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

            migrationBuilder.AddColumn<Guid>(
                name: "QuestionSetter1Id",
                table: "TheoryCoursesResponsibles",
                type: "uuid",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "QuestionSetter2Id",
                table: "TheoryCoursesResponsibles",
                type: "uuid",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_TheoryCoursesResponsibles_QuestionSetter1Id",
                table: "TheoryCoursesResponsibles",
                column: "QuestionSetter1Id");

            migrationBuilder.CreateIndex(
                name: "IX_TheoryCoursesResponsibles_QuestionSetter2Id",
                table: "TheoryCoursesResponsibles",
                column: "QuestionSetter2Id");

            migrationBuilder.AddForeignKey(
                name: "FK_TheoryCoursesResponsibles_Teachers_QuestionSetter1Id",
                table: "TheoryCoursesResponsibles",
                column: "QuestionSetter1Id",
                principalTable: "Teachers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_TheoryCoursesResponsibles_Teachers_QuestionSetter2Id",
                table: "TheoryCoursesResponsibles",
                column: "QuestionSetter2Id",
                principalTable: "Teachers",
                principalColumn: "Id");
        }
    }
}
