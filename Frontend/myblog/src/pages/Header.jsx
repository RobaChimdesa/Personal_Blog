import React from "react";
const Header = ({title,subtitle}) => {
    return (
        <header className="mb-4 text-center">
            <h1 className="text-3xl font-bold text-teal-600">{title}</h1>
            <h2 className="text-xl text-gray-500">{subtitle}</h2>
        </header>
    );
};

export default Header