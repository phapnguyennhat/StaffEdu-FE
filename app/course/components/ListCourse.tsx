import React from "react";
import CardCourse from "./CardCourse";
import { Course } from "@/interface";

export default function ListCourse({ courses }: { courses: Course[] }) {
  return (
    <section>
      <ul className=" mx-[60px] grid lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <li
            key={course.id}
            className=" shadow-lg bg-[#fff] overflow-hidden rounded-[10px]"
          >
            <CardCourse course={course} />
          </li>
        ))}
      </ul>
    </section>
  );
}
