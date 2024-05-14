import { Link } from "react-router-dom";

const ExtraSection1 = () => {
  return (
    <section className="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl tracking-tight font-extrabold text-gray-800  lg:text-6xl">
            <span className="block xl:inline">
              Support to raise <br></br>
            </span>
            <span className="block text-indigo-600 xl:inline">
              food insecurity!
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Join us in our mission to make a difference. Together, we can build
            a future where no one goes to bed hungry. Let&apos;s make commitment
            to fighting.
          </p>
          {/* Button Section */}
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <Link to="/add-food">
              <div className="rounded-md shadow">
                <p className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-xl md:px-10">
                  Donate Food
                </p>
              </div>
            </Link>
            <Link to="/available-foods">
              {" "}
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <p className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                  Contributed Foods
                </p>
              </div>
            </Link>
          </div>
          {/* End of Button Section */}
        </div>
        {/*   Image Section     */}
        <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
          <img
            className="h-56 rounded-xl w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://lh3.googleusercontent.com/p/AF1QipM-pBuE40Z3FxGEzOlsL5Y1yT6yZpNkM-ymioCL=s680-w680-h510"
            alt=""
          />
        </div>
        {/*   End of Image Section     */}
      </div>
    </section>
  );
};

export default ExtraSection1;
