import { Employee } from "@/interface";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function StaffCard({ employee }: { employee: Employee }) {
  return (
    <Link href="#" className="flex flex-col h-[300px] block">
      <div className="w-[100%] h-[100%] rounded-[10px] overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
        <div className="relative h-[240px] bg-white">
          <div className="absolute top-0 left-0 w-full px-4 py-2">
            <h3 className="font-bold text-black text-base">
              {employee.position}
            </h3>
          </div>
          <div className="h-[240px] w-full overflow-hidden flex items-center justify-center">
            <Image
              src={employee.image}
              alt={employee.name}
              width={150}
              height={150}
              className="w-40 h-40 object-cover rounded-full mx-auto"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full px-4 py-2">
            <h3 className="font-bold text-black text-base text-center">
              {employee.name}
            </h3>
          </div>
        </div>
        <div className="bg-[#435DB3] p-4 text-white flex flex-row justify-between gap-x-2">
          <p className="text-white text-base mb-1 font-bold">
            Phòng ban: {employee.department.name}
          </p>
          <p className="text-white text-base font-bold">
            {employee.experience}
          </p>
        </div>
      </div>
    </Link>
  );
}
