import { FullBlog } from "../components/FullBlog";
import { SingleBlogSkeleton } from "../components/SingleBlogSkeleton";
import { useBlog } from "../hooks"
import { useParams } from "react-router-dom";

const Blog = () => {
  const {id} = useParams()

  const {blog, loading} = useBlog({
    id: Number(id)
  });

  if(loading) {
    return <div>
      <SingleBlogSkeleton/>
    </div>
  }

  return (
    <div>
      <FullBlog blog={blog}/>
    </div>
  )
}

export default Blog
