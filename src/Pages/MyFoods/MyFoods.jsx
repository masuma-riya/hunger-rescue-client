import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import Loader from "../../Loader/Loader";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const MyFoods = () => {
  const axiosSecure = useAxios();
  const { user } = useContext(AuthContext);

  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["myFood"],
    queryFn: async () =>
      await axiosSecure.get(`/myFood/${user?.email}`, {
        withCredentials: true,
      }),
  });

  const { mutateAsync: deleteFood } = useMutation({
    mutationFn: async (id) => await axiosSecure.delete(`/allFood/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries(["myFood"]);
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center mt-8">
        <Loader></Loader>
      </div>
    );
  }

  const myFoods = data.data;

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteFood(id);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Request failed",
          });
        }
      }
    });
  };

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <Helmet>
        <title>HunRes | My Foods</title>
      </Helmet>
      <thead>
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Name
          </th>

          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Quantity
          </th>

          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Location
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Status
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Expire Date
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

            <td className="px-6 py-4 whitespace-nowrap">{food.location}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                {food.status}
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">{food.date}</td>

            <td className="px-6 py-4 whitespace-nowrap">
              <Link to={`/updateMyFood/${food._id}`}>
                <button className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
                  Edit
                </button>
              </Link>
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
