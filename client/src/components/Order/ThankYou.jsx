import { IconButton } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";


const ThankYou = () => {
    const navigate = useNavigate();
  return (
    <>
      <div className="h-screen flex justify-center items-center bg-[#ffdde1]">
        <div className="absolute top-0 left-0 p-5">
          <IconButton onClick={() => navigate("/home")}>
            <i className="fi fi-rr-arrow-left text-black pt-1 px-2"></i>
          </IconButton>
        </div>
        <div className="card w-full sm:w-fit p-5">
          <div
            className="rounded-2xl relative bg-black w-full sm:w-[650px] group transition-all 
                    duration-700 aspect-video flex items-center justify-center"
          >
            <div
              className="rounded-t-2xl transition-all flex flex-col items-center py-5 justify-start 
                        duration-300 group-hover:duration-1000 bg-white w-[95%] h-[95%] absolute
                        group-hover:-translate-y-20"
            >
              <p className="text-2xl sm:text-4xl font-semibold text-gray-500 font-Poppins">
                Thank You
              </p>
              <p className="px-10 pt-5 text-[14px] sm:text-2xl text-gray-700 font-Cursive">
                It’s so nice that you had placed an order from our store
              </p>
              <p className="font-serif text-[12px] sm:text-xl text-gray-700 font-Cursive">
                Wishing you a fantastic day ahead!
              </p>
              <p className="font-musky text-sm sm:text-xl text-gray-700 pt-5 font-semibold">
                Parakh
              </p>
            </div>
            <button className="font-musky seal bg-rose-500 text-red-800 w-20 aspect-square rounded-full z-40 text-lg flex items-center justify-center font-semibold [clip-path:polygon(50%_0%,_80%_10%,_100%_35%,_100%_70%,_80%_90%,_50%_100%,_20%_90%,_0%_70%,_0%_35%,_20%_10%)] group-hover:opacity-0 transition-all duration-1000 group-hover:scale-0 group-hover:rotate-180 border-4 border-rose-900">
              Parakh
            </button>
            <div className="rounded-2xl tp transition-all duration-1000 group-hover:duration-100 bg-neutral-800 absolute group-hover:[clip-path:polygon(50%_0%,_100%_0,_0_0)] w-full h-full [clip-path:polygon(50%_50%,_100%_0,_0_0)]"></div>
            <div className="rounded-2xl lft transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_0_0,_0_100%)]"></div>
            <div className="rounded-2xl rgt transition-all duration-700 absolute w-full h-full bg-neutral-800 [clip-path:polygon(50%_50%,_100%_0,_100%_100%)]"></div>
            <div className="rounded-2xl btm transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_100%_100%,_0_100%)]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYou;
