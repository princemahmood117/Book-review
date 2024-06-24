import { useState } from "react";
import { Link, Outlet} from "react-router-dom";

const ListedBooks = () => {

    const [tabIndex,setTabIndex] = useState(0);
  

  return (
    <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
      <div className="flex items-start  overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
        <Link
         to=''
        onClick={()=> setTabIndex(0)}
          rel="noopener noreferrer"
          href="#"
          className={`flex items-center flex-shrink-0 px-5 py-3 border-opacity-30 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
        >
          <span>Read books</span>
        </Link>

        <Link
         to='whitelist'
        onClick={()=> setTabIndex(1)}
          rel="noopener noreferrer"
          href="#"
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
        >
          <span>Whitelist Books</span>
        </Link>
      </div>

      <div className="flex items-center justify-center text-3xl italic mt-6">
      <Outlet></Outlet>
      </div>
    </div>
     
  );
};

export default ListedBooks;
