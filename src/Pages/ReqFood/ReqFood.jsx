import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import Loader from "../../Loader/Loader";
import { Helmet } from "react-helmet-async";

const ReqFood = () => {
  const axiosSecure = useAxios();
  const { user } = useContext(AuthContext);

  const { data, isLoading } = useQuery({
    queryKey: ["reqFood"],
    queryFn: async () =>
      await axiosSecure.get(`/reqFood/${user?.email}`, {
        withCredentials: true,
      }),
  });

  if (isLoading) {
    return (
      <div className="flex justify-center mt-8">
        <Loader></Loader>
      </div>
    );
  }

  const reqFood = data.data;

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <Helmet>
        <title>HunRes | Req Food</title>
      </Helmet>
      <div className="border-b mb-5 flex justify-between text-sm">
        <div className="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
          <svg
            className="h-6 mr-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 0 0-1 1v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3a1 1 0 0 0-1-1H6zM8 5h4a1 1 0 1 0 0-2H8a1 1 0 1 0 0 2zm0 4h4a1 1 0 1 0 0-2H8a1 1 0 1 0 0 2zm0 4h4a1 1 0 1 0 0-2H8a1 1 0 1 0 0 2zm5-8a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"
              clipRule="evenodd"
            />
          </svg>

          <a className="font-semibold inline-block text-lg">
            My Requested Foods - {""}{" "}
            <span className="text-2xl">{reqFood.length}</span>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {reqFood.map((food) => (
          <div
            key={food._id}
            className="rounded overflow-hidden shadow-lg flex flex-col"
          >
            <a />
            <div className="relative">
              <a>
                <img className="w-full" src={food.photo} />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0"></div>
              </a>
              <a>
                <div className="text-lg italic rounded-md font-semibold absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                  {food.foodName}
                </div>
              </a>
            </div>
            <div className="px-6 py-4 mb-auto">
              <a className="font-medium text-base hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
                Food ID : {food.foodID}
              </a>
              <a className="font-medium text-base hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
                Donator Name : {food.donatorName}
              </a>
              <a className="font-medium text-base hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
                Donator Email : {food.donatorEmail}
              </a>
              <a className="font-medium text-base hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
                User Email : {food.userEmail}
              </a>
              <p className="text-gray-900 text-lg font-bold">
                Notes : {food.notes}
              </p>
              <p className="text-gray-900 text-lg font-medium">
                Pickup Location : {food.location}
              </p>
            </div>
            <div className="ml-24 space-y-2 bg-gray-100">
              <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                <svg
                  height="13px"
                  width="13px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  style={{ enableBackground: "new 0 0 512 512" }}
                  xmlSpace="preserve"
                >
                  <g>
                    <g>
                      <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path>
                    </g>
                  </g>
                </svg>
                <span className="ml-1 text-base">
                  Request date : {food.requestDate}
                </span>
              </span>
              <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                <svg
                  height="13px"
                  width="13px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  style={{ enableBackground: "new 0 0 512 512" }}
                  xmlSpace="preserve"
                >
                  <g>
                    <g>
                      <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path>
                    </g>
                  </g>
                </svg>
                <span className="ml-1  text-base">Expire in : {food.date}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReqFood;
