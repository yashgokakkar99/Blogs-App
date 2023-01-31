import { useParams, useHistory } from "react-router-dom";
import userFetch from "./userFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    Data: blog,
    isPending,
    error,
  } = userFetch("http://localhost:8000/blogs/"+id);
  const handleDelete = ()=>{
    fetch("http://localhost:8000/blogs/"+blog.id,{
      method:'DELETE'
    }).then(()=>{
      history.push('/');
    })
  }
  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <h4>
            {blog.author}, {blog.date}
          </h4>
          <h5>{blog.body}</h5>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
