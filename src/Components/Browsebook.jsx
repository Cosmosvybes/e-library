import React, { useEffect, useState } from "react";
import { FaBook, FaBookOpen, FaCartPlus } from "react-icons/fa";

const Browsebook = () => {
  const [cart, setCart] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [cartItems, setCartItems] = useState(0);
  const [showcart, setShowcart] = useState(false);

  const [books, setBooks] = useState([
    {
      id: 1,
      bookTitle: "Lion and Elepant",
      Author: "Alex Iwobi",
      ISBN: "ABS92W",
      isAvailable: true,
      edit: false,
    },
    {
      id: 2,
      bookTitle: "Timesless Experience",
      Author: "Real Joe",
      ISBN: "ABS92W",
      isAvailable: true,
      edit: false,
    },
    {
      id: 3,
      bookTitle: "The Last day at the vocanoes",
      Author: "R Wole Soyinka",
      ISBN: "ABS92W",
      isAvailable: true,
      edit: false,
    },
    {
      id: 4,
      bookTitle: "Things Fall Apart",
      Author: "JORDAN Ayew",
      ISBN: "ABS92W",
      isAvailable: true,
      edit: false,
    },
    {
      id: 5,
      bookTitle: "God is merciful",
      Author: "LArry Jandie",
      ISBN: "ABS92W",
      isAvailable: true,
      edit: false,
    },
    {
      id: 6,
      bookTitle: "Things on my mind",
      Author: "Eniola Motola",
      ISBN: "ABS92W",
      isAvailable: true,
      edit: false,
    },
    {
      id: 7,
      bookTitle: "Too Fast",
      Author: "Ogendengbe Jaru",
      ISBN: "ABS92W",
      isAvailable: true,
      edit: false,
    },
    {
      id: 8,
      bookTitle: "My Life is Good",
      Author: "Oladele Ayomide",
      ISBN: "ABS92W",
      isAvailable: true,
      edit: false,
    },
  ]);
  // borrow book
  const borrowBook = (title) => {
    let book = books.find((book) => book.bookTitle === title);
    console.log(book);
  };

  const booksBody = books
    .filter((book) =>
      searchInput.toLowerCase() === ""
        ? book
        : book.bookTitle.toLowerCase().includes(searchInput)
    )
    .map((book) => (
      <tr key={book.id} className="border border-collapse py-5 text-center">
        <td className="border border-spacing-1 border-collapse py-5">
          {book.id}
        </td>
        <td className="border border-spacing-1 border-collapse py-5">
          {book.bookTitle}
        </td>
        <td className="border border-spacing-1 border-collapse py-5">
          {" "}
          {book.Author}
        </td>
        <td className="border border-spacing-1 border-collapse py-5">
          {" "}
          {book.ISBN}
        </td>
        <td className="border border-spacing-1 border-collapse py-5">
          {book.isAvailable ? "available" : "not available"}
        </td>
        <td className="border border-collapse py-5 flex justify-center items-center">
          <FaBookOpen
            onClick={() => borrowBook(book.bookTitle)}
            className="text-green-500 hover:text-green-400"
          />
        </td>
      </tr>
    ));

  return (
    <>
      <div className="relative  px-2 w-full">
        <h1 className="text-2xl px-1"> Welcome back</h1>
        {/* {showcart && (
          <div className="absolute flex flex-col justify-start bg-gray-200  right-3 rounded-md top-20 h-auto w-auto px-2 py-2 ">
            {cart.map((book) => (
              <div
                className="flex flex-col justify-start items-center px-2 border border-gray-50 rounded-md m-0.5 py-1 "
                key={book.id}
              >
                <p className="text-green-500 font-bold text-xl">
                  {" "}
                  {book.bookTitle}
                </p>
                <p className="text-gray-400 "> By {book.Author}</p>
                <div className="flex">
                  {" "}
                  <button className="border border-gray-50 bg-green-500 text-white text-sm px-1 rounded-sm">
                    request
                  </button>{" "}
                  <button
                    onClick={() => discardBook(book.id)}
                    className="border border-gray-50 bg-green-500 text-sm text-white px-1 rounded-sm "
                  >
                    {" "}
                    discard
                  </button>
                </div>
              </div>
            ))}
          </div>
        )} */}
        <h1 className="text-left text-sm px-1 text-green-500">
          {" "}
          Available Books
        </h1>
        <div className="flex justify-between py-2 max-sm:w-full ">
          <form className="flex flex-start">
            <input
              type="text"
              placeholder="search books"
              className="px-1 py-1 border border-green-500 outline-none  w-96 rounded-md"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </form>
          {/* <div className="flex justify-start items-center">
            {" "}
            <FaCartPlus
              className="text-2xl text-green-500"
              onClick={() => setShowcart(!showcart)}
            />{" "}
            <p className="text-xl text-gray-600 font-bold">
              {cart.length < 1 ? "" : cartItems}
            </p>
          </div> */}
        </div>

        <table className="w-full px-2">
          <thead className="border border-collapse py-5 text-center">
            <tr>
              <th>S/N</th>
              <th>Title</th>
              <th>Author</th>
              <th>ISBN</th>
              <th>Availability</th>
            </tr>
          </thead>
          <tbody>{booksBody}</tbody>
        </table>
      </div>
    </>
  );
};

export default Browsebook;
