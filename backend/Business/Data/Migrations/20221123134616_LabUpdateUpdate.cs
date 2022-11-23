using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Business.Data.Migrations
{
    public partial class LabUpdateUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_LabCoursesResponsibles_Teachers_ExaminerId",
                table: "LabCoursesResponsibles");

            migrationBuilder.DropForeignKey(
                name: "FK_LabCoursesResponsibles_Teachers_TabulatorId",
                table: "LabCoursesResponsibles");

            migrationBuilder.DropForeignKey(
                name: "FK_LabCoursesResponsibles_Teachers_VivaExaminerId",
                table: "LabCoursesResponsibles");

            migrationBuilder.AlterColumn<Guid>(
                name: "VivaExaminerId",
                table: "LabCoursesResponsibles",
                type: "uuid",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "uuid");

            migrationBuilder.AlterColumn<Guid>(
                name: "TabulatorId",
                table: "LabCoursesResponsibles",
                type: "uuid",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "uuid");

            migrationBuilder.AlterColumn<Guid>(
                name: "ExaminerId",
                table: "LabCoursesResponsibles",
                type: "uuid",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "uuid");

            migrationBuilder.AddForeignKey(
                name: "FK_LabCoursesResponsibles_Teachers_ExaminerId",
                table: "LabCoursesResponsibles",
                column: "ExaminerId",
                principalTable: "Teachers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_LabCoursesResponsibles_Teachers_TabulatorId",
                table: "LabCoursesResponsibles",
                column: "TabulatorId",
                principalTable: "Teachers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_LabCoursesResponsibles_Teachers_VivaExaminerId",
                table: "LabCoursesResponsibles",
                column: "VivaExaminerId",
                principalTable: "Teachers",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_LabCoursesResponsibles_Teachers_ExaminerId",
                table: "LabCoursesResponsibles");

            migrationBuilder.DropForeignKey(
                name: "FK_LabCoursesResponsibles_Teachers_TabulatorId",
                table: "LabCoursesResponsibles");

            migrationBuilder.DropForeignKey(
                name: "FK_LabCoursesResponsibles_Teachers_VivaExaminerId",
                table: "LabCoursesResponsibles");

            migrationBuilder.AlterColumn<Guid>(
                name: "VivaExaminerId",
                table: "LabCoursesResponsibles",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "uuid",
                oldNullable: true);

            migrationBuilder.AlterColumn<Guid>(
                name: "TabulatorId",
                table: "LabCoursesResponsibles",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "uuid",
                oldNullable: true);

            migrationBuilder.AlterColumn<Guid>(
                name: "ExaminerId",
                table: "LabCoursesResponsibles",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "uuid",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_LabCoursesResponsibles_Teachers_ExaminerId",
                table: "LabCoursesResponsibles",
                column: "ExaminerId",
                principalTable: "Teachers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_LabCoursesResponsibles_Teachers_TabulatorId",
                table: "LabCoursesResponsibles",
                column: "TabulatorId",
                principalTable: "Teachers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_LabCoursesResponsibles_Teachers_VivaExaminerId",
                table: "LabCoursesResponsibles",
                column: "VivaExaminerId",
                principalTable: "Teachers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
