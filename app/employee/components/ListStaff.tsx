import React from "react";
import { Employee } from "@/interface";
import StaffCard from "./StaffCard";

export default function ListStaff({ employees }: { employees: Employee[] }) {
  return (
    <section>
      <ul className=" mx-[60px] grid lg:grid-cols-3 gap-8">
        {employees.map((employee) => (
          <li
            key={employee.id}
            className=" shadow-lg bg-[#fff] overflow-hidden rounded-[10px]"
          >
            <StaffCard employee={employee} />
          </li>
        ))}
      </ul>
    </section>
  );
}
