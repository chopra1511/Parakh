import rings from "/assets/rings.png";
import pearl from "/assets/pearl.png";
import earrings from "/assets/earrings.png";
import diamond from "/assets/diamond.png";
import { useNavigate } from "react-router";

const ProductSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="text-center text-2xl md:text-3xl font-Poppins font-medium py-5 mt-10">
        Categories
      </h1>
      <div className="flex flex-wrap justify-center items-center animate-fadeIn">
        <div className="w-full lg:w-1/3 lg:h-60 m-5 overflow-hidden drop-shadow-xl rounded-3xl bg-gradient-to-t from-[#ffdde1] to-[#ee9ca7] flex justify-between items-center">
          <div className="text-left pl-10">
            <h1 className="text-md md:text-xl text-white font-Quicksand">
              Beautiful
            </h1>
            <h1 className="text-xl md:text-2xl text-white font-Poppins font-semibold">
              Wedding Rings
            </h1>
            <button
              onClick={() => {
                navigate("/rings");
              }}
              className="mt-10 text-white border-b-2 hover:text-black hover:border-black hover:font-semibold"
            >
              Shop Now
            </button>
          </div>
          <img
            src={rings}
            alt=""
            className="w-52 lg:w-72 cursor-pointer transition ease-in-out duration-700 hover:-translate-y-1 hover:scale-110"
          />
        </div>

        <div className="w-full lg:w-1/3 lg:h-60 m-5 overflow-hidden drop-shadow-xl rounded-3xl bg-gradient-to-t from-[#ffdde1] to-[#ee9ca7] flex justify-between items-center">
          <img
            src={earrings}
            alt=""
            className="w-52 lg:w-72 cursor-pointer transition ease-in-out duration-700 hover:-translate-y-1 hover:scale-110"
          />
          <div className="text-right pr-10">
            <h1 className="text-md md:text-xl text-white font-Quicksand">
              Earring
            </h1>
            <h1 className="text-xl md:text-2xl text-white font-Poppins font-semibold">
              Tangerine Floral Earring
            </h1>
            <button
              onClick={() => {
                navigate("/earrings");
              }}
              className="mt-10 text-white border-b-2 hover:text-black hover:border-black hover:font-semibold"
            >
              Shop Now
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/3 lg:h-60 m-5 overflow-hidden drop-shadow-xl rounded-3xl bg-gradient-to-t from-[#ffdde1] to-[#ee9ca7] flex justify-between items-center">
          <div className="text-left pl-10">
            <h1 className="text-md md:text-xl text-white font-Quicksand">
              New Arrivals
            </h1>
            <h1 className="text-xl md:text-2xl text-white font-Poppins font-semibold">
              Pearl Necklaces
            </h1>
            <button
              onClick={() => {
                navigate("/necklaces");
              }}
              className="mt-10 text-white border-b-2 hover:text-black hover:border-black hover:font-semibold"
            >
              Shop Now
            </button>
          </div>
          <img
            src={pearl}
            alt=""
            className="w-52 h-48 lg:w-72 lg:h-60 cursor-pointer transition ease-in-out duration-700 hover:-translate-y-1 hover:scale-110"
          />
        </div>

        <div className="w-full lg:w-1/3 lg:h-60 m-5 overflow-hidden drop-shadow-xl rounded-3xl bg-gradient-to-t from-[#ffdde1] to-[#ee9ca7] flex justify-between items-center">
          <img
            src={diamond}
            alt=""
            className="w-52 lg:w-72 cursor-pointer transition ease-in-out duration-700 hover:-translate-y-1 hover:scale-110"
          />
          <div className="text-right pr-10">
            <h1 className="text-md md:text-xl text-white font-Quicksand">
              New Design
            </h1>
            <h1 className="text-xl md:text-2xl text-white font-Poppins font-semibold">
              Diamond Jewelry
            </h1>
            <button className="mt-10 text-white border-b-2 hover:text-black hover:border-black hover:font-semibold">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSection;
