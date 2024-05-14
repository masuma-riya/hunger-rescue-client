import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const UpdatedUser = () => {
  // Using context with AuthContext
  const { user, loading, updateUserProfile } = useContext(AuthContext);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    // console.log(name, photoURL);

    // Update profile
    await updateUserProfile(name, photoURL);
  };

  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  return (
    <section className="mt-8 mb-16">
      <div className="md:flex space-y-10 justify-around shadow-2xl bg-stone-50 lg:w-10/12 border-none p-4 lg:m-auto m-3 rounded-2xl items-center">
        <div>
          <div>
            <div className="py-6">
              <div>
                {user && (
                  <img
                    className="w-32 mb-4 h-32 rounded-full border-4 border-blue-600 p-1 mx-auto"
                    src={
                      user?.photoURL || "https://i.ibb.co/Zg4S2sb/default.png"
                    }
                  />
                )}
              </div>
              <div>
                {user && (
                  <>
                    <h3 className="text-center text-[24px] text-gray-900 font-bold">
                      {user?.displayName || "Username not found"}
                    </h3>
                    <h3 className="text-center mt-3 text-base md:text-lg text-gray-900 font-medium">
                      {user?.email || "Email: not found"}
                    </h3>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleUpdateProfile} className="text-center">
          <h1 className="text-2xl font-bold">Update Your profile</h1>
          <input
            className="text-lg border-neutral-300 border font-medium outline-pink-500 md:w-3/4 w-full mt-6 px-4 mb-6 py-2 rounded placeholder-pink-600"
            type="text"
            name="name"
            placeholder="Your Name"
            defaultValue={user.displayName}
          />

          <input
            className="text-lg border-neutral-300 border font-medium outline-pink-500 md:w-3/4 w-full px-4 mb-6 py-2 rounded placeholder-pink-600"
            type="text"
            name="photoURL"
            placeholder="Photo URL"
            defaultValue={user.photoURL}
          />

          <input
            className="text-lg border-neutral-300 border font-medium outline-pink-500 md:w-3/4 lg:text-start md:text-center w-full px-4 mb-3 py-2 rounded placeholder-pink-600"
            type="email"
            name="email"
            placeholder="Your Email Address"
            readOnly
            defaultValue={user.email}
          />

          <br></br>

          <input
            className="btn md:text-lg text-base font-medium mt-5 mb-4 hover:bg-indigo-700 bg-indigo-600 text-white"
            type="submit"
            value="Update Profile"
          />
        </form>
      </div>
    </section>
  );
};

export default UpdatedUser;
