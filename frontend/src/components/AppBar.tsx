import { Avatar } from "./BlogCard"


export const AppBar = () => {
    return <div className="border-b-[1px] flex justify-between items-center px-10 py-4 mb-10">
        <div>
            Medium
        </div>
        <div>
            <Avatar name="Jack" size="big"/>
        </div>
    </div>
}