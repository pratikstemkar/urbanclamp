using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace review_service.Migrations
{
    /// <inheritdoc />
    public partial class update1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Title",
                table: "reviews",
                newName: "title");

            migrationBuilder.RenameColumn(
                name: "Content",
                table: "reviews",
                newName: "content");

            migrationBuilder.AlterColumn<string>(
                name: "title",
                table: "reviews",
                type: "varchar",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "longtext");

            migrationBuilder.AlterColumn<string>(
                name: "content",
                table: "reviews",
                type: "text",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "longtext");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "title",
                table: "reviews",
                newName: "Title");

            migrationBuilder.RenameColumn(
                name: "content",
                table: "reviews",
                newName: "Content");

            migrationBuilder.AlterColumn<string>(
                name: "Title",
                table: "reviews",
                type: "longtext",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar");

            migrationBuilder.AlterColumn<string>(
                name: "Content",
                table: "reviews",
                type: "longtext",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "text");
        }
    }
}
