import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import Loader from "../../Loader/Loader";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import "./AvailableFood.css";

const AvailableFood = () => {
  const axiosSecure = useAxios();
  const [search, setSearch] = useState("");
  const [layoutMode, setLayoutMode] = useState("grid-cols-3");
  const [filter, setFilter] = useState("desc");
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  //   pagination
  const { count } = useLoaderData();

  const numberOfPages = Math.ceil(count / itemsPerPage);

  const pages = [...Array(numberOfPages).keys()];
  console.log(pages);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["availFood", filter],
    queryFn: async () =>
      await axiosSecure.get(
        `allFood/?date=${filter}&page=${currentPage}&size=${itemsPerPage}`
      ),
  });

  useEffect(() => {
    refetch();
  }, [currentPage, itemsPerPage, refetch]);

  if (isLoading) {
    return (
      <div className="flex justify-center mt-8">
        <Loader></Loader>
      </div>
    );
  }

  const availableFoods = data.data;

  const handleChangeLayout = () => {
    setLayoutMode(layoutMode === "grid-cols-3" ? "grid-cols-2" : "grid-cols-3");
  };

  // Filter by food name
  const searchedFoods = availableFoods.filter((food) =>
    food.foodName.toLowerCase().includes(search.toLowerCase())
  );

  const handleItemsPerPage = (e) => {
    const val = parseInt(e.target.value);
    console.log(val);
    setItemsPerPage(val);
    setCurrentPage(1);
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <Helmet>
        <title>HunRes | Available Foods</title>
      </Helmet>
      {/* Search */}
      <div className="mx-auto mt-1 max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-white px-6 py-8 text-center sm:px-16 sm:shadow-sm">
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
                value={search}
                style={{
                  fontStyle: "italic",
                }}
                onChange={(e) => setSearch(e.target.value)}
              />
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
      <div className="flex gap-8 lg:w-5/12  md:w-7/12 mt-4 mx-auto items-center">
        <button
          onClick={handleChangeLayout}
          className="text-black hidden md:block hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl italic px-10 py-2 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
        >
          Change Layout
        </button>
        <details className="dropdown lg:w-4/12">
          <summary className="text-xl md:ml-0 md:mt-0 md:mb-0 mt-4 mb-4 ml-24 rounded-xl font-bold italic p-2 text-center text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl">
            Filter by Date
          </summary>
          <ul className="p-2  menu dropdown-content z-[1] shadow-xl rounded-box w-52">
            <button
              onClick={() => setFilter("asc")}
              className="btn text-xl mb-2"
            >
              Ascending
            </button>
            <button onClick={() => setFilter("desc")} className="btn text-xl">
              Decending
            </button>
          </ul>
        </details>
      </div>
      <div className="flex justify-center"></div>
      {/*No food found*/}
      <div
        className={`grid grid-cols-1 lg:${layoutMode} md:${layoutMode} gap-10 max-w-screen-xl mx-auto p-5 sm:p-10 md:p-14`}
      >
        {searchedFoods.length === 0 ? (
          <p className="text-gray-700 text-4xl font-bold">No Food Found</p>
        ) : (
          searchedFoods.map((availableFood) => (
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
              key={availableFood._id}
              className="bg-white shadow-2xl rounded-3xl flex flex-col justify-between leading-normal"
            >
              <div className="relative">
                <Link to={`/allFood/${availableFood._id}`}>
                  <button className="absolute top-0 left-0 bg-slate-200 hover:bg-slate-300 font-semibold text-black px-4 py-3 rounded-md text-2xl italic">
                    View Details
                  </button>
                </Link>

                <img
                  src={availableFood.photo}
                  className="w-full rounded-t-2xl h-72 mb-3"
                />
              </div>
              <div className="p-4 pt-2">
                <div className="mb-6">
                  <p className="text-gray-900 font-bold text-2xl italic mb-2 hover:text-indigo-600 inline-block">
                    {availableFood.foodName}
                  </p>

                  <p className="text-gray-700 mt-2 mb-2  text-base italic">
                    {availableFood.notes}
                  </p>
                  <p className="text-green-600 font-bold text-lg  hover:text-indigo-600 inline-block">
                    {availableFood.status}
                  </p>
                </div>

                <div className="flex mb-6 justify-around">
                  <div className="flex items-center gap-1">
                    <IoLocationOutline className="text-slate-600 text-2xl"></IoLocationOutline>
                    <p className="text-lg font-semibold italic">
                      {availableFood.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <MdOutlineProductionQuantityLimits className="text-slate-600 text-2xl"></MdOutlineProductionQuantityLimits>
                    <p className="text-lg font-semibold italic">
                      {availableFood.quantity} Boxs
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <img
                    className="w-10 h-10 rounded-full mr-4"
                    src={availableFood.donatorPhoto}
                    alt=""
                  />

                  <div className="text-sm">
                    <p className="text-lg font-semibold mb-3">
                      {availableFood.donatorName}
                    </p>
                    <p className="text-base font-medium italic">
                      Expire in :- <span>{availableFood.date}</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
      <div className="pagination">
        <button onClick={handlePrev}>Prev</button>
        {pages.map((page) => (
          <button
            onClick={() => setCurrentPage(page + 1)}
            className={
              currentPage === page + 1
                ? "selected btn bton ghost"
                : "btn bton ghost"
            }
            key={page}
          >
            {page + 1}
          </button>
        ))}
        <button onClick={handleNext}>Next</button>
        <select
          defaultValue={itemsPerPage}
          onChange={handleItemsPerPage}
          name=""
          id=""
        >
          <option value="6">6</option>
          <option value="8">8</option>
          <option value="10">10</option>
          <option value="12">12</option>
        </select>
      </div>
    </>
  );
};

export default AvailableFood;
