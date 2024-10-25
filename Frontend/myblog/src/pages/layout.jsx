// import React from 'react'
// import { Outlet,Link } from 'react-router-dom'
// export default function Layout() {
//   return (
//     <>
    
//       <nav>
//         <ul>
//             <li>
//                 <Link to="/">Home</Link>
//             </li>
//             <li>
//                 <Link to="/login">Login</Link>
//             </li>
//             <li>
//                 <Link to="/register">Register</Link>
//             </li>
//         </ul>
        
//       </nav>
//       <Outlet />
     
//     </>
//   )
// }


import React, { useState } from 'react';  
import { Outlet, Link } from 'react-router-dom';  
import Footer from './Footer';
export default function Layout() {  
  const [isOpen, setIsOpen] = useState(false);  

  const toggleMenu = () => {  
    setIsOpen(!isOpen);  
  }  

  return (  
    <>  
      <nav className="bg-gray-800 p-4">  
        <div className="flex justify-between  items-center ">  
          <div className="text-white font-bold">Brand</div>  
          <div className="block md:hidden">  
            <button onClick={toggleMenu} className="text-white">  
              {isOpen ? 'Close' : 'Menu'}  
            </button>  
          </div>  
        </div>  
        <ul className={`flex flex-col md:flex-col md:space-x-4 ${isOpen ? 'block' : 'hidden'}  md:grid grid-cols-3 md:justify-end md:flex  `}>  
          <li>  
            <Link to="/" className="text-white hover:bg-gray-700 py-2 px-4 rounded">My Blog</Link>  
          </li>  
          <li>  
            <Link to="/login" className="text-white hover:bg-gray-700 py-2 px-4 rounded">Login</Link>  
          </li>  
          <li>  
            <Link to="/register" className="text-white hover:bg-gray-700 py-2 px-4 rounded">Register</Link>  
          </li>
            
        </ul>  
      </nav>  
    
      <main className="p-4">  
        <Outlet />  
      </main>  
      {<Footer/>}
    </>  
  );  
}