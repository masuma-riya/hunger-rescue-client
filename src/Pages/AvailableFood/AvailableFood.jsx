import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

const AvailableFood = () => {
  const [search, setSearch] = useState("");
  const [layoutMode, setLayoutMode] = useState("grid-cols-3");

  const [availableFoods, setAvailableFoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("desc");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:5000/allFood/?date=${filter}`
        );
        const data = await response.json();
        console.log(data);
        setAvailableFoods(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [filter]);

  const handleChangeLayout = () => {
    setLayoutMode(layoutMode === "grid-cols-3" ? "grid-cols-2" : "grid-cols-3");
  };

  // Filter by food name
  const searchedFoods = availableFoods.filter((food) =>
    food.foodName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Search */}
      <div className="mx-auto mt-2 max-w-7xl sm:px-6 lg:px-8">
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
      <div className="flex gap-8 w-5/12 mt-4 mx-auto items-center">
        <button
          onClick={handleChangeLayout}
          className="text-black hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-2xl italic px-10 py-2 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
        >
          Change Layout
        </button>
        <details className="dropdown w-4/12">
          <summary className="text-2xl rounded-xl font-bold italic p-2 text-center text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl">
            Filter
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
                  <button className="absolute top-0 left-0 bg-slate-500 font-semibold text-white px-4 py-3 rounded-tl text-xl italic">
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
                  <p className="text-green-600 font-bold text-lg mb-2 hover:text-indigo-600 inline-block">
                    {availableFood.status}
                  </p>
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
