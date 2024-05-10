import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const MyFoods = () => {
  const { user } = useContext(AuthContext);
  const [myFoods, setMyFoods] = useState([]);
  const url = `http://localhost:5000/myFood/${user?.email}`;

  useEffect(() => {
    // axios
    //   .get(url, { withCredentials: true })

    //   .then((res) => {
    //     setBookings(res.data);
    //   });

    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyFoods(data));
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/allFood/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              setMyFoods(myFoods.filter((food) => food._id !== id));
            }
          });
      }
    });
  };

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Name
          </th>

          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Quantity
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Status
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Location
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Action
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {myFoods.map((food) => (
          <tr key={food._id}>
            <td className="px-6 py-4 whitespace-nowrap">{food.foodName}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              {food.quantity} Boxs
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                {food.status}
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">{food.location}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <button className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
                Edit
              </button>
              <button
                onClick={() => handleDelete(food._id)}
                className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MyFoods;
