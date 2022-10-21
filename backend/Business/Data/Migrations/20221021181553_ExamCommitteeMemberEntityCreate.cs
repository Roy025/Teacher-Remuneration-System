using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Business.Data.Migrations
{
    public partial class ExamCommitteeMemberEntityCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Institute",
                table: "Teachers",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateTable(
                name: "ExamCommitteeMembers",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Department = table.Column<string>(type: "text", nullable: false),
                    Session = table.Column<string>(type: "text", nullable: false),
                    Semester = table.Column<string>(type: "text", nullable: false),
                    MemberId = table.Column<Guid>(type: "uuid", nullable: false),
                    MemberRole = table.Column<string>(type: "text", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    ModifiedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ExamCommitteeMembers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ExamCommitteeMembers_Teachers_MemberId",
                        column: x => x.MemberId,
                        principalTable: "Teachers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ExamCommitteeMembers_Department_Session_Semester_MemberId",
                table: "ExamCommitteeMembers",
                columns: new[] { "Department", "Session", "Semester", "MemberId" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ExamCommitteeMembers_MemberId",
                table: "ExamCommitteeMembers",
                column: "MemberId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ExamCommitteeMembers");

            migrationBuilder.DropColumn(
                name: "Institute",
                table: "Teachers");
        }
    }
}
