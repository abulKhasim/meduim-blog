import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

export const AppBar = () => {
  return (
    <div className="border-b-[1px] flex justify-between items-center px-10 py-4 cursor-pointer">
      <Link to={"/blogs"}>
        <div className="font-bold">Medium</div>
      </Link>
      <div>
        <Link to={'/publish'}>
          <button
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 mr-5 text-center me-2 mb-2"
          >
            New
          </button>
        </Link>
        <Avatar name="Jack" size="big" />
      </div>
    </div>
  );
};
