import React, { useState } from "react";
import { useParams } from "react-router-dom";
const Track = () => {
  const { title } = useParams();
  const [books, setBooks] = useState([
    {
      id: 1,
      bookTitle: "Lion and Elepant",
      Author: "Alex Iwobi",
      ISBN: "ABS92W",
      isAvailable: true,
    },
    {
      id: 2,
      bookTitle: "Timesless Experience",
      Author: "Real Joe",
      ISBN: "ABS92W",
      isAvailable: true,
    },
    {
      id: 3,
      bookTitle: "The Last day at the vocanoes",
      Author: "Ridewan Wole Soyinka",
      ISBN: "ABS92W",
      isAvailable: true,
    },
    {
      id: 4,
      bookTitle: "Things Fall Apart",
      Author: "JORDAN Ayew",
      ISBN: "ABS92W",
      isAvailable: true,
    },
  ]);

  const getBook = () => {
    let book = books.find((book) => book.bookTitle == title);
    console.log(book);
  };
  getBook();

  return (
    <>
      <h1> {title}</h1>
    </>
  );
};

export default Track;
