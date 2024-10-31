import { useEffect, useState } from "react";
import SingleBook from "../SingleBook/SingleBook";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("./booksData.json")
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <h4 className="text-2xl font-semibold text-center">
        Books {books.length}
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book, index) => (
          <SingleBook key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
