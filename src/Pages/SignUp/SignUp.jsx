import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const [registerError, setRegisterError] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const photoURL = form.photo.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    // const termsChecked = form.terms.checked;
    console.log(
      firstName,
      lastName,
      email,
      photoURL,
      password,
      confirmPassword
    );

    setRegisterError("");

    if (password.length < 6) {
      setRegisterError(
        "! Password should be at least 6 characters or longer !"
      );
      return;
    } else if (!/(?=.*[a-z])(?=.*[A-Z]).+/.test(password)) {
      setRegisterError(
        "! Password needs at least One Upper and Lowercase letters !"
      );
      return;
    } else if (password !== confirmPassword) {
      setRegisterError("! Password and Confirm password did not matched !");
      return;
    }

    // else if (!termsChecked) {
    //   setRegisterError("! Please accept our Terms and Conditions !");
    //   return;
    // }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Congratulation! Registration Successful");
        // Update profile
        updateUserProfile(name, photoURL).then(() => {
          // Reset form field after Registration
          e.target.reset();
          // Go to home page after Registration
          navigate("/");
        });
      })
      .catch((error) => {
        console.error(error);
        if (error.code === "auth/email-already-in-use") {
          setRegisterError(
            "The Email is already Used! Please provide a new Email!"
          );
        } else {
          setRegisterError(error.message);
        }
      });
  };

  // const handleGoogleSignUp = () => {
  //   signInWithGoogle()
  //   .then(result => {
  //     console.log(result.user)
  //     toast.success('Google Sign Up Successful!')
  //     navigate('/');
  //   })
  //   .catch(error => {
  //     console.error(error)
  //   })
  // }

  // const handleGithubSignUp = () => {
  //   signInWithGithub()
  //   .then(result => {
  //     console.log(result.user)
  //     toast.success('Github Sign Up Successful!')
  //     navigate('/');
  //   })
  //   .catch(error => {
  //     console.error(error)
  //   })
  // }

  return (
    <>
      <Helmet>
        <title>HunRes | Register</title>
      </Helmet>
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
                <form
                  onSubmit={handleRegister}
                  className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded"
                >
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
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        required
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
                        name="lastName"
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
                      name="email"
                      type="email"
                      placeholder="Enter Your Email"
                      required
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
                      name="photo"
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
                        name="password"
                        placeholder="Password"
                        required
                      />
                    </div>
                    <div className="md:ml-2">
                      <label
                        className="block mb-2 text-lg font-bold text-gray-700 dark:text-white"
                        htmlFor="confirmPassword"
                      >
                        Confirm Password
                      </label>
                      <input
                        className="w-full px-3 py-2 mb-3 text-lg font-normal italic leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="confirmPassword"
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        required
                      />
                    </div>
                  </div>
                  {registerError && (
                    <i>
                      <p className="md:text-lg text-base pt-4 pb-1 font-bold text-center text-red-600">
                        {registerError}
                      </p>
                    </i>
                  )}
                  <div className="mb-6 text-center">
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                      type="submit"
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
