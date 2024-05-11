import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

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
    <div
      key={_id}
      className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal"
    >
      <img src={photo} className="w-full mb-3" />
      <div className="p-4 pt-2">
        <div className="mb-8">
          <p className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block">
            {foodName}
          </p>
          <p className="text-gray-700 text-sm">{notes}</p>
          <p className="text-green-600 font-bold text-lg mb-2 hover:text-indigo-600 inline-block">
            {status}
          </p>
        </div>

        <div className="flex justify-around">
          <div className="flex items-center gap-1">
            <IoLocationOutline></IoLocationOutline>
            <p>{location}</p>
          </div>
          <div className="flex items-center gap-1">
            <MdOutlineProductionQuantityLimits></MdOutlineProductionQuantityLimits>
            <p>{quantity} Boxs</p>
          </div>
        </div>

        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src={donatorPhoto}
            alt=""
          />

          <div className="text-sm">
            <p className="text-gray-900 mb-3 font-semibold leading-none hover:text-indigo-600">
              {donatorName}
            </p>
            <p className="text-gray-600">
              Expire in :- <span>{date}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SixFood;
