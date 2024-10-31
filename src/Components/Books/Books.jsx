import { useEffect, useState } from "react";

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
    </div>
  );
};

export default Books;
