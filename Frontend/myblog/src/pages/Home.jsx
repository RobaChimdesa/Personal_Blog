


import me from "../assets/me.jpg";

import React, { useState } from 'react'; 
import axios from 'axios';


const BlogCard = ({ title, date, imageUrl, content, onSeeDetails }) => {  

  

  
  return (  
    <div className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-lg m-4">  
     <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />  
       <div className="p-4">  
        <h2 className="text-lg font-bold text-gray-900">{title}</h2>  
        <p className="text-gray-600">{date}</p>  
        <button   
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"   
          onClick={onSeeDetails}>  
          See Details  
        </button>  
      </div>  
    </div>  
  );  
};  

const BlogDetail = ({ title, date,imageUrl, content, onBack }) => {  
  return (  
    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg m-4 p-4">  
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />  

      <h2 className="text-xl font-bold text-gray-900">{title}</h2>  
      <p className="text-gray-600">{date}</p>  
      <p className="mt-2 text-gray-700">{content}</p>  
      <button   
        className="mt-4 px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"   
        onClick={onBack}>  
        Back  
      </button>  
    </div>  
  );  
};  

const Home = () => {  
  const [showDetail, setShowDetail] = useState(false);  

  const sampleBlog = {  
    title: 'My Amazing Blog Post',  
    date: 'October 10, 2023',  
    imageUrl: me,
    content: 'This is an incredible blog post that provides detailed insights on a fascinating topic. Here you can explain the content in more detail, provide examples, and keep the reader engaged.',  
  }

  const handleSeeDetails = () => {  
    setShowDetail(true);  
  };  

  const handleBack = () => {  
    setShowDetail(false);  
  };  

  return (  
    <div className="bg-gray-100 min-h-screen p-6">  
      <h1 className="text-2xl font-bold text-center mb-6">My Blog</h1>  
      {showDetail ? (  
        <BlogDetail   
           
          title={sampleBlog.title}   
          date={sampleBlog.date}   
          imageUrl={sampleBlog.imageUrl} 
          content={sampleBlog.content}   
          onBack={handleBack}  
        />  
      ) : (  
        <BlogCard   
          title={sampleBlog.title}   
          date={sampleBlog.date}   
          imageUrl={sampleBlog.imageUrl}   
          onSeeDetails={handleSeeDetails}  
        />  
      )}  
    </div>  
  );  
};  

export default Home;