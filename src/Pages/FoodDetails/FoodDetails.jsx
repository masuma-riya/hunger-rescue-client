import { Modal } from "flowbite-react";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import Loader from "../../Loader/Loader";
import { Helmet } from "react-helmet-async";

const FoodDetails = () => {
  const [openModal, setOpenModal] = useState(false);
  const { user } = useContext(AuthContext);
  console.log("User:", user);

  const axiosSecure = useAxios();
  const { id } = useParams();
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["foodDetails", id],
    queryFn: async () => await axiosSecure.get(`/allFood/${id}`),
  });

  const { mutateAsync: addRequest } = useMutation({
    mutationFn: async (data) => await axiosSecure.put(`/reqFood/${id}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries(["foodDetails"]);
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center mt-8">
        <Loader></Loader>
      </div>
    );
  }

  const reqDate = new Date().toISOString().slice(0, 10);

  const {
    _id,
    foodName,
    photo,
    date,
    location,
    quantity,
    donatorName,
    notes,
    status,
    email,
  } = data.data;

  console.log(data.data);

  const onCloseModal = () => {
    setOpenModal(false);
  };

  const handleReqFood = async (event) => {
    event.preventDefault();

    if (user?.email === email) return toast.error("Action not permitted");

    const form = event.target;
    const donatorEmail = form.donatorEmail.value;
    const userEmail = user?.email;
    const donatorName = form.donatorName.value;
    const foodID = form.foodID.value;
    const foodName = form.foodName.value;
    const photo = form.photo.value;
    const requestDate = form.requestDate.value;
    const location = form.location.value;
    const date = form.date.value;
    const notes = form.notes.value;

    const newReq = {
      foodName,
      userEmail,
      date,
      location,
      photo,
      notes,
      donatorName,
      queryID: _id,
      donatorEmail,
      foodID,
      requestDate,
    };

    console.log(newReq);

    try {
      await addRequest(newReq);
      Swal.fire({
        title: "Success",
        text: "Food Request successfull",
        icon: "success",
        confirmButtonText: "Ok",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Request failed",
      });
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
      <Helmet>
        <title>HunRes | Details</title>
      </Helmet>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] relative rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <button className="absolute top-0 left-0 bg-slate-200 text-purple-900 font-bold px-6 py-4 rounded-b-lg text-2xl italic">
                {foodName}
              </button>
              <img
                className="w-full h-full object-cover"
                src={photo}
                alt="Product Image"
              />
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Donator: {donatorName}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Pickup Location:- {location}
            </p>
            <div className="flex items-center mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Quantity :- {""}
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {quantity}
                </span>
              </div>

              <button className="px-4 bg-green-600 italic text-white font-semibold rounded-full py-1">
                {status}
              </button>
            </div>

            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Product Description : {""} {notes}
              </span>
            </div>
            <p>
              Expire in :- {""} {date}
            </p>
            <div className="w-1/2 px-2 mt-6">
              <button
                onClick={() => setOpenModal(true)}
                className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
              >
                Request
              </button>
              <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                  <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
                      Request for a Food
                    </div>
                    <form onSubmit={handleReqFood} className="py-4 px-6">
                      <div className="mb-4">
                        <label
                          className="block text-gray-700  font-bold mb-2"
                          htmlFor="donatorEmail"
                        >
                          Donator Email
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-black text-lg italic font-normal leading-tight focus:outline-none focus:shadow-outline"
                          id="donatorEmail"
                          name="donatorEmail"
                          type="email"
                          placeholder="Enter Donator Email"
                          defaultValue={email}
                          readOnly
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          className="block text-gray-700  font-bold mb-2"
                          htmlFor="donatorName"
                        >
                          Donator Name
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-black text-lg italic font-normal leading-tight focus:outline-none focus:shadow-outline"
                          id="donatorName"
                          name="donatorName"
                          type="text"
                          placeholder="Enter Donator Name"
                          defaultValue={donatorName}
                          readOnly
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          className="block text-gray-700  font-bold mb-2"
                          htmlFor="email"
                        >
                          User Email
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-black text-lg italic font-normal leading-tight focus:outline-none focus:shadow-outline"
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter User Email"
                          defaultValue={user.email}
                          readOnly
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor="foodID"
                        >
                          Food ID
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-black text-lg italic font-normal leading-tight focus:outline-none focus:shadow-outline"
                          id="foodID"
                          name="foodID"
                          type="text"
                          placeholder="Enter Food ID"
                          defaultValue={_id}
                          readOnly
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          className="block text-gray-700  font-bold mb-2"
                          htmlFor="foodName"
                        >
                          Food Name
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-black text-lg italic font-normal leading-tight focus:outline-none focus:shadow-outline"
                          id="foodName"
                          name="foodName"
                          type="text"
                          placeholder="Enter Food Name"
                          defaultValue={foodName}
                          readOnly
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor="photo"
                        >
                          Food Image
                        </label>
                        <input
                          className="shadow appearance-none  border rounded w-full py-2 px-3 text-black text-lg  font-normal leading-tight focus:outline-none focus:shadow-outline"
                          id="photo"
                          name="photo"
                          type="text"
                          placeholder="Enter Food Image"
                          defaultValue={photo}
                          readOnly
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor="requestDate"
                        >
                          Request Date
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-black text-lg font-normal leading-tight focus:outline-none focus:shadow-outline"
                          id="requestDate"
                          type="date"
                          name="requestDate"
                          placeholder=" Request Date"
                          defaultValue={reqDate}
                          readOnly
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor="date"
                        >
                          Expire Date
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-black text-lg  font-normal leading-tight focus:outline-none focus:shadow-outline"
                          id="date"
                          type="date"
                          name="date"
                          placeholder="Select a date"
                          defaultValue={date}
                          readOnly
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor="location"
                        >
                          Pickup Location
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-black text-lg italic font-normal leading-tight focus:outline-none focus:shadow-outline"
                          id="location"
                          name="location"
                          type="text"
                          placeholder="Location"
                          defaultValue={location}
                          readOnly
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor="notes"
                        >
                          Additional Notes
                        </label>
                        <textarea
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-black text-lg font-normal italic leading-tight focus:outline-none focus:shadow-outline"
                          id="notes"
                          name="notes"
                          rows={4}
                          placeholder="Enter any Additional Notes"
                        />
                      </div>

                      <div className="flex items-center justify-center mb-4">
                        <button
                          className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                          type="submit"
                        >
                          Request
                        </button>
                      </div>
                    </form>
                  </div>
                </Modal.Body>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
