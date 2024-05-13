import Banner from "./Banner/Banner";
import SixFood from "./SixFood/SixFood";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Loader/Loader";
import { Helmet } from "react-helmet-async";
import ExtraSection1 from "../ExtraSection1/ExtraSection1";

import Blog2 from "../Blog/Blog2";
import { Link } from "react-router-dom";

import Lottie from "lottie-react";
import Help from "../../assets/Help.json";

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

  const style = {
    height: "300px",
  };

  return (
    <>
      <Helmet>
        <title>HunRes | Home</title>
      </Helmet>

      <ExtraSection1></ExtraSection1>

      <div className="p-2 mt-28 rounded-3xl shadow-2xl w-full">
        <Banner></Banner>
      </div>

      <div className="flex mb-28 justify-center">
        <Lottie style={style} animationData={Help} />
      </div>

      <div className="grid mb-6 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 max-w-screen-xl mx-auto px-5 sm:px-10 md:px-16">
        {sixFoods.map((food) => (
          <SixFood key={food._id} food={food}></SixFood>
        ))}
      </div>

      <Link to="/available-foods">
        {" "}
        <div className="flex justify-center mb-20">
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-bold hover:text-white py-2 px-4 text-2xl mx-auto w-3/12 border border-blue-500 hover:border-transparent rounded-lg italic">
            Show All Food
          </button>
        </div>
      </Link>

      <div className="flex  w-full items-center justify-center ">
        <span className="absolute  mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-3xl lg:text-5xl md:text-4xl  box-content font-extrabold text-transparent text-center select-none">
          In a world Hunger knows no boundaries.
        </span>
        <h1 className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text md:text-4xl lg:text-5xl text-3xl font-extrabold text-transparent text-center select-auto">
          In a world Hunger knows no boundaries.
        </h1>
      </div>

      <Blog2></Blog2>
    </>
  );
};

export default Home;
