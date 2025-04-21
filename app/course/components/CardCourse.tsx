import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Course } from "@/interface";

export default function CardCourse({ course }: { course: Course }) {
  return (
    <Link className="flex flex-col h-[320px] block" href={"#"}>
      <div className="h-[60%] relative">
        <Image
          className="w-full h-full object-cover"
          src={course.image}
          alt={course.title}
          fill
        />
      </div>
      <div className="p-4 h-[40%]">
        <div className="mb-2 bg-[#435DB3] rounded-[5px] text-white inline-flex items-center justify-center px-2 h-[28px]">
          Cơ bản
        </div>
        <h6>{course.title}</h6>
        <p className="text-[#797979] text-xs">{course.instructor}</p>
      </div>
    </Link>
  );
}
