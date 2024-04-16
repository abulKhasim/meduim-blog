import { useBlog } from "../hooks"

const Blog = () => {
  const {blog, loading} = useBlog();

  if(loading) {
    return <div>
      laoding...
    </div>
  }

  return (
    <div>
      blog
    </div>
  )
}

export default Blog
