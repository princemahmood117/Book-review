import { Link } from "react-router-dom";


const Read = () => {
    return (
        <section className="flex items-center  p-16 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
        <div className="container flex flex-col items-cent justify-centerer px-5 mx-auto my-8">
            <div className="text-center">
                <h2 className="mb-8 font-extrabold text-9xl text-gray-600 dark:text-gray-400">
                    <span className="sr-only">Error</span>404
                </h2>
                <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldnt find this page.</p>
                <p className="mt-4 mb-8 text-gray-400 dark:text-gray-600">But dont worry, you can find plenty of other books on our homepage.</p>
                <Link to='/' rel="noopener noreferrer" className="px-8 py-3 font-semibold rounded bg-default-400 dark:bg-default-600">Back to home</Link>
            </div>
        </div>
    </section>
    );
};

export default Read;