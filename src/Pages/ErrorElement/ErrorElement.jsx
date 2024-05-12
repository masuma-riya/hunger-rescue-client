import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

const ErrorElement = () => {
  return (
    <div className="bg-gray-200 w-full px-16 md:px-0 h-screen flex items-center justify-center">
      <div className="bg-white border animate__animate animate__heartBeat border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
        <p className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-300">
          404
        </p>
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-500 mt-4">
          Page Not Found
        </p>
        <p className="text-gray-500 mt-4 pb-4 border-b-2 text-center">
          Sorry, the page you are looking for could not be found.
        </p>

        <a className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 mt-6 rounded">
          <GoArrowLeft className="text-white text-xl"></GoArrowLeft>
          <Link className="text-lg text-white" to="/">
            Back to Home
          </Link>
        </a>
      </div>
    </div>
  );
};

export default ErrorElement;
