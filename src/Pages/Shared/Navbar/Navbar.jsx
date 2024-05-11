import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../../assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result?.user);
        toast.success("User logged out Successfully");
        navigate("/login");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <nav className="bg-gray-800 md:py-3 py-2 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div>
              <img className="md:w-44 w-36" src={logo} alt="" />
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-3">
                {user ? (
                  <>
                    <NavLink
                      className="hover:border-b-2 hover:border-cyan-600 text-white px-3 py-2 rounded-md text-xl italic font-semibold"
                      to="/"
                    >
                      Home
                    </NavLink>

                    <NavLink
                      className="hover:border-b-2 hover:border-cyan-600 text-white px-3 py-2 rounded-md text-xl italic font-semibold"
                      to="/available-foods"
                    >
                      Available Foods
                    </NavLink>

                    <NavLink
                      className="hover:border-b-2 hover:border-cyan-600 text-white px-3 py-2 rounded-md text-xl italic font-semibold"
                      to="/add-food"
                    >
                      Add Food
                    </NavLink>

                    <NavLink
                      className="hover:border-b-2 hover:border-cyan-600 text-white px-3 py-2 rounded-md text-xl italic font-semibold"
                      to="/my-foods"
                    >
                      My Foods
                    </NavLink>

                    <NavLink
                      className="hover:border-b-2 hover:border-cyan-600 text-white px-3 py-2 rounded-md text-xl italic font-semibold"
                      to="/myReq-foods"
                    >
                      My Food Request
                    </NavLink>
                  </>
                ) : (
                  <>
                    <NavLink
                      className="hover:border-b-2 hover:border-cyan-600 text-white px-3 py-2 rounded-md text-xl italic font-semibold"
                      to="/"
                    >
                      Home
                    </NavLink>

                    <NavLink
                      className="hover:border-b-2 hover:border-cyan-600 text-white px-3 py-2 rounded-md text-xl italic font-semibold"
                      to="/available-foods"
                    >
                      Available Foods
                    </NavLink>

                    <NavLink
                      className="hover:border-b-2 hover:border-cyan-600 text-white px-3 py-2 rounded-md text-xl italic font-semibold"
                      to="/add-food"
                    >
                      Add Food
                    </NavLink>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            {user ? (
              <div className="flex gap-4 items-center">
                <img
                  className="w-16 mt-4 mb-4 h-16 rounded-full border-2 border-blue-600 p-1"
                  src={user?.photoURL || "https://i.ibb.co/FBZQVTZ/defalt.jpg"}
                  alt=""
                />
                <button
                  onClick={handleSignOut}
                  className="px-4 py-3 rounded-xl bg-blue-800 text-xl text-white font-bold italic"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <div className="ml-4 flex items-center md:ml-6">
                <NavLink to="/login">
                  <button className="ml-4 text-gray-300 bg-indigo-600 hover:bg-indigo-700 px-3 py-2 rounded-md text-xl font-semibold italic text-center">
                    Log in
                  </button>
                </NavLink>

                <NavLink to="/sign-up">
                  <button className="ml-4 text-gray-300 bg-indigo-600 hover:bg-indigo-700 px-3 py-2 rounded-md text-xl font-semibold italic text-center">
                    Sign up
                  </button>
                </NavLink>
              </div>
            )}
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {user ? (
            <>
              <NavLink
                className="hover:bg-gray-700 italic text-white block px-3 py-2 rounded-md text-lg font-semibold"
                to="/"
              >
                Home
              </NavLink>

              <NavLink
                className="hover:bg-gray-700 italic text-white block px-3 py-2 rounded-md text-lg font-semibold"
                to="/available-foods"
              >
                Available Foods
              </NavLink>

              <NavLink
                className="hover:bg-gray-700 italic text-white block px-3 py-2 rounded-md text-lg font-semibold"
                to="/add-food"
              >
                Add Food
              </NavLink>

              <NavLink
                className="hover:bg-gray-700 italic text-white block px-3 py-2 rounded-md text-lg font-semibold"
                to="/my-foods"
              >
                My Foods
              </NavLink>

              <NavLink
                className="hover:border-b-2 hover:border-cyan-600 text-white px-3 py-2 rounded-md text-xl italic font-semibold"
                to="/myReq-foods"
              >
                My Food Request
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                className="hover:bg-gray-700 italic text-white block px-3 py-2 rounded-md text-lg font-semibold"
                to="/"
              >
                Home
              </NavLink>

              <NavLink
                className="hover:bg-gray-700 italic text-white block px-3 py-2 rounded-md text-lg font-semibold"
                to="/available-foods"
              >
                Available Foods
              </NavLink>

              <NavLink
                className="hover:bg-gray-700 italic text-white block px-3 py-2 rounded-md text-lg font-semibold"
                to="/add-food"
              >
                Add Food
              </NavLink>
            </>
          )}

          {user ? (
            <div className="flex items-center">
              <img
                className="w-16 mt-4 mb-4 h-16 rounded-full border-2 border-blue-600 p-1"
                src={user?.photoURL || "https://i.ibb.co/FBZQVTZ/defalt.jpg"}
                alt=""
              />
              <button
                onClick={handleSignOut}
                className="btn btn-primary text-lg mx-4 text-white font-bold italic"
              >
                Log Out
              </button>
            </div>
          ) : (
            <>
              <NavLink to="/login">
                <button className="text-gray-300 bg-indigo-600 hover:bg-indigo-700 block px-3 py-2 rounded-md text-xl italic font-semibold mb-4 mt-4">
                  Log in
                </button>
              </NavLink>

              <NavLink to="/sign-up">
                <button className="text-gray-300 bg-indigo-600 hover:bg-indigo-700 block px-3 py-2 rounded-md text-xl italic font-semibold">
                  Sign up
                </button>
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
