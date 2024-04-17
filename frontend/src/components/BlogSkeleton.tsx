import { Circle } from "./BlogCard";

export const BlogSkeleton = ({ n = 4 }: { n: number }) => {


  return (
    <div className="flex justify-center mt-10">
      <div className="p-4 border-b-[1px] border-slate-200 pb-4 w-screen max-w-screen-sm cursor-pointer">
        <div className="flex items-center pb-2">
          <div className="relative inline-flex items-center justify-center overflow-hidden bg-gray-200 rounded-full dark:bg-gray-600} h-7 w-7 "></div>
          <div className="ml-3 text-sm w-6 h-4 bg-slate-200"></div>
          <div className="pl-2 ">
            <Circle />
          </div>
          <div className="ml-2 bg-slate-200 w-24 h-4 "></div>
        </div>
        <div className="w-[80%] bg-slate-200 h-12 mb-1"></div>
        {[...Array(n)].map((_, index) => (
          <div key={index} className="bg-slate-200 w-full h-6 mt-2"></div>
        ))}
        <div className="bg-slate-200 w-16 h-4"></div>
      </div>
    </div>
  );
};
