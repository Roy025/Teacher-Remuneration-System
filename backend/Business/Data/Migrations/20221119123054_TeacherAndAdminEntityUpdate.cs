using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Business.Data.Migrations
{
    public partial class TeacherAndAdminEntityUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Designation",
                table: "Admins",
                newName: "Role");

            migrationBuilder.AddColumn<string>(
                name: "Role",
                table: "Teachers",
                type: "text",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Role",
                table: "Teachers");

            migrationBuilder.RenameColumn(
                name: "Role",
                table: "Admins",
                newName: "Designation");
        }
    }
}
