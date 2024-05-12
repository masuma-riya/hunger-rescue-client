import Banner from "./Banner/Banner";
import SixFood from "./SixFood/SixFood";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Loader/Loader";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const axiosSecure = useAxios();
  const { data, isLoading } = useQuery({
    queryKey: ["foods"],
    queryFn: async () => await axiosSecure.get("/allFood"),
  });
  if (isLoading) {
    return (
      <div className="flex justify-center mt-8">
        <Loader></Loader>
      </div>
    );
  }

  const foods = data.data;

  const sortedFoodsQuantity = [...foods].sort(
    (a, b) => b.quantity - a.quantity
  );

  const sixFoods = sortedFoodsQuantity.slice(0, 6);

  return (
    <>
      <Helmet>
        <title>HunRes | Home</title>
      </Helmet>
      <div className="p-2 mt-12 mb-24 rounded-3xl shadow-2xl w-full">
        <Banner></Banner>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        {sixFoods.map((food) => (
          <SixFood key={food._id} food={food}></SixFood>
        ))}
      </div>
    </>
  );
};

export default Home;
