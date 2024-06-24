import { useLoaderData } from "react-router-dom";

const BookDetails = () => {
  const bookDetails = useLoaderData();

  return (
    <section>
      <div className="container p-6 mx-auto space-y-6 sm:space-y-12 mt-18">
        <a
          rel="noopener noreferrer"
          href="#"
          className="block gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
        >
          <img
            src={bookDetails.image}
            alt=""
            className="w-96  h-full rounded sm:h-96 lg:col-span-5"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              {bookDetails.bookName}
            </h3>

            <p>By : {bookDetails.author}</p>

            <hr />

            <span>{bookDetails.tags}</span>

            <hr />

            <p>
              {" "}
              <strong>Review:</strong> {bookDetails.review}
            </p>

            <div className="book-info">
              <div className="flex items-center">
                <span className="label">Number of Pages:</span>
                <span className="value ml-2">
                  <strong>{bookDetails.totalPages}</strong>
                </span>
              </div>

              <div className="flex items-center">
                <span className="label">Publisher: </span>
                <span className="value ml-16">
                  {" "}
                  <strong>{bookDetails.publisher}</strong>{" "}
                </span>
              </div>

              <div className="flex items-center">
                <span className="label">Year of Published:</span>
                <span className="value ml-4">
                  <strong>{bookDetails.yearOfPublishing}</strong>
                </span>
              </div>

              <div className="flex items-center">
                <span className="label">Rating:</span>
                <span className="value ml-20">
                  <strong>{bookDetails.rating}</strong>
                </span>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <a
                href="#_"
                className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative">Read</span>
              </a>
              <a
                href="#_"
                className=" rounded px-5 py-2.5 overflow-hidden group bg-[#50B1C9] relative hover:bg-gradient-to-r hover:bg-[#50B1C9] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#50B1C9] transition-all ease-out duration-300"
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative">Wishlist</span>
              </a>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default BookDetails;
