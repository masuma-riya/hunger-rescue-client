import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className="h-full w-full rounded-3xl bg-white shadow-2xl">
        {/* Container */}
        <div className="mx-auto">
          <div className="flex justify-center px-6 py-12">
            {/* Row */}
            <div className="w-full xl:w-3/4 lg:w-11/12 flex">
              {/* Col */}
              <div
                className="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1575830243383-04c3dc00fa11?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                }}
              />
              {/* Col */}
              <div className="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
                <h3 className="py-4 text-3xl font-bold italic text-center text-gray-800 dark:text-white">
                  Create an Account Now!
                </h3>
                <hr className="mb-2 border-t" />
                <form className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label
                        className="block mb-2 text-lg font-bold text-gray-700 dark:text-white"
                        htmlFor="firstName"
                      >
                        First Name
                      </label>
                      <input
                        className="w-full px-3 py-2 text-lg font-normal italic leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="firstName"
                        type="text"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="md:ml-2">
                      <label
                        className="block mb-2 text-lg font-bold text-gray-700 dark:text-white"
                        htmlFor="lastName"
                      >
                        Last Name
                      </label>
                      <input
                        className="w-full px-3 py-2 text-lg font-normal italic leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="lastName"
                        type="text"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-lg font-bold text-gray-700 dark:text-white"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-lg font-normal italic leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Enter Your Email"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-lg font-bold text-gray-700 dark:text-white"
                      htmlFor="photo"
                    >
                      Photo URL
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-lg font-normal italic leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="photo"
                      type="text"
                      placeholder="Your Photo URL"
                    />
                  </div>
                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label
                        className="block mb-2 text-lg font-bold text-gray-700 dark:text-white"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <input
                        className="w-full px-3 py-2 mb-3 text-lg font-normal italic leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Password"
                      />
                    </div>
                    <div className="md:ml-2">
                      <label
                        className="block mb-2 text-lg font-bold text-gray-700 dark:text-white"
                        htmlFor="c_password"
                      >
                        Confirm Password
                      </label>
                      <input
                        className="w-full px-3 py-2 mb-3 text-lg font-normal italic leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="c_password"
                        type="password"
                        placeholder="Confirm Password"
                      />
                    </div>
                  </div>
                  <div className="mb-6 text-center">
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Register Account
                    </button>
                  </div>
                  <hr className="mb-2 border-t" />

                  <div className="text-center">
                    <p
                      className="inline-block text-xl font-semibold text-blue-700 dark:text-blue-500 align-baseline hover:text-blue-800"
                      href="./index.html"
                    >
                      Already have an account?
                      <Link
                        className="btn btn-link text-xl hover:text-purple-700"
                        to="/login"
                      >
                        Login Here!
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
