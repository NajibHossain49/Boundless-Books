const SingleBook = ({ book }) => {
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <div className="card bg-base-100 w-96 shadow-2xl p-6">
      <figure className="bg-gray-200 py-8 rounded-xl">
        <img
          src={image}
          alt={bookName}
          className="w-24 h-32 object-cover rounded-lg"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>By: {author}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
