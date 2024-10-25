import React, { useState } from "react";
const BlogItem = ({ blog, editBlog, deleteBlog, isLoggedIn,isEditBlog }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 transition-transform transform hover:scale-105">
      {" "}
      <h2 className="text-lg font-semibold text-gray-800">{blog.title}</h2>{" "}
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-48 object-cover rounded-lg mt-2"
      />{" "}
      <p className="text-gray-700 mt-2">
        {" "}
        {isExpanded
          ? blog.description
          : `${blog.description.substring(0, 50)}...`}{" "}
      </p>{" "}
      <button
        onClick={toggleExpanded}
        className="text-blue-500 mt-2 hover:underline focus:outline-none"
      >
        {" "}
        {isExpanded ? "Read Less" : "Read More"}{" "}
      </button>{" "}
      {isLoggedIn && (
        <div className="mt-4 flex space-x-2">
          {" "}
          <button
           
            onClick={() => editBlog(blog)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-yellow-600 transition"
          >
            {" "}
            Edit{" "}
          </button>{" "}
          <button
            onClick={() => deleteBlog(blog.id)}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            {" "}
            Delete{" "}
          </button>{" "}
        </div>
      )}{" "}
    </div>
  );
};
export default BlogItem;
