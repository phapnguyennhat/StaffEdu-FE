import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import React from 'react';

export default function SearchCourse() {
	return (
		<section>
			<form className=' w-2xs py-2 px-4 shadow rounded-b-sm bg-[#fff] inline-flex items-center ' >
                <input className=' ring-0 outline-none flex-1 ' placeholder='Nhập nội dung tìm kiếm' />
                <button>    <Search size={25} /></button>
			</form>
		</section>
	);
}
