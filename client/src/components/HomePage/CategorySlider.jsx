import React from "react";
import c from "/assets/c.png";

const CategorySlider = () => {

  return (
    <div className="categorySlider">
      <div className="flex gap-10 overflow-x-auto py-10 px-5 lg:px-20 hide-scrollbar">
        <div className="text-center w-24 lg:w-40 flex-shrink-0 drop-shadow-xl cursor-pointer transition ease-in-out duration-600 hover:-translate-y-1 hover:scale-110">
          <img src={c} alt="" className="rounded-full" />
          <h1 className="mt-2 text-sm lg:text-md font-Poppins">
            Instagram Viral
          </h1>
        </div>
        <div className="text-center w-24 lg:w-40 flex-shrink-0 drop-shadow-xl cursor-pointer transition ease-in-out duration-600 hover:-translate-y-1 hover:scale-110">
          <img src={c} alt="" className="rounded-full" />
          <h1 className="mt-2 text-sm lg:text-md font-Poppins">
            Dreamy Earrings
          </h1>
        </div>
        <div className="text-center w-24 lg:w-40 flex-shrink-0 drop-shadow-xl cursor-pointer transition ease-in-out duration-600 hover:-translate-y-1 hover:scale-110">
          <img src={c} alt="" className="rounded-full" />
          <h1 className="mt-2 text-sm lg:text-md font-Poppins">Earrings</h1>
        </div>
        <div className="text-center w-24 lg:w-40 flex-shrink-0 drop-shadow-xl cursor-pointer transition ease-in-out duration-600 hover:-translate-y-1 hover:scale-110">
          <img src={c} alt="" className="rounded-full" />
          <h1 className="mt-2 text-sm lg:text-md font-Poppins">Rings</h1>
        </div>
        <div className="text-center w-24 lg:w-40 flex-shrink-0 drop-shadow-xl cursor-pointer transition ease-in-out duration-600 hover:-translate-y-1 hover:scale-110">
          <img src={c} alt="" className="rounded-full" />
          <h1 className="mt-2 text-sm lg:text-md font-Poppins">Necklace</h1>
        </div>
        <div className="text-center w-24 lg:w-40 flex-shrink-0 drop-shadow-xl cursor-pointer transition ease-in-out duration-600 hover:-translate-y-1 hover:scale-110">
          <img src={c} alt="" className="rounded-full" />
          <h1 className="mt-2 text-sm lg:text-md font-Poppins">Bracelets</h1>
        </div>
        <div className="text-center w-24 lg:w-40 flex-shrink-0 drop-shadow-xl cursor-pointer transition ease-in-out duration-600 hover:-translate-y-1 hover:scale-110">
          <img src={c} alt="" className="rounded-full" />
          <h1 className="mt-2 text-sm lg:text-md font-Poppins">
            9 to 5 Earring
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CategorySlider;
