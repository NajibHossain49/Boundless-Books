import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams(); // Get Specific Object details by useParams
  const data = useLoaderData(); // Get Specific Object details by useParams , To access dynamic parameters from the URL path.

  const book = data.find((book) => book.bookId === Number(bookId)); // Ensure bookId and book.bookId Are of the Same Type

  const {bookId: currentBookId, image} = book ;


const handelMarkAsRead = () => {
  
};

  return (
    <div className="my-12">
      <h2>Book Details: {bookId}</h2>
      <img className="w-36 mb-5" src={image} alt="Book Image"/>

      <button onClick={handelMarkAsRead} className="btn btn-outline mr-4 btn-accent" >Mark as Read</button>
      <button className="btn btn-accent" >Add to WishList</button>

    </div>
  );
};

export default BookDetails;
