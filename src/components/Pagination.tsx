"use client";

interface PaginationProps {
  totalPage: number;
  onPageChange: (page: number) => void;
  currentPage: number;
}

export default function Pagination({
  totalPage,
  onPageChange,
  currentPage,
}: PaginationProps) {
  return (
    <div className="flex gap-2 w-fit text-sm py-3">
      {[...Array(totalPage)].map((_, index) => (
        <button
          key={index + 1}
          onClick={() => onPageChange(index + 1)}
          className={`border border-black/50 p-1 w-8 h-8 rounded-md group hover:bg-black transition-all text-black/70 dark:text-white/30 hover:text-white dark:hover:text-white ${
            currentPage === index + 1 && "bg-black text-white dark:text-white"
          }`}
        >
          <p className="w-full text-center select-none">{index + 1}</p>
        </button>
      ))}
    </div>
  );
}
