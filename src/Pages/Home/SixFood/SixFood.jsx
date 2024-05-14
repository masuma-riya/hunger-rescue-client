import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SixFood = ({ food }) => {
  const {
    _id,
    foodName,
    photo,
    notes,
    date,
    location,
    quantity,
    donatorName,
    donatorPhoto,
    status,
  } = food;
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 1, opacity: 1 }}
      transition={{ duration: 1.2 }}
      key={_id}
      className="bg-white rounded-xl shadow-2xl  flex flex-col justify-between leading-normal"
    >
      <div className="relative">
        <button className="absolute top-0 left-0 bg-slate-200 font-semibold text-black px-4 m-1 py-3 rounded-md text-2xl italic">
          {foodName}
        </button>

        <img src={photo} className="w-full rounded-t-2xl h-72 mb-3" />
      </div>
      <div className="p-4 pt-2">
        <Link to={`/allFood/${_id}`}>
          <button className="px-5 py-1 text-black font-semibold text-lg italic rounded-md border-2  hover:bg-slate-400 border-slate-400">
            View Details
          </button>
        </Link>
        <p className="text-slate-800 italic  mx-6 mt-4 rounded-2xl px-4 bg-green-400 font-semibold text-lg inline-block">
          {status}
        </p>
        <div className="mb-6">
          <p className="text-gray-700 mt-4 mb-4  text-base italic">{notes}</p>
        </div>

        <div className="flex justify-around mb-4">
          <div className="flex items-center gap-1">
            <IoLocationOutline className="text-slate-600 text-2xl"></IoLocationOutline>
            <p className="text-lg font-semibold italic">{location}</p>
          </div>
          <div className="flex items-center gap-1">
            <MdOutlineProductionQuantityLimits className="text-slate-600 text-2xl"></MdOutlineProductionQuantityLimits>
            <p className="text-lg font-semibold italic">{quantity} Boxs</p>
          </div>
        </div>

        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src={donatorPhoto}
            alt=""
          />

          <div className="text-sm">
            <p className="text-lg font-semibold mb-3">{donatorName}</p>
            <p className="text-base font-medium italic">
              Expire in :- <span>{date}</span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SixFood;
