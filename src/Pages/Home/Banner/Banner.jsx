import { Swiper, SwiperSlide } from "swiper/react";
import "../../../../node_modules/swiper/swiper-bundle.min.css";
import { Navigation } from "swiper/modules";
import { Typewriter } from "react-simple-typewriter";

import slider1 from "../../../assets/images/slider3.avif";
import slider2 from "../../../assets/images/slider2.avif";
import slider3 from "../../../assets/images/slider1.jpeg";
import slider4 from "../../../assets/images/slider4.avif";

const Banner = () => {
  return (
    <Swiper
      navigation={true}
      speed={1300}
      loop={true}
      className="mySwiper"
      modules={[Navigation]}
    >
      <SwiperSlide>
        <div
          className="bg-no-repeat w-full rounded-3xl bg-center bg-cover h-[550px] flex justify-center items-center"
          style={{
            backgroundImage: `url(${slider1})`,
          }}
        >
          <div className="text-center h-full w-full flex justify-center items-center">
            <div className="mt-12 space-y-14">
              <h1 className="text-[39px] font-extrabold text-slate-100">
                Join the Fight{" "}
                <Typewriter
                  words={["Against", "Hunger", "Today"]}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1200}
                ></Typewriter>{" "}
              </h1>

              <button
                type="button"
                className="text-slate-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl"
              >
                Discover More
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="bg-no-repeat w-full bg-center bg-cover h-[550px] flex justify-center items-center"
          style={{
            backgroundImage: `url(${slider2})`,
          }}
        >
          <div className="text-center bg-gray-700 h-full w-full bg-opacity-30 flex justify-center items-center">
            <div className="mt-12 space-y-6">
              <h1 className="text-[39px] font-bold text-white">
                Serving Smiles, Where Every{" "}
                <Typewriter
                  words={["Meal", "Makes", "Difference"]}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1200}
                ></Typewriter>{" "}
              </h1>

              <div>
                <p className="text-xl text-yellow-500 font-bold">
                  From Heart to{" "}
                  <Typewriter
                    words={["Plate", "and", "Nourish"]}
                    loop={true}
                    cursor
                    cursorStyle="_"
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={1200}
                  ></Typewriter>{" "}
                </p>
              </div>

              <button
                type="button"
                className="text-slate-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl"
              >
                Discover More
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="bg-no-repeat w-full bg-center bg-cover h-[550px] flex justify-center items-center"
          style={{
            backgroundImage: `url(${slider4})`,
          }}
        >
          <div className="text-center bg-gray-700 h-full w-full bg-opacity-30 flex justify-center items-center">
            <div className="mt-12 space-y-6">
              <h1 className="text-[39px] font-bold text-white">
                Empowering Change Through{" "}
                <Typewriter
                  words={["Food", "Support", "...!"]}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1200}
                ></Typewriter>{" "}
              </h1>

              <button
                type="button"
                className="text-slate-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl"
              >
                Discover More
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="bg-no-repeat w-full bg-center bg-cover h-[550px] flex justify-center items-center"
          style={{
            backgroundImage: `url(${slider3})`,
          }}
        >
          <div className="text-center bg-gray-700 h-full w-full bg-opacity-30 flex justify-center items-center">
            <div className="mt-12 space-y-6">
              <h1 className="text-[39px] font-bold text-white">
                A Brighter Future{" "}
                <Typewriter
                  words={["Through", "Hunger", "Support"]}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1200}
                ></Typewriter>{" "}
              </h1>

              <button
                type="button"
                className="text-slate-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl"
              >
                Discover More
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
