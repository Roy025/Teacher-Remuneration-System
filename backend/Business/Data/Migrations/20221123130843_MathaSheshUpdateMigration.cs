using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Business.Data.Migrations
{
    public partial class MathaSheshUpdateMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Invigilators_Courses_CourseId",
                table: "Invigilators");

            migrationBuilder.DropForeignKey(
                name: "FK_TeacherTermPaperResponsibilities1_Teachers_ExaminerId",
                table: "TeacherTermPaperResponsibilities1");

            migrationBuilder.DropForeignKey(
                name: "FK_TheoryCoursesResponsibles_Teachers_VivaExaminerId",
                table: "TheoryCoursesResponsibles");

            migrationBuilder.DropIndex(
                name: "IX_TheoryCoursesResponsibles_VivaExaminerId",
                table: "TheoryCoursesResponsibles");

            migrationBuilder.DropPrimaryKey(
                name: "PK_TeacherTermPaperResponsibilities1",
                table: "TeacherTermPaperResponsibilities1");

            migrationBuilder.DropIndex(
                name: "IX_TeacherTermPaperResponsibilities1_ExaminerOfTermPapersId",
                table: "TeacherTermPaperResponsibilities1");

            migrationBuilder.DropColumn(
                name: "VivaExaminerId",
                table: "TheoryCoursesResponsibles");

            migrationBuilder.RenameColumn(
                name: "ExaminerId",
                table: "TeacherTermPaperResponsibilities1",
                newName: "ExaminersId");

            migrationBuilder.AddColumn<int>(
                name: "NumberOfRegisteredStudents",
                table: "TermPaperResponsibilities",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "TabulatorId",
                table: "TermPaperResponsibilities",
                type: "uuid",
                nullable: true);

            migrationBuilder.AlterColumn<Guid>(
                name: "CourseId",
                table: "Invigilators",
                type: "uuid",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "uuid");

            migrationBuilder.AddPrimaryKey(
                name: "PK_TeacherTermPaperResponsibilities1",
                table: "TeacherTermPaperResponsibilities1",
                columns: new[] { "ExaminerOfTermPapersId", "ExaminersId" });

            migrationBuilder.CreateIndex(
                name: "IX_TermPaperResponsibilities_TabulatorId",
                table: "TermPaperResponsibilities",
                column: "TabulatorId");

            migrationBuilder.CreateIndex(
                name: "IX_TeacherTermPaperResponsibilities1_ExaminersId",
                table: "TeacherTermPaperResponsibilities1",
                column: "ExaminersId");

            migrationBuilder.AddForeignKey(
                name: "FK_Invigilators_Courses_CourseId",
                table: "Invigilators",
                column: "CourseId",
                principalTable: "Courses",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_TeacherTermPaperResponsibilities1_Teachers_ExaminersId",
                table: "TeacherTermPaperResponsibilities1",
                column: "ExaminersId",
                principalTable: "Teachers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_TermPaperResponsibilities_Teachers_TabulatorId",
                table: "TermPaperResponsibilities",
                column: "TabulatorId",
                principalTable: "Teachers",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Invigilators_Courses_CourseId",
                table: "Invigilators");

            migrationBuilder.DropForeignKey(
                name: "FK_TeacherTermPaperResponsibilities1_Teachers_ExaminersId",
                table: "TeacherTermPaperResponsibilities1");

            migrationBuilder.DropForeignKey(
                name: "FK_TermPaperResponsibilities_Teachers_TabulatorId",
                table: "TermPaperResponsibilities");

            migrationBuilder.DropIndex(
                name: "IX_TermPaperResponsibilities_TabulatorId",
                table: "TermPaperResponsibilities");

            migrationBuilder.DropPrimaryKey(
                name: "PK_TeacherTermPaperResponsibilities1",
                table: "TeacherTermPaperResponsibilities1");

            migrationBuilder.DropIndex(
                name: "IX_TeacherTermPaperResponsibilities1_ExaminersId",
                table: "TeacherTermPaperResponsibilities1");

            migrationBuilder.DropColumn(
                name: "NumberOfRegisteredStudents",
                table: "TermPaperResponsibilities");

            migrationBuilder.DropColumn(
                name: "TabulatorId",
                table: "TermPaperResponsibilities");

            migrationBuilder.RenameColumn(
                name: "ExaminersId",
                table: "TeacherTermPaperResponsibilities1",
                newName: "ExaminerId");

            migrationBuilder.AddColumn<Guid>(
                name: "VivaExaminerId",
                table: "TheoryCoursesResponsibles",
                type: "uuid",
                nullable: true);

            migrationBuilder.AlterColumn<Guid>(
                name: "CourseId",
                table: "Invigilators",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "uuid",
                oldNullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_TeacherTermPaperResponsibilities1",
                table: "TeacherTermPaperResponsibilities1",
                columns: new[] { "ExaminerId", "ExaminerOfTermPapersId" });

            migrationBuilder.CreateIndex(
                name: "IX_TheoryCoursesResponsibles_VivaExaminerId",
                table: "TheoryCoursesResponsibles",
                column: "VivaExaminerId");

            migrationBuilder.CreateIndex(
                name: "IX_TeacherTermPaperResponsibilities1_ExaminerOfTermPapersId",
                table: "TeacherTermPaperResponsibilities1",
                column: "ExaminerOfTermPapersId");

            migrationBuilder.AddForeignKey(
                name: "FK_Invigilators_Courses_CourseId",
                table: "Invigilators",
                column: "CourseId",
                principalTable: "Courses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_TeacherTermPaperResponsibilities1_Teachers_ExaminerId",
                table: "TeacherTermPaperResponsibilities1",
                column: "ExaminerId",
                principalTable: "Teachers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_TheoryCoursesResponsibles_Teachers_VivaExaminerId",
                table: "TheoryCoursesResponsibles",
                column: "VivaExaminerId",
                principalTable: "Teachers",
                principalColumn: "Id");
        }
    }
}
