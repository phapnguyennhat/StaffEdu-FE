"use client";

import Image from "next/image";
import AddIcon from "@/public/add-icon.svg";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Category } from "@/interface";
import React from "react";

interface NavHeaderProps {
  categories: Category[];
  searchPlaceholder?: string;
  onSearch?: (searchTerm: string) => void;
  addButtonText?: string;
  onAddClick?: () => void;
  showAddButton?: boolean;
}

export default function NavHeader({
  categories,
  searchPlaceholder = "Nhập nội dung tìm kiếm",
  onSearch,
  addButtonText = "",
  onAddClick,
  showAddButton = true,
}: NavHeaderProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchTerm = formData.get("searchTerm") as string;
    if (onSearch) onSearch(searchTerm);
  };

  // Scroll ngang khi giữ chuột
  const navRef = React.useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);
  const [showLeftArrow, setShowLeftArrow] = React.useState(false);
  const [showRightArrow, setShowRightArrow] = React.useState(true);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!navRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - navRef.current.offsetLeft);
    setScrollLeft(navRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !navRef.current) return;
    e.preventDefault();
    const x = e.pageX - navRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    navRef.current.scrollLeft = scrollLeft - walk;
    updateArrowVisibility();
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const updateArrowVisibility = () => {
    if (!navRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = navRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
  };

  const scroll = (direction: "left" | "right") => {
    if (!navRef.current) return;
    const scrollAmount = 200; // Số pixel cuộn mỗi lần
    const newScrollLeft =
      direction === "left"
        ? navRef.current.scrollLeft - scrollAmount
        : navRef.current.scrollLeft + scrollAmount;

    navRef.current.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };

  React.useEffect(() => {
    updateArrowVisibility();
    const nav = navRef.current;
    if (nav) {
      nav.addEventListener("scroll", updateArrowVisibility);
      return () => nav.removeEventListener("scroll", updateArrowVisibility);
    }
  }, []);

  return (
    <div className="mx-[60px] mb-[24px] relative">
      <div className="relative">
        {showLeftArrow && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
          >
            <ChevronLeft className="w-6 h-6 text-[#7A7EF1]" />
          </button>
        )}
        <nav
          ref={navRef}
          className="my-4 flex items-center scrollbar-hide overflow-x-auto whitespace-nowrap w-full shadow-md rounded-[10px] cursor-grab active:cursor-grabbing select-none "
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <ul className="flex">
            {categories.map((category) => (
              <li
                key={category.id}
                className="inline-block text-xl px-4 py-2 font-bold text-[#7A7EF1] h-full border-b-2 border-transparent hover:border-blue-500 cursor-pointer select-none"
              >
                {category.name}
              </li>
            ))}
          </ul>
        </nav>
        {showRightArrow && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
          >
            <ChevronRight className="w-6 h-6 text-[#7A7EF1]" />
          </button>
        )}
      </div>

      <div className="flex items-center justify-between">
        <section>
          <form
            onSubmit={handleSubmit}
            className="w-2xs py-2 px-4 shadow rounded-sm bg-[#fff] inline-flex items-center"
          >
            <input
              name="searchTerm"
              className="ring-0 outline-none flex-1"
              placeholder={searchPlaceholder}
            />
            <button type="submit">
              <Search size={25} />
            </button>
          </form>
        </section>
        {showAddButton && (
          <button
            className="bg-[#fff] py-2 px-4 inline-flex items-center rounded-[24px] hover:border-blue-500 cursor-pointer hover:bg-[#7A7EF1]/20 transition-all duration-300"
            onClick={onAddClick}
          >
            <Image
              src={AddIcon}
              alt="Add"
              width={24}
              height={24}
              className="size-[34px]"
            />
            <span className="text-[16px] ml-2 font-bold text-[#7A7EF1]">
              {addButtonText}
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
