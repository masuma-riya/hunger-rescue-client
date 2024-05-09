import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { signInUser, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);

  const [loginError, setLoginError] = useState("");

  // Location
  const location = useLocation();

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    setLoginError("");

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("User logged in Successfully!");
        e.target.reset();
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        setLoginError("Please check your Email or Password again!");
      });
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast.success("Google Login Successful!");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGithubSignIn = () => {
    signInWithGithub()
      .then((result) => {
        console.log(result.user);
        toast.success("Github Login Successful!");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="h-full w-full flex justify-center items-center dark:bg-gray-900">
      <div className="grid gap-8">
        <div
          id="back-div"
          className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-[26px] m-4"
        >
          <div className="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2">
            <h1 className="pt-8 mb-4 pb-6 italic font-medium text-gray-700 text-4xl text-center cursor-default">
              Login to your Account! <br></br>{" "}
            </h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2  dark:text-gray-400 text-xl italic font-medium"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  className="border mt-3 p-3 dark:bg-indigo-700 dark:text-gray-300  dark:border-gray-700 shadow-md placeholder:text-base focus:scale-105 ease-in-out outline-none duration-300 border-gray-300 rounded-lg w-full"
                  type="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 dark:text-gray-400 text-xl italic font-medium"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  className="border mt-3 mb-2 p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300  dark:border-gray-700 placeholder:text-base focus:scale-105 outline-none ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                  type="password"
                  placeholder="Password"
                  required
                />
              </div>
              <a className="group text-blue-500 transition-all duration-100 ease-in-out">
                <span className="bg-left-bottom bg-gradient-to-r text-base from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Forget your password?
                </span>
              </a>
              {loginError && (
                <p className="md:text-lg text-base font-bold text-center lg:pt-6 pt-4 lg:pb-2 text-red-600">
                  {loginError}
                </p>
              )}
              <button
                className="bg-gradient-to-r dark:text-gray-300 from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out text-xl font-bold italic"
                type="submit"
              >
                Login
              </button>
            </form>
            <div className="flex flex-col mt-4 items-center justify-center font-semibold italic text-xl">
              <h3 className="dark:text-gray-300">
                Don&apos;t have an account?
                <Link
                  className="group text-blue-600 transition-all duration-100 ease-in-out"
                  to="/sign-up"
                >
                  <span className="hover:underline ml-3 text-xl">
                    Sign Up Here!
                  </span>
                </Link>
              </h3>
            </div>
            {/* Third Party Authentication Options */}
            <div
              id="third-party-auth"
              className="flex items-center justify-around  mt-5 flex-wrap"
            >
              <button
                onClick={handleGoogleSignIn}
                className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
              >
                <img
                  className="max-w-[45px]"
                  src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
                  alt="Google"
                />
              </button>

              <button
                onClick={handleGithubSignIn}
                className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
              >
                <img
                  className="max-w-[45px] filter dark:invert"
                  src="https://ucarecdn.com/be5b0ffd-85e8-4639-83a6-5162dfa15a16/"
                  alt="Github"
                />
              </button>
            </div>
            <div className="text-gray-500 flex text-center flex-col mt-2 items-center text-sm">
              <p className="cursor-default text-lg italic">
                By signing in, you agree to our
                <span className="btn btn-link text-base">
                  Terms & Conditions
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
