const Banner = () => {
  return (
    <div className="hero bg-gradient-to-r from-gray-100 to-gray-300 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse items-center gap-12">
        <img
          src="https://cdn.pixabay.com/photo/2015/11/19/21/14/glasses-1052023_1280.jpg"
          className="w-full lg:max-w-md rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
          alt="Reading Glasses"
        />
        <div className="text-center lg:text-left">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-800 mb-6">
            New Arrivals & Bestsellers!
          </h1>
          <p className="py-4 text-lg text-gray-600 leading-relaxed">
            Welcome to <span className="font-bold">Book Haven</span>, your
            gateway to an unparalleled literary experience. Explore our curated
            collection of bestsellers, timeless classics, and hidden gems.
            Whether you're into mystery, sci-fi, romance, or non-fiction, we’ve
            got something just for you.
          </p>
          <div className="flex justify-start items-center gap-12 h-full">
            <div className="bg-gradient-to-b from-gray-800/40 to-transparent p-[4px] rounded-[16px]">
              <button className="group p-[4px] rounded-[12px] bg-gradient-to-b from-gray-700 to-gray-600 shadow-[0_2px_4px_rgba(0,0,0,0.7)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.6)] active:shadow-[0_0px_1px_rgba(0,0,0,0.8)] active:scale-[0.995] transition-all duration-200">
                <div className="bg-gradient-to-b from-gray-600 to-gray-700 rounded-[8px] px-3 py-2">
                  <div className="flex gap-2 items-center">
                    <span className="font-semibold text-white">
                      Explore Now
                    </span>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
