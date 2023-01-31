import { useState, useEffect } from "react";
import BlogsList from "./BlogsList";
import userFetch from "./userFetch";

const Home = () => {
  // let name = "Hanuman";
  // const [name, setName] = useState("Hanuman");  // Reactive variable

  // const handleClick = () => {
  //     // name = "Jai Shree Ram";
  //     // console.log("You just clicked me..." + name);
  //     setName("Jai Shree Ram")
  // }

  // const handleClickAgain = (name) => {
  //     console.log("Hello" + name);
  // }

  // const handleDelete = (id) => {
  //     const newBlogs = blogs.filter((blog)=>(blog.id !== id));
  //     setBlogs(newBlogs);
  // }

  const {Data:blogs, isPending, error} = userFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
      {/* <p>{name}</p>

            <button onClick = {handleClick} > Click me </button> */}

      {/* <button onClick = {()=>{
                handleClickAgain("Maria")
            }}>Click me again</button> */}

      {error && <div>{error}</div>}

      {isPending && <div>Loading....</div>}

      {blogs && <BlogsList blogs={blogs} title="All blogs" />}
      {/* <BlogsList blogs={blogs.filter((blog)=>(blog.author==="Yash"))} title="Yash's blogs"/>
            <button onClick={()=>{setName("Angel")}}>Change name</button>
            <p>{name}</p> */}
    </div>
  );
};

export default Home;
