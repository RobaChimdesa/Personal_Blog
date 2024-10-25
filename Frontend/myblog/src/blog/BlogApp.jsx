import React, { useState,useEffect } from "react";
import axios from "axios";
import BlogForm from "./BlogForm";
import BlogList from "./BlogList";
import img1 from "../assets/img1.jpeg"
import img2 from '../assets/img2.jpeg'
import img3 from '../assets/img3.jpeg'
import img4 from '../assets/img4.jpeg'
import img5 from '../assets/img5.jpeg'
import img6 from '../assets/img6.jpeg'
import img7 from '../assets/img7.jpeg'
const BlogApp = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Welcome to My Blog!",
      description:
      'This is a default blog post to welcome you to the blog. Click "Read More" to see the full content.',
      image: img1, // Placeholder image
    },
    {
      id: 2,
      title: "Welcome to My Blog!",
      description:
      'This is a default blog post to welcome you to the blog. Click "Read More" to see the full content.',
      image: img2, // Placeholder image
    },
    {
      id: 3,
      title: "Welcome to My Blog!",
      description:
        'This is a default blog post to welcome you to the blog. Click "Read More" to see the full content.',
      image: img3, // Placeholder image
    },
    {
      id: 4,
      title: "Welcome to My Blog!",
      description:
        'This is a default blog post to welcome you to the blog. Click "Read More" to see the full content.',
      image: img4, // Placeholder image
    },
    {
      id: 5,
      title: "Welcome to My Blog!",
      description:
        'This is a default blog post to welcome you to the blog. Click "Read More" to see the full content.',
      image: img5, // Placeholder image
    },
    {
      id: 6,
      title: "Welcome to My Blog!",
      description:
        'This is a default blog post to welcome you to the blog. Click "Read More" to see the full content.',
      image: img6, // Placeholder image
    },
    {
      id: 7,
      title: "Welcome to My Blog!",
      description:
        'This is a default blog post to welcome you to the blog. Click "Read More" to see the full content.',
      image: img7, // Placeholder image
    },
  ]);
  const [editingBlog, setEditingBlog] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAddBlog,setIsAddBlog] = useState(false)

useEffect(() =>{
  axios.get('http://localhost:8000/api/blogs/')
  .then((response) => {
    setBlogs(response.data)
    console.log('successful connected')
  })
  .catch((error)=>{
    console.error('There was an error fetching the blogs',error);
  });
}, [])

  // const addBlog = (newblog) => {
  //   setBlogs([...blogs, { ...newblog, id: Date.now() }]);
  // };

  // Add a new blog
const addBlog = (newblog) =>{
  axios.post('http://localhost:8000/api/blogs/',newblog)
  .then((response) => {
    setBlogs([...blogs,response.data]);
  })
  .catch((error)=>{
   console.error("there was an error adding blog",error)
   console.log('not connected')
  });
};

  // const UpdateBlog = (updatedBlog) => {
  //   setBlogs(
  //     blogs.map((blog) => (blog.id === updatedBlog.id ? updatedBlog : blog))
  //   );
  //   setEditingBlog(null);
  // };

  // Update an existing blog
  const UpdateBlog = (updatedBlog) =>{
    axios.put(`http://localhost:8000/api/blogs/${updatedBlog.id}/`,updatedBlog)
    .then((response) => {
      setBlogs(blogs.map((blog) => (blog.id === updatedBlog.id ? response.data:blog)));
      setEditingBlog(null)
    })
    .catch((error) => {
      console.error("there was an error updating blog",error)
    });

  };


  // const deleteBlog = (id) => {
  //   setBlogs(blogs.filter((blog) => blog.id !== id));
  // };

  // Delete blog


  const deleteBlog = (id) =>{
    axios.delete(`http://localhost:8000/api/blogs/${id}/`)
    .then(()=>{
      setBlogs(blogs.filter((blog) => blog.id !== id));
    })
    .catch((error) => {
      console.error("there was an error deleting blog",error)
    });

  };

  const editBlog = (blog) => {
    setEditingBlog(blog);
    setIsAddBlog(true)
  };

  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
    
    
  };

  const handleAddBlog = () =>{
    setIsAddBlog(!isAddBlog)
    setEditingBlog(null)
    
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 min-h-screen">
      {" "}
      <h1 className="text-3xl font-bold text-center mb-6">Blog Manager</h1>{" "}
      <button
        onClick={handleLoginLogout}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        {" "}
        {isLoggedIn ? "Logout" : "Login"}{" "}
      </button>{" "}
      
       {isLoggedIn && <button className="bg-blue-500 text-white
       px-8 py-2 ml-64 mb-2 sm:ml-14 rounded hover:bg-blue-600 transition" onClick={handleAddBlog}>
        {" "}
        {isAddBlog ? 'cancel' : 'Add Blog'}</button>}

      {isAddBlog && (
        <BlogForm
          addBlog={addBlog}
          updateBlog={UpdateBlog}
          editingBlog={editingBlog}
        />
      )}{" "}
      <BlogList
        blogs={blogs}
        editBlog={editBlog}
        deleteBlog={deleteBlog}
        isLoggedIn={isLoggedIn}
      />{" "}
    </div>
  );
};

export default BlogApp;
