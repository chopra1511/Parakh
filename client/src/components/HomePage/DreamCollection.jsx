import React from "react";
import d from "../../assets/d.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";

const DreamCollection = () => {
  return (
    <div className="mx-5 my-5 px-5 py-10 lg:px-40 lg:py-20 lg:m-10 rounded-3xl bg-gradient-to-b from-[#ffdde1] to-[#ee9ca7]">
      <div className="flex flex-col-reverse lg:flex-row justify-between item-center gap-10">
        <div className="lg:w-2/3 lg:p-5 flex flex-col lg:flex-start justify-center items-start">
          <h1 className="text-2xl font-Cursive font-bold text-[#f2707f]">
            Unique Collection
          </h1>
          <h1 className="mt-2 text-3xl font-Poppins font-semibold">
            Dreamy Collection
          </h1>
          <h1 className="mt-1 text-sm font-Quicksand font-bold">
            Only on Parakh
          </h1>
          <p className="mt-5 text-sm md:text-md font-Quicksand font-semibold">
            All of the earrings in this collection are totally awesome!!! Each &
            every piece is made with so much love ❤️ All the pairs are one of a
            kind. So don't miss out!!!!! Grab yours today!
          </p>
          <button className="mt-10 bg-white text-[#f2707f] hover:text-white px-5 lg:px-10 border-2 border-[#f2707f] transition ease-in-out duration-700 hover:bg-[#f2707f] hover:drop-shadow-xl py-3 font-Poppins font-medium rounded-full">
            Shop Now
          </button>
        </div>
        <div className="w-full md:w-[500px] ">
          <Carousel
            useKeyboardArrows={true}
            showThumbs={false}
            showStatus={false}
            showArrows={false}
            autoPlay
            infiniteLoop
            renderIndicator={(onClickHandler, isSelected) => {
              const defStyle = {
                marginLeft: 20,
                color: "white",
                cursor: "pointer",
              };
              const style = isSelected
                ? { ...defStyle, color: "#f2707f" }
                : { ...defStyle };
              return (
                <span
                  style={style}
                  onClick={onClickHandler}
                  onKeyDown={onClickHandler}
                  role="button"
                >
                  <CircleRoundedIcon sx={{ fontSize: 10 }} />
                </span>
              );
            }}
          >
            <img src={d} alt="Earrings Img" className="w-full rounded-3xl" />
            <img src={d} alt="Earrings Img" className="w-full rounded-3xl" />
            <img src={d} alt="Earrings Img" className="w-full rounded-3xl" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default DreamCollection;
