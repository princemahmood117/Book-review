const Book = ({book}) => {
  return (
    <div className="border-2 rounded flex  hover:transition hover:scale-95 cursor-pointer">
      <article>
        <a className="relative left-[50%]"
          rel="noopener noreferrer"
          href="#"
          aria-label="Te nulla oportere reprimique his dolorum"
        >
          <img
            alt=""
            className="w-48 h-56 bg-gray-500 dark:bg-gray-500"
            src={book.image}
          />
        </a>
        <div className="flex flex-col flex-1 p-6">
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Te nulla oportere reprimique his dolorum"
          >
            
          </a>

          <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
            {book.bookName}
          </h3>

          <p>By: {book.author}</p>

          <div className="flex justify-around pt-3 space-x-2 text-sm  text-gray-400 dark:text-gray-600">
            <span>{book.tags}</span>
            <span className="ml-12">{book.rating} </span>
          </div>
        </div>
      </article>
      
    </div>
  );
};

export default Book;
