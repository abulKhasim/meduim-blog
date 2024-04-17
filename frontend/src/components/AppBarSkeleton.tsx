
export const AppBarSkeleton = () => {
  return (
    <div className="border-b-[1px] flex justify-between items-center px-10 py-4 w-screen ">
      <div className="w-16 h-6 bg-slate-200"></div>

      <div className="flex items-center gap-5">
        <div className="bg-slate-200 w-16 h-10 rounded-full"></div>
        <div className="bg-gray-200 rounded-full  h-10 w-10"></div>
      </div>
    </div>
  );
};
