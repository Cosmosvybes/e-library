import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { FaLock } from "react-icons/fa";

function Members() {
  const [users, setUsers] = useState([
    {
      id: 1,
      firstname: "Lion and Elepant",
      lastname: "Alex Iwobi",
      city: "Lagos",
      phone: "09025378193",
    },
    {
      id: 2,
      firstname: "Timesless Experience",
      lastname: "Real Joe",
      phone: "09025378193",
      city: "Abuja",
    },
    {
      id: 3,
      firstname: "The Last day at the vocanoes",
      lastname: "Ridewan Wole Soyinka",
      city: "Ibadan",
      phone: "09025378193",
    },
    {
      id: 4,
      firstname: "Things Fall Apart",
      lastname: "JORDAN Ayew",
      city: "Ilorin",
      phone: "09025378193",
    },
  ]);
  const allRegistered = users.map((user) => (
    <tr key={user.id} className="border border-collapse py-4 text-center">
      <td className="border border-spacing-1 border-collapse py-4 ">{user.id}</td>
      <td className="border border-spacing-1 border-collapse py-4">
        {user.firstname}
      </td>
      <td className="border border-spacing-1 border-collapse py-4">
        {user.lastname}
      </td>
      <td className="border border-spacing-1 border-collapse py-4">{user.phone}</td>
      <td className="border border-spacing-1 border-collapse py-4">{user.city}</td>

      <td className="text-center px-2 py-4 flex justify-center items-center">
        {/* <Link className=" text-green-500  w-full px-2 py-2" to="/"> */}
        <FaLock className="text-center" />
        {/* </Link> */}
      </td>
    </tr>
  ));
  return (
    <>
      <Navbar />
    
      <div className="relative px-2 bg-gray-50">
        <h1 className="text-left text-2xl px-0"> Registered Users</h1>
        <table className="w-full">
          <thead className="border border-collapse py-4 text-center">
            <tr>
              <th>ID</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Phone</th>
              <th>Location</th>
              <th>Restricted</th>
            </tr>
          </thead>
          <tbody>{allRegistered}</tbody>
        </table>
      </div>
    </>
  );
}

export default Members;
