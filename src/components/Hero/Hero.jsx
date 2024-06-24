import { Link } from "react-router-dom";


const Hero = () => {
    return (
        <div className="hero bg-base-200 mx-auto w-[95%]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="pngwing.png" className="max-w-sm rounded-lg " />
          <div>
            <h1 className="text-5xl font-bold">Books to freshen <br /> <span className="mt-6">up your bookshelf</span> </h1>
            <Link to='/listedBooks' className="btn bg-green-600 text-white hover:bg-green-700 mt-8">View the list</Link>
          </div>
        </div>
      </div>



    );
};

export default Hero;