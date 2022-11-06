﻿// <auto-generated />
using System;
using Business.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Business.Data.Migrations
{
    [DbContext(typeof(StoreContext))]
    [Migration("20221106131518_InitialMigration")]
    partial class InitialMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.9")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("Core.Entities.Exam", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<Guid>("ChairmanId")
                        .HasColumnType("uuid");

                    b.Property<Guid>("CheifInvigilatorId")
                        .HasColumnType("uuid");

                    b.Property<string>("Department")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Semester")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Session")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("ChairmanId");

                    b.HasIndex("CheifInvigilatorId");

                    b.HasIndex("Department", "Session", "Semester")
                        .IsUnique();

                    b.ToTable("Exams");
                });

            modelBuilder.Entity("Core.Entities.LabCourseResponsibles", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<Guid>("CourseId")
                        .HasColumnType("uuid");

                    b.Property<Guid>("ExamId")
                        .HasColumnType("uuid");

                    b.Property<Guid>("ExaminerId")
                        .HasColumnType("uuid");

                    b.Property<int?>("NumberOfExaminee")
                        .HasColumnType("integer");

                    b.Property<int?>("NumberOfRegisteredStudents")
                        .HasColumnType("integer");

                    b.Property<int?>("NumberOfVivaParticipants")
                        .HasColumnType("integer");

                    b.Property<Guid>("TabulatorId")
                        .HasColumnType("uuid");

                    b.Property<Guid>("VivaExaminerId")
                        .HasColumnType("uuid");

                    b.HasKey("Id");

                    b.HasIndex("CourseId");

                    b.HasIndex("ExaminerId");

                    b.HasIndex("TabulatorId");

                    b.HasIndex("VivaExaminerId");

                    b.HasIndex("ExamId", "CourseId")
                        .IsUnique();

                    b.ToTable("LabCoursesResponsibles");
                });

            modelBuilder.Entity("Core.Entities.Teacher", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("BankAccount")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Department")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Designation")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Image")
                        .HasColumnType("text");

                    b.Property<string>("Institute")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Teachers");
                });

            modelBuilder.Entity("Core.Entities.TheoryCourseResponsibles", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<Guid?>("AnswerPaperCheckerPartAId")
                        .HasColumnType("uuid");

                    b.Property<Guid?>("AnswerPaperCheckerPartBId")
                        .HasColumnType("uuid");

                    b.Property<Guid>("CourseId")
                        .HasColumnType("uuid");

                    b.Property<Guid>("ExamId")
                        .HasColumnType("uuid");

                    b.Property<int?>("NumberOfExamineePartA")
                        .HasColumnType("integer");

                    b.Property<int?>("NumberOfExamineePartB")
                        .HasColumnType("integer");

                    b.Property<int?>("NumberOfRegisteredStudents")
                        .HasColumnType("integer");

                    b.Property<int?>("NumberOfTermTestParticipants")
                        .HasColumnType("integer");

                    b.Property<int?>("NumberOfVivaParticipants")
                        .HasColumnType("integer");

                    b.Property<Guid?>("QuestionModeratorId")
                        .HasColumnType("uuid");

                    b.Property<Guid?>("QuestionScrutinizerPartAId")
                        .HasColumnType("uuid");

                    b.Property<Guid?>("QuestionScrutinizerPartBId")
                        .HasColumnType("uuid");

                    b.Property<Guid?>("QuestionSetter1Id")
                        .HasColumnType("uuid");

                    b.Property<Guid?>("QuestionSetter2Id")
                        .HasColumnType("uuid");

                    b.Property<Guid?>("QuestionTyperId")
                        .HasColumnType("uuid");

                    b.Property<Guid?>("TabulatorId")
                        .HasColumnType("uuid");

                    b.Property<Guid?>("TermTestAnswerCheckerId")
                        .HasColumnType("uuid");

                    b.Property<Guid?>("VivaExaminerId")
                        .HasColumnType("uuid");

                    b.HasKey("Id");

                    b.HasIndex("AnswerPaperCheckerPartAId");

                    b.HasIndex("AnswerPaperCheckerPartBId");

                    b.HasIndex("CourseId");

                    b.HasIndex("QuestionModeratorId");

                    b.HasIndex("QuestionScrutinizerPartAId");

                    b.HasIndex("QuestionScrutinizerPartBId");

                    b.HasIndex("QuestionSetter1Id");

                    b.HasIndex("QuestionSetter2Id");

                    b.HasIndex("QuestionTyperId");

                    b.HasIndex("TabulatorId");

                    b.HasIndex("TermTestAnswerCheckerId");

                    b.HasIndex("VivaExaminerId");

                    b.HasIndex("ExamId", "CourseId")
                        .IsUnique();

                    b.ToTable("TheoryCoursesResponsibles");
                });

            modelBuilder.Entity("Course", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("Code")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<decimal>("Credit")
                        .HasColumnType("numeric");

                    b.Property<string>("Department")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("Department", "Code")
                        .IsUnique();

                    b.ToTable("Courses");
                });

            modelBuilder.Entity("Core.Entities.Exam", b =>
                {
                    b.HasOne("Core.Entities.Teacher", "Chairman")
                        .WithMany()
                        .HasForeignKey("ChairmanId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Core.Entities.Teacher", "CheifInvigilator")
                        .WithMany()
                        .HasForeignKey("CheifInvigilatorId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Chairman");

                    b.Navigation("CheifInvigilator");
                });

            modelBuilder.Entity("Core.Entities.LabCourseResponsibles", b =>
                {
                    b.HasOne("Course", "Course")
                        .WithMany()
                        .HasForeignKey("CourseId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Core.Entities.Exam", "Exam")
                        .WithMany()
                        .HasForeignKey("ExamId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Core.Entities.Teacher", "Examiner")
                        .WithMany()
                        .HasForeignKey("ExaminerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Core.Entities.Teacher", "Tabulator")
                        .WithMany()
                        .HasForeignKey("TabulatorId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Core.Entities.Teacher", "VivaExaminer")
                        .WithMany()
                        .HasForeignKey("VivaExaminerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Course");

                    b.Navigation("Exam");

                    b.Navigation("Examiner");

                    b.Navigation("Tabulator");

                    b.Navigation("VivaExaminer");
                });

            modelBuilder.Entity("Core.Entities.TheoryCourseResponsibles", b =>
                {
                    b.HasOne("Core.Entities.Teacher", "AnswerPaperCheckerPartA")
                        .WithMany()
                        .HasForeignKey("AnswerPaperCheckerPartAId");

                    b.HasOne("Core.Entities.Teacher", "AnswerPaperCheckerPartB")
                        .WithMany()
                        .HasForeignKey("AnswerPaperCheckerPartBId");

                    b.HasOne("Course", "Course")
                        .WithMany()
                        .HasForeignKey("CourseId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Core.Entities.Exam", "Exam")
                        .WithMany()
                        .HasForeignKey("ExamId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Core.Entities.Teacher", "QuestionModerator")
                        .WithMany()
                        .HasForeignKey("QuestionModeratorId");

                    b.HasOne("Core.Entities.Teacher", "QuestionScrutinizerPartA")
                        .WithMany()
                        .HasForeignKey("QuestionScrutinizerPartAId");

                    b.HasOne("Core.Entities.Teacher", "QuestionScrutinizerPartB")
                        .WithMany()
                        .HasForeignKey("QuestionScrutinizerPartBId");

                    b.HasOne("Core.Entities.Teacher", "QuestionSetter1")
                        .WithMany()
                        .HasForeignKey("QuestionSetter1Id");

                    b.HasOne("Core.Entities.Teacher", "QuestionSetter2")
                        .WithMany()
                        .HasForeignKey("QuestionSetter2Id");

                    b.HasOne("Core.Entities.Teacher", "QuestionTyper")
                        .WithMany()
                        .HasForeignKey("QuestionTyperId");

                    b.HasOne("Core.Entities.Teacher", "Tabulator")
                        .WithMany()
                        .HasForeignKey("TabulatorId");

                    b.HasOne("Core.Entities.Teacher", "TermTestAnswerChecker")
                        .WithMany()
                        .HasForeignKey("TermTestAnswerCheckerId");

                    b.HasOne("Core.Entities.Teacher", "VivaExaminer")
                        .WithMany()
                        .HasForeignKey("VivaExaminerId");

                    b.Navigation("AnswerPaperCheckerPartA");

                    b.Navigation("AnswerPaperCheckerPartB");

                    b.Navigation("Course");

                    b.Navigation("Exam");

                    b.Navigation("QuestionModerator");

                    b.Navigation("QuestionScrutinizerPartA");

                    b.Navigation("QuestionScrutinizerPartB");

                    b.Navigation("QuestionSetter1");

                    b.Navigation("QuestionSetter2");

                    b.Navigation("QuestionTyper");

                    b.Navigation("Tabulator");

                    b.Navigation("TermTestAnswerChecker");

                    b.Navigation("VivaExaminer");
                });
#pragma warning restore 612, 618
        }
    }
}
