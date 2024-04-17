import { FullBlog } from "../components/FullBlog";
import { SingleBlogSkeleton } from "../components/SingleBlogSkeleton";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();

  const { blog, loading } = useBlog({
    id: id || ""
  });

  if (loading || !blog) {
    return (
      <div>
        <SingleBlogSkeleton />
      </div>
    );
  }

  return (
    <div>
      <FullBlog blog={blog} />
    </div>
  );
};

export default Blog;
