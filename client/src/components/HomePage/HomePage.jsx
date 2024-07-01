import { useEffect } from "react";
import FooterNav from "../NavBar/FooterNav";
import NavBar from "../NavBar/NavBar";
import CategorySlider from "./CategorySlider";
import CustomerReview from "./CustomerReview";
import DreamCollection from "./DreamCollection";
import Footer from "./Footer";
import HotDeals from "./HotDeals";
import InfoSection from "./InfoSection";
import MostLoved from "./MostLoved";
import ProductSection from "./ProductSection";
import Questions from "./Questions";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="home bg-[#f4f4f4]">
        <div className="fixed top-0 right-0 left-0 z-10">
          <NavBar />
        </div>

        <div className="h-screen bg-[url('/assets/bg2.jpg')] lg:bg-[url('/assets/bg.jpg')] bg-cover px-5">
          <div className="h-full flex flex-col justify-center items-center text-white animate-wiggle">
            <h1 className="text-8xl lg:text-9xl font-musky">Parakh</h1>
            <h1 className="text-xl lg:text-2xl font-Poppins font-light tracking-widest">
              Let's find the best
            </h1>
          </div>
        </div>

        <div>
          <CategorySlider />
        </div>

        <div className="text-center px-5 lg:px-20">
          <p className="py-5 lg:py-10 text-sm lg:text-lg font-Quicksand border-y-2 font-semibold">
            Parakh - Let's find the best #Fashion #Accessories on #Parakh
            @_parakh._
          </p>
        </div>

        <div>
          <ProductSection />
          <MostLoved />
          <HotDeals />
          <DreamCollection />
          <InfoSection />
          <CustomerReview />
          <Questions />
          <Footer />
        </div>

        <div className="fixed bottom-0 right-0 left-0 lg:hidden drop-shadow-[0_30px_30px_rgba(0,0,0,0.25)]">
          <FooterNav />
        </div>
      </div>
    </>
  );
};

export default HomePage;
