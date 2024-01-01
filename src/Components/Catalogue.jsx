import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { FaTrash } from "react-icons/fa";
const Catalogue = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newIsbn, setNewISbn] = useState("");
  const [books, setBooks] = useState([
    {
      id: 1,
      bookTitle: "Lion and Elepant",
      Author: "Alex Iwobi",
      ISBN: "ABS92W",
      isAvailable: true,
      qty: 20,
      edit: false,
    },
    {
      id: 2,
      bookTitle: "Timesless Experience",
      Author: "Real Joe",
      ISBN: "ABS92W",
      isAvailable: true,
      qty: 20,
      edit: false,
    },
    {
      id: 3,
      bookTitle: "The Last day at the vocanoes",
      Author: "Ridewan Wole Soyinka",
      ISBN: "ABS92W",
      isAvailable: true,
      qty: 20,
      edit: false,
    },
    {
      id: 4,
      bookTitle: "Things Fall Apart",
      Author: "JORDAN Ayew",
      ISBN: "ABS92W",
      isAvailable: true,
      qty: 20,
      edit: false,
    },
  ]);

  const booksBody = books.map((book) => (
    <tr key={book.id} className="border border-collapse py-5 text-center">
      <td className="border border-spacing-1 border-collapse py-5">
        {book.id}
      </td>
      <td className="border border-spacing-1 border-collapse py-5">
        {!book.edit ? (
          book.bookTitle
        ) : (
          <input
            type="text"
            placeholder={book.bookTitle}
            className="w-full border border-none outline-none text-center px-2"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        )}
      </td>
      <td className="border border-spacing-1 border-collapse py-5">
        {" "}
        {!book.edit ? (
          book.Author
        ) : (
          <input
            type="text"
            placeholder={book.Author}
            className="w-full border border-none outline-none text-center px-2"
            value={newAuthor}
            onChange={(e) => setNewAuthor(e.target.value)}
          />
        )}
      </td>
      <td className="border border-spacing-1 border-collapse py-5">
        {" "}
        {!book.edit ? (
          book.ISBN
        ) : (
          <input
            type="text"
            placeholder={book.ISBN}
            className="w-full border border-none outline-none text-center px-2"
            value={newIsbn}
            onChange={(e) => setNewISbn(e.target.value)}
          />
        )}
      </td>
      <td>
        <p>{book.qty}</p>
      </td>
      <td className="border border-spacing-1 border-collapse py-5">
        {book.isAvailable ? (
          "book available"
        ) : (
          <span className="text-sm ">
            {" "}
            <p className="inline"> Book Not available</p>{" "}
            <Link className="text-green-400" to={`/book/${book.bookTitle}`}>
              {" "}
              Track
            </Link>
          </span>
        )}
      </td>

    
      <td>
        {" "}
        <button
          className=" text-red-500 px-1 py-1"
          onClick={() => handleRemove(book.id)}
        >
          {" "}
          <FaTrash />
        </button>
      </td>
    </tr>
  ));
  const addBook = (e) => {
    e.preventDefault();
    let bookData = {
      id: Math.floor(Math.random() * 98),
      bookTitle: title,
      Author: author,
      ISBN: isbn,
      isAvailable: true,
      qty: 20,
    };
    setBooks([...books, bookData]);
  };

  const lendBook = (bookId) => {
    setBooks(
      books.map((book) =>
        book.id == bookId
          ? {
              ...book,
              isAvailable: !book.isAvailable,
            }
          : book
      )
    );
  };

  const handleRemove = (id) => {
    setBooks(books.filter((book) => book.id != id));
  };

  let addBooksForm = (
    <form className="grid grid-cols-2 gap-1 py-2  w-96 px-1">
      <input
        className="border border-black bg-gray-50 rounded-sm px-1 py-1"
        type="text"
        placeholder="book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="border border-black bg-gray-50 rounded-sm px-1 py-1"
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        className="border border-black bg-gray-50 rounded-sm px-1 py-1"
        type="text"
        placeholder="ISBN"
        value={isbn}
        onChange={(e) => setIsbn(e.target.value)}
      />
      <input
        className="border border-black bg-green-500 text-white text-sm px-1 py-1"
        type="submit"
        placeholder="Add book"
        onClick={addBook}
      />
    </form>
  );

  return (
    <>
      <Navbar />
      <div className="relative px-2 bg-gray-50">
        {true && addBooksForm}
        <h1 className="text-left text-2xl px-1"> Books catalogue</h1>

        {books.length == 0 ? (
          <p>Library is empty</p>
        ) : (
          <table className="w-full px-2">
            <thead className="border border-collapse py-5 text-center">
              <tr>
                <th>S/N</th>
                <th>Title</th>
                <th>Author</th>
                <th>ISBN</th>
                <th>Quantity</th>
                <th>Availability</th>
              </tr>
            </thead>

            <tbody>{booksBody}</tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default Catalogue;
