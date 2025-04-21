"use client";

import React from "react";
import ListCourse from "./components/ListCourse";
import NavHeader from "@/components/NavHeader";
import course from "@/public/course.png";
import { Course, Category } from "@/interface";

const categories: Category[] = [
  { id: 1, name: "Tất cả khóa học" },
  { id: 2, name: "Khóa học của tôi" },
  { id: 3, name: "Khóa học đã hoàn thành" },
  { id: 4, name: "Cơ bản" },
  { id: 5, name: "Front-End" },
  { id: 6, name: "Back-End" },
  { id: 7, name: "DevOps" },
  { id: 8, name: "AI/ML" },
];

const courses: Course[] = [
  {
    id: "1",
    title: "C# for Beginners",
    description: "Khóa học 1",
    image: course.src,
    level: "Beginner",
    instructor: "Chickend Pháp",
    categories: [categories[0], categories[1], categories[3]],
  },
  {
    id: "2",
    title: "C# for Beginners",
    description: "Khóa học 1",
    image: course.src,
    level: "Beginner",
    instructor: "Chickend Pháp",
    categories: [categories[0], categories[1], categories[3]],
  },
  {
    id: "3",
    title: "C# for Beginners",
    description: "Khóa học 1",
    image: course.src,
    level: "Beginner",
    instructor: "Chickend Pháp",
    categories: [categories[0], categories[1], categories[3]],
  },
  {
    id: "4",
    title: "C# for Beginners",
    description: "Khóa học 1",
    image: course.src,
    level: "Beginner",
    instructor: "Chickend Pháp",
    categories: [categories[0], categories[1], categories[3]],
  },
];

export default function CoursePage() {
  const handleSearch = (searchTerm: string) => {
    console.log(searchTerm);
  };

  const handleAddClick = () => {
    console.log("Add clicked");
  };
  return (
    <>
      <NavHeader
        categories={categories}
        onSearch={handleSearch}
        onAddClick={handleAddClick}
        addButtonText="Tạo khóa học"
        searchPlaceholder="Tìm kiếm khóa học"
      />
      <ListCourse courses={courses} />
    </>
  );
}
