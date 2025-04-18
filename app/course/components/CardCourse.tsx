import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function CardCourse() {
	return (
		<Link className=" " href={'#'}>
			<Image
				className=" w-full h-auto "
				src={'/course.png'}
				alt="course"
				width={262}
				height={155}
			/>
			<div className=' p-4'>
				<div className=" mb-2 bg-[#435DB3] rounded-[5px] text-white  inline-flex items-center justify-center px-2 h-[28px]">
					Cơ bản
				</div>
				<h6>C# cho người mới bắt đầu </h6>
				<p className="text-[#797979] text-xs ">Nguyễn Phap </p>
			</div>
		</Link>
	);
}
