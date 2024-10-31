const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4">
      <img
        src="" 
        alt="Error"
        className="w-full max-w-md h-auto object-cover mb-6"
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
        Oops! Page not found
      </h1>
      <p className="text-lg text-gray-600 mb-6 text-center max-w-lg">
        The page you are looking for doesn't exist or has been moved. Please check the URL or return to the homepage.
      </p>
      <button
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition duration-300"
        onClick={() => window.location.href = '/'}
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default ErrorPage;
