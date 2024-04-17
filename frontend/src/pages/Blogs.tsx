import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return <div >
      <BlogSkeleton n={5}/>
      <BlogSkeleton n={0}/>
    </div>;
  }

  return (
    <div>
      <div className="flex justify-center mt-10">
        <div >
          {blogs.map(blog => <BlogCard
            id={blog.id}
            authorName={blog.author.name || "Anonymous"} 
            title={blog.title}
            content={blog.content}
            publishDate="Dec 3, 2023"
          />)}
        </div>
      </div>
    </div>
  );
};
