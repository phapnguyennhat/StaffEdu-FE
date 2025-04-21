"use client";
import React from "react";
import NavHeader from "@/components/NavHeader";
import { Category, Employee } from "@/interface";
import staffProfile from "@/public/images/staff_profile_image.jpg";
import ListStaff from "./components/ListStaff";
const categories: Category[] = [
  { id: 1, name: "Tất cả nhân viên" },
  { id: 2, name: "Nhân viên IT" },
  { id: 3, name: "Nhân viên Marketing" },
  { id: 4, name: "Nhân viên Sales" },
  { id: 5, name: "Nhân viên HR" },
  { id: 6, name: "Nhân viên Sales" },
  { id: 7, name: "Nhân viên Marketing" },
  { id: 8, name: "Nhân viên IT" },
];

const employees: Employee[] = [
  {
    id: "1",
    name: "Phương đẹp trai",
    image: staffProfile.src,
    department: { id: "1", name: "IT" },
    position: "Senior Devops",
    experience: "5 years",
  },
  {
    id: "2",
    name: "Phương đẹp trai",
    image: staffProfile.src,
    department: { id: "1", name: "IT" },
    position: "Senior Devops",
    experience: "5 years",
  },
  {
    id: "3",
    name: "Phương đẹp trai",
    image: staffProfile.src,
    department: { id: "1", name: "IT" },
    position: "Senior Devops",
    experience: "5 years",
  },
];

export default function EmployeePage() {
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
        addButtonText="Tạo nhân viên"
        searchPlaceholder="Tìm kiếm nhân viên"
      />
      <ListStaff employees={employees} />
    </>
  );
}
