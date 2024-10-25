import me from "../assets/me.jpg"; // Ensure this points to a valid image
import React, { useState, useEffect } from "react";
import axios from "axios";

const BlogCard = ({ title, date, imageUrl, onSeeDetails }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-lg m-4">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-900">{title}</h2>
        <p className="text-gray-600">{date}</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={onSeeDetails}
        >
          See Details
        </button>
      </div>
    </div>
  );
};

const BlogDetail = ({ title, date, imageUrl, content, onBack }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg m-4 p-4">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      <p className="text-gray-600">{date}</p>
      <p className="mt-2 text-gray-700">{content}</p>
      <button
        className="mt-4 px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
        onClick={onBack}
      >
        Back
      </button>
    </div>
  );
};

const Ome = () => {
  const [showDetail, setShowDetail] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Fetch the blog data from the API endpoint
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/myblog/blog_list/");
        setBlogs(response.data); // Assuming response.data contains the list of blogs
      } catch (error) {
        console.error("Error fetching blogs", error);
      }
    };

    fetchBlogs();
  }, []);

  const handleSeeDetails = (blog) => {
    setSelectedBlog(blog);
    setShowDetail(true);
  };

  const handleBack = () => {
    setShowDetail(false);
    setSelectedBlog(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-2xl font-bold text-center mb-6">My Blog</h1>
      {showDetail && selectedBlog ? (
        <BlogDetail
          title={selectedBlog.title}
          date={selectedBlog.date}
          imageUrl={me}
        //   imageUrl={selectedBlog.imageUrl || me} // Fallback image if not provided
          content={selectedBlog.content}
          onBack={handleBack}
        />
      ) : (
        blogs.map((blog) => (
          <BlogCard
            key={blog.id} // Assuming each blog has a unique ID
            title={blog.title}
            date={blog.date}
            imageUrl={blog.imageUrl || me} // Fallback image if not provided
            onSeeDetails={() => handleSeeDetails(blog)}
          />
        ))
      )}
    </div>
  );
};

export default Ome;
