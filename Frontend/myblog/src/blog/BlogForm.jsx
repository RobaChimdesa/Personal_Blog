import React, { useEffect, useState } from "react";

const BlogForm = ({ addBlog, updateBlog, editingBlog }) => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (editingBlog) {
      setTitle(editingBlog.title);
      setDescription(editingBlog.description);
      setImage(editingBlog.image);
    } else {
      setTitle("");
      setDescription("");
      setImage("");
    }
  }, [editingBlog]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blogData = { title, description, image };

    if (editingBlog) {
      updateBlog({ ...blogData, id: editingBlog.id });
    } else {
      addBlog(blogData);
    }
    setTitle("");
    setDescription("");
    setImage("");
  };
  return (
    <form className="bg-white rounded-lg shadow-md p-6" onSubmit={handleSubmit}>
      {" "}
      <h2 className="text-xl font-semibold mb-4">
        {" "}
        {editingBlog ? "Update Blog" : "Add Blog"}{" "}
      </h2>{" "}
      <div className="mb-4">
        {" "}
        <label className="block text-gray-700">Title:</label>{" "}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
        />{" "}
      </div>{" "}
      <div className="mb-4">
        {" "}
        <label className="block text-gray-700">Description:</label>{" "}
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
        />{" "}
      </div>{" "}
      <div className="mb-4">
        {" "}
        <label className="block text-gray-700">Image:</label>{" "}
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        
          className="mt-1 block w-full border rounded-md px-3 py-2 text-gray-700 focus:outline-none"
        />{" "}
      </div>{" "}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
      >
        {" "}
        {editingBlog ? "Update Blog" : "Add Blog"}{" "}
      </button>{" "}
    </form>
  );
};
export default BlogForm;
