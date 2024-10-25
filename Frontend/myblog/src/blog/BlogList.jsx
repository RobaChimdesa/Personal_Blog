import BlogItem from "./BlogItem";

const BlogList = ({ blogs, editBlog, deleteBlog, isLoggedIn }) => {
  return (
    <div className="flex flex-col items-center">
      {blogs.length === 0 ? (
        <p className="text-gray-600">No blogs to display</p>
      ) : (
        <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl p-2">
          {blogs.map((blog) => (
            <BlogItem
              key={blog.id}
              blog={blog}
              editBlog={editBlog}
              deleteBlog={deleteBlog}
              isLoggedIn={isLoggedIn}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogList;
