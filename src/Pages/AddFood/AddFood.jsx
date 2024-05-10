import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const AddFood = () => {
  const { user } = useContext(AuthContext);
  console.log("User:", user);

  if (!user) {
    // Handle null user, such as redirecting to login or displaying a message
    return <div>Loading...</div>;
  }

  const { email, displayName, photoURL } = user;

  const handleAddFood = (event) => {
    event.preventDefault();

    const form = event.target;

    const foodName = form.foodName.value;
    const quantity = form.quantity.value;
    const date = form.date.value;
    const location = form.location.value;
    const photo = form.photo.value;
    const status = form.status.value;
    const notes = form.notes.value;

    const newFood = {
      foodName,
      quantity,
      date,
      location,
      photo,
      status,
      notes,
      email,
      donatorName: displayName,
      donatorPhoto: photoURL,
    };

    console.log(newFood);

    fetch("http://localhost:5000/addFood", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newFood),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "A New Food added successfylly",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="bg-white border-2 rounded-lg shadow relative m-10">
      <div className="flex items-start justify-between p-5 border-b rounded-t">
        <h3 className="md:text-2xl text-xl italic font-bold">
          Donor Information :-
        </h3>

        <button
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
          data-modal-toggle="product-modal"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="p-6 space-y-6">
        <form onSubmit={handleAddFood}>
          <div className="flex justify-center mb-6">
            <img
              className="rounded-full p-1 border-2 border-blue-600"
              src={user?.photoURL}
              alt=""
            />
          </div>
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="name"
                className="text-lg italic font-semibold text-gray-900 block mb-2"
              >
                Donator Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Your Name"
                defaultValue={user?.displayName}
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="email"
                className="text-lg italic font-semibold text-gray-900 block mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-black sm:text-lg  rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Your Email"
                defaultValue={user?.email}
                required
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <p className="relative md:mt-8 mt-4 w-full inline-flex items-center justify-center p-0.5 mb-6 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative md:text-2xl text-lg w-full italic font-bold px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Food Information :-
                </span>
              </p>

              <label
                htmlFor="foodName"
                className="text-lg italic font-semibold text-gray-900 block mb-2"
              >
                Food Name
              </label>
              <input
                type="text"
                name="foodName"
                id="foodName"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-base font-semibold rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
              />
            </div>
            <div className="col-span-6 sm:col-span-3 md:mt-[110px]">
              <label
                htmlFor="quantity"
                className="text-lg italic font-semibold text-gray-900 block mb-2"
              >
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="date"
                className="text-lg italic font-semibold text-gray-900 block mb-2"
              >
                Expire Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-base font-semibold rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
              />
            </div>
            <div className="col-span-6 sm:col-span-3 ">
              <label
                htmlFor="location"
                className="text-lg italic font-semibold text-gray-900 block mb-2"
              >
                Location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="photo"
                className="text-lg italic font-semibold text-gray-900 block mb-2"
              >
                Food Photo URL
              </label>
              <input
                type="text"
                name="photo"
                id="photo"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-base font-semibold rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
              />
            </div>
            <div className="col-span-6 sm:col-span-3 ">
              <label
                htmlFor="status"
                className="text-lg italic font-semibold text-gray-900 block mb-2"
              >
                Status
              </label>
              <input
                type="text"
                name="status"
                id="status"
                className="shadow-sm valu bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                defaultValue="Available"
                style={{
                  color: "green",
                  fontWeight: "500",
                  fontSize: "1.3rem",
                  fontStyle: "italic",
                }}
                readOnly
              />
            </div>
            <div className="col-span-full">
              <label
                htmlFor="notes"
                className="text-lg italic font-semibold text-gray-900 block mb-2"
              >
                Additional Notes
              </label>
              <input
                id="notes"
                name="notes"
                rows={6}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                placeholder="Your Notes"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <input
              className="hover:shadow-form w-10/12 mt-6 rounded-md bg-[#FF3811] py-3 px-8 text-center text-xl font-semibold text-white outline-none"
              type="submit"
              value="Add Food"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
