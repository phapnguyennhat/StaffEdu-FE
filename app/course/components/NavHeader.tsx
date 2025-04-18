
import SearchCourse from './SearchCourse';
import Image from 'next/image';
import AddIcon from '../../../public/add-icon.svg';

export default function NavHeader() {
	const navs = [
		'Tất cả khóa học',
		'Khóa học của tôi',
		'Khóa học đã hoàn thành',
		'Cơ bản',
		'Front-End',
		'Back-End',
		'DevOps',
		'AI/ML',
		'Data Science',
		'Mobile Development',
		'Game Development',
		'Blockchain',
	];
	return (
		<div className='mx-[60px] mb-[24px] '>
			
			<nav className=" my-4 flex items-center scrollbar-hide overflow-x-auto whitespace-nowrap w-full    shadow-md rounded-[10px]">
				<ul className="flex ">
					{navs.map((nav, index) => (
						<li
							key={index}
							className="inline-block text-xl px-4 py-2 font-bold  text-[#7A7EF1]  h-full border-b-2 border-transparent hover:border-blue-500  cursor-pointer"
						>
							{nav}
						</li>
					))}
				</ul>
            </nav>
            
            <div className='  flex items-center justify-between' >
                <SearchCourse />
                <button className=' bg-[#fff] py-2 px-4 inline-flex items-center rounded-[24px]' >
                   <Image src={AddIcon} alt="Add" width={24} height={24} className=' size-[34px] ' />
                   <span className='text-[16px] font-bold text-[#7A7EF1]'>Tạo khóa học</span>
                </button>
            </div>
		</div>
	);
}
