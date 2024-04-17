import { Blog } from "../hooks"
import { AppBar } from "./AppBar"
import { Avatar } from "./BlogCard"

export const FullBlog = ({blog}: {blog : Blog}) => {
    return <div>
        <AppBar/>
        <div className="flex justify-center max-w-screen-2xl px-20 mt-20">
        <div className="w-[62%] ">
            <div className="text-5xl font-extrabold w-[85%]">
                {blog.title}
            </div>
            <div className="text-slate-500 pt-3">
                Posted on August 24, 2023
            </div>
            <div className="text-slate-700 pt-4 text-md">
                {blog.content}
            </div>
        </div>
        <div className="w-[35%]  pl-2">
            <div className="text-slate-500">
                Author
            </div>
            <div className="flex items-center pt-5">
                <div className="pr-3">
                    <Avatar name={blog.author.name} size="small"/>
                </div>
                <div className="font-bold text-2xl">
                    {blog.author.name || "Anonymouse"}
                </div>
            </div>

        </div>
    </div>
    </div>
    
}