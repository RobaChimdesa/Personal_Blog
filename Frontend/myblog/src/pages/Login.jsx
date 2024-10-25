import React, { useState } from 'react';  
import axios from 'axios';  

export default function Login() {  
    const [formdata, setformdata] = useState({  
        email: "",  
        password: "",  
    });  

    const handlechange = (e) => {  
        setformdata({  
            ...formdata, [e.target.name]: e.target.value  
        });  
    };  

    const [isloading, setIsloading] = useState(false);  
    const [successMessage, setSuccessMessage] = useState(null);  
    const [error, setError] = useState(null);  

    const handleSubmit = async (e) => {  
        e.preventDefault();  
        if (isloading) {  
            return;  
        }  
        setIsloading(true);  

        try {  
            const response = await axios.post("http://127.0.0.1:8000/api/login/", formdata);  
            console.log("success", response.data);  
            setSuccessMessage("Login Successful");  
        } catch (error) {  
            console.log("error during Login!", error.response?.data);  
            if (error.response && error.response.data) {  
                Object.keys(error.response.data).forEach(field => {  
                    const errorMessage = error.response.data[field];  
                    if (errorMessage && errorMessage.length > 0) {  
                        setError(errorMessage[0]);  
                    }  
                });  
            }  
        } finally {  
            setIsloading(false);  
        }  
    };  

    return (  
        <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">  
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">  
                {error && <p className="text-red-500">{error}</p>}  
                {successMessage && <p className="text-green-500">{successMessage}</p>}  
                <form onSubmit={handleSubmit} className="flex flex-col">  
                    <label className="mb-2 font-semibold">Email:</label>  
                    <input  
                        type='email'  
                        name='email'  
                        value={formdata.email}  
                        onChange={handlechange}  
                        className="border p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"  
                        required  
                    />  
                    <label className="mb-2 font-semibold">Password:</label>  
                    <input  
                        type='password'  
                        name='password'  
                        value={formdata.password}  
                        onChange={handlechange}  
                        className="border p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"  
                        required  
                    />  
                    <button  
                        type='submit'  
                        disabled={isloading}  
                        className={`bg-blue-500 text-white py-2 rounded hover:bg-blue-600 active:bg-blue-700 ${isloading ? 'cursor-not-allowed opacity-50' : ''}`}  
                    >  
                        {isloading ? 'Loading...' : 'Login'}  
                    </button>  
                </form>  
            </div>  
        </div>  
    );  
}