import React, { useState } from 'react';  
import axios from 'axios';  

export default function Register() {  
    const [formdata, setFormdata] = useState({  
        username: "",  
        email: "",  
        password1: "",  
        password2: "",  
    });  

    const handleChange = (e) => {  
        setFormdata({  
            ...formdata, [e.target.name]: e.target.value  
        });  
    };  

    const [isLoading, setIsLoading] = useState(false);  
    const [successMessage, setSuccessMessage] = useState(null);  
    const [error, setError] = useState(null);  

    const handleSubmit = async (e) => {  
        e.preventDefault();  
        if (isLoading) {  
            return;  
        }  
        setIsLoading(true);  
        
        try {  
            const response = await axios.get("http://127.0.0.1:8000/myblog/blog_list/");  
            console.log("success", response.data);  
            setSuccessMessage("Registration Successful");  
        } catch (error) {  
            console.log("error during registration!", error.response?.data);  
            if (error.response && error.response.data) {  
                Object.keys(error.response.data).forEach(field => {  
                    const errorMessage = error.response.data[field];  
                    if (errorMessage && errorMessage.length > 0) {  
                        setError(errorMessage[0]);  
                    }  
                });  
            }  
        } finally {  
            setIsLoading(false);  
        }  
    };  

    return (  
        <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">  
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">  
                {error && <p className="text-red-500 mb-4">{error}</p>}  
                {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}  
                
                <form onSubmit={handleSubmit} className="flex flex-col">  
                    <label className="mb-2 font-semibold">Username:</label>  
                    <input  
                        type='text'  
                        name='username'  
                        value={formdata.username}  
                        onChange={handleChange}  
                        className="border p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"  
                        required  
                    />  
                    <label className="mb-2 font-semibold">Email:</label>  
                    <input  
                        type='email'  
                        name='email'  
                        value={formdata.email}  
                        onChange={handleChange}  
                        className="border p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"  
                        required  
                    />  
                    <label className="mb-2 font-semibold">Password:</label>  
                    <input  
                        type='password'  
                        name='password1'  
                        value={formdata.password1}  
                        onChange={handleChange}  
                        className="border p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"  
                        required  
                    />  
                    <label className="mb-2 font-semibold">Confirm Password:</label>  
                    <input  
                        type='password'  
                        name='password2'  
                        value={formdata.password2}  
                        onChange={handleChange}  
                        className="border p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"  
                        required  
                    />  
                    <button  
                        type='submit'  
                        disabled={isLoading}  
                        className={`bg-blue-500 text-white py-2 rounded hover:bg-blue-600 active:bg-blue-700 ${isLoading ? 'cursor-not-allowed opacity-50' : ''}`}  
                    >  
                        {isLoading ? 'Loading...' : 'Register'}  
                    </button>  
                </form>  
            </div>  
        </div>  
    );  
}