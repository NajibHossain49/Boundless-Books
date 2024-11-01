import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams(); // Get Specific Object details by useParams
  const data = useLoaderData(); // Get Specific Object details by useParams

  const book = data.find((book) => book.bookId === Number(bookId)); // Ensure bookId and book.bookId Are of the Same Type

  const {bookId: currentBookId, image} = book 

  return (
    <div className="my-12">
      <h2>Book Details: {bookId}</h2>
      <img className="w-36 mb-5" src={image} alt="Book Image"/>

      <button className="btn btn-outline mr-4 btn-accent" >Read</button>
      <button className="btn btn-accent" >WishList</button>

    </div>
  );
};

export default BookDetails;
