import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-start px-2 items-center  bg-gray-50 py-2">
        <Link to='/users' className="text-green-400 px-1 font-bold underline ">Library Users</Link>
        <Link to='/catalogue' className="text-green-400 px-1 font-bold underline ">Manage-Books</Link>
      </nav>
    </>
  );
};

export default Navbar;
