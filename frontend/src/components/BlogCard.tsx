import { Link } from "react-router-dom";


interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishDate: string;
    id: number
}

export const BlogCard = ({authorName, title, content, publishDate, id}: BlogCardProps) => {
    return <Link to={`/blog/${id}`}> <div className="p-4 border-b-[1px] border-slate-200 pb-4 w-screen max-w-screen-sm cursor-pointer">
        <div className="flex items-center pb-2">
            <div>
                 <Avatar size="small" name={authorName}/> 
            </div>
            <div className="pl-2 font-medium text-sm">
                {authorName} 
            </div>
            <div className="pl-2">
                <Circle/>
            </div>
            <div className=" pl-2 text-slate-500 text-sm">
                {publishDate}
            </div>
        </div>
        <div className="font-bold text-3xl pb-1 w-[90%]">
            {title}
        </div>
        <div className="text-slate-500 pb-6 text-lg">
            {content.slice(0, 150) + "..."}
        </div>
        <div className="text-slate-500 text-sm font-thin">
            {`${Math.ceil(content.length / 100)} min read`}
        </div>

    </div>
    </Link>
}

export function Circle(){
    return <div className="w-1 h-1 bg-slate-200 rounded-full">

    </div>
}

export function Avatar({name, size = "small"}: {name: string, size ?: "small" | "big"}) {
    return <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-400 rounded-full dark:bg-gray-600} ${size === "small" ? "h-7 w-7" : "w-10 h-10"} `}>
        <span className={`${size === "small" ? "text-sm" : "text-md"} text-gray-600 dark:text-gray-300`}>{name[0].toUpperCase()}</span>
    </div>
    
}