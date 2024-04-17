import { FullBlog } from "../components/FullBlog";
import { useBlog } from "../hooks"
import { useParams } from "react-router-dom";

const Blog = () => {
  const {id} = useParams()

  const {blog, loading} = useBlog({
    id: Number(id)
  });

  if(loading) {
    return <div>
      laoding...
    </div>
  }

  return (
    <div>
      <FullBlog blog={blog}/>
    </div>
  )
}

export default Blog
