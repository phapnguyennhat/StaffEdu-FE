'use client'
import Image from "next/image";
import Link from "next/link"
import { usePathname } from "next/navigation";
import Logo from "../public/logo.svg"
import { LayoutDashboard } from "lucide-react";


export default function NavSideDesktop() {

    const pathname = usePathname();
    return (
        <>
            <div
                className={`fixed top-0 left-0 h-full w-[300px] bg-gradient-to-b bg-[#353636]  shadow-lg transform transition-transform duration-300 ease-in-out z-50 lg:translate-x-0 translate-x-[-100%]`}
            >
                <div className=" pt-8">
                    <h2 className="text-xl inline-flex gap-x-[22px] items-center text-white px-4 font-bold mb-4 text-center">
                        <Image src={Logo} alt="Staff Edu"  />
                        Staff Edu</h2>
                    <ul className="space-y-2">
                        <li><Link href="/" className={`flex items-center gap-x-[10px] px-4 hover:bg-white/20 p-2 rounded text-white ${pathname === '/' ? 'bg-white/20' : ''}`}>  <LayoutDashboard color="#E65F2B" /> Dashboard</Link></li>
                        <li><Link href="/course" className={`block px-4 hover:bg-white/20 p-2 rounded text-white ${pathname === '/course' ? 'bg-white/20' : ''}`}>Courses</Link></li>
                        <li><Link href="/employee" className={`block px-4 hover:bg-white/20 p-2 rounded text-white ${pathname === '/employee' ? 'bg-white/20' : ''}`}>Employees</Link></li>
                        <li><Link href="/roadmap" className={`block px-4 hover:bg-white/20 p-2 rounded text-white ${pathname === '/roadmap' ? 'bg-white/20' : ''}`}>RoadMaps</Link></li>
                    </ul>
                </div>
            </div>


        </>
    )
}
