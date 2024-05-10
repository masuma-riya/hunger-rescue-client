import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

const AvailableFood = () => {
  const availableFoods = useLoaderData();
  const [search, setSearch] = useState("");

  // Filter foods name
  const searchedFoods = availableFoods.filter((food) =>
    food.foodName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Search bar component */}
      <div className="mx-auto mt-4 max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-white px-6 py-8 text-center sm:px-16 sm:shadow-sm">
          <p className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl italic">
            Find Food You&apos;re looking for!
          </p>
          <form>
            <label
              className="mx-auto mt-8 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
              htmlFor="search"
            >
              <input
                id="search"
                placeholder="Search a Food"
                name="search"
                className="px-6  py-2 w-full text-xl rounded-md flex-1 outline-none bg-white"
                required
                value={search}
                style={{
                  fontStyle: "italic",
                }}
                onChange={(e) => setSearch(e.target.value)}
              />
              <p className="w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all">
                <div className="flex items-center transition-all opacity-1">
                  <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                    Search
                  </span>
                </div>
              </p>
            </label>
          </form>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
              fillOpacity="0.7"
            ></circle>
            <defs>
              <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                <stop stopColor="#3b82f6" />
                <stop offset={1} stopColor="#1d4ed8" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Display the search results or "No food found" message */}
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        {searchedFoods.length === 0 ? (
          <p className="text-gray-700 text-lg">No food found</p>
        ) : (
          searchedFoods.map((availableFood) => (
            <div
              key={availableFood._id}
              className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal"
            >
              {/* Add a container for the image and button */}
              <div className="relative">
                {/* Button positioned absolutely on top left corner */}
                <Link to={`/allFood/${availableFood._id}`}>
                  <button className="absolute top-0 left-0 bg-gray-900 text-white px-4 py-3 rounded-tl text-xl italic">
                    View Details
                  </button>
                </Link>
                {/* Image */}
                <img src={availableFood.photo} className="w-full mb-3" />
              </div>
              <div className="p-4 pt-2">
                <div className="mb-8">
                  <p className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block">
                    {availableFood.foodName}
                  </p>
                  <p className="text-gray-700 text-sm">{availableFood.notes}</p>
                </div>

                <div className="flex justify-around">
                  <div className="flex items-center gap-1">
                    <IoLocationOutline></IoLocationOutline>
                    <p>{availableFood.location}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <MdOutlineProductionQuantityLimits></MdOutlineProductionQuantityLimits>
                    <p>{availableFood.quantity} Boxs</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <img
                    className="w-10 h-10 rounded-full mr-4"
                    src={availableFood.donatorPhoto}
                    alt=""
                  />

                  <div className="text-sm">
                    <p className="text-gray-900 mb-3 font-semibold leading-none hover:text-indigo-600">
                      {availableFood.donatorName}
                    </p>
                    <p className="text-gray-600">
                      Expire in :- <span>{availableFood.date}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default AvailableFood;
