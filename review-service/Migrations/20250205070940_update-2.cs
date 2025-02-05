using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace review_service.Migrations
{
    /// <inheritdoc />
    public partial class update2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "content",
                table: "reviews",
                type: "varchar",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "text");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "content",
                table: "reviews",
                type: "text",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar");
        }
    }
}
