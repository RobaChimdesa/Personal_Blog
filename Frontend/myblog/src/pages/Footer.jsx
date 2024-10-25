// Footer.js  
import React from 'react';  

const Footer = () => {  
  return (  
    <footer className="bg-gray-800 text-white py-6">  
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">  
        <div className="text-center md:text-left">  
          <h5 className="font-bold">Company Name</h5>  
          <p className="text-sm mt-2">© {new Date().getFullYear()} All Rights Reserved.</p>  
        </div>  
        <nav className="mt-4 md:mt-0">  
          <ul className="flex space-x-4">  
            <li>  
              <a href="#" className="hover:text-gray-400 text-sm">Privacy Policy</a>  
            </li>  
            <li>  
              <a href="#" className="hover:text-gray-400 text-sm">Terms of Service</a>  
            </li>  
            <li>  
              <a href="#" className="hover:text-gray-400 text-sm">Contact Us</a>  
            </li>  
          </ul>  
        </nav>  
      </div>  
    </footer>  
  );  
}  

export default Footer;