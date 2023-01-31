import { Link } from "react-router-dom";

const BlogsList = ({blogs, title}) => {
//   const blogs = props.blogs;
//   const title = props.title;

  return (
    <div className="blogsList">
        <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
          <h2>{blog.title}</h2>
          <p>Written by : {blog.author}</p>
          </Link>
          {/* <button onClick={()=>{handleDelete(blog.id)}}>Delete blog</button> */}
        </div>
      ))}
      
    </div>
  );
};

export default BlogsList;
