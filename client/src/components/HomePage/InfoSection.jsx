import FlightIcon from "@mui/icons-material/Flight";
import SupportIcon from "@mui/icons-material/Support";
import ReplyIcon from "@mui/icons-material/Reply";
import PaymentIcon from "@mui/icons-material/Payment";

const InfoSection = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-5 justify-center items-center md:justify-evenly border-y-2 px-5 lg:px-20 py-10">
        <div className="flex gap-3 w-72 h-16">
          <FlightIcon sx={{ color: "#f2707f", fontSize: "30px" }} />
          <div className="">
            <h1 className="text-l  font-Poppins">Free Shipping</h1>
            <p className="text-sm font-Quicksand">
              Free shipping on all orders over ₹999
            </p>
          </div>
        </div>
        <div className="flex gap-3  w-72 h-16">
          <SupportIcon sx={{ color: "#f2707f", fontSize: "30px" }} />
          <div className="">
            <h1 className="text-l font-Poppins">Support 24/7</h1>
            <p className="text-sm font-Quicksand">
              Contact us 24 hours a day, 7 days a week
            </p>
          </div>
        </div>
        <div className="flex gap-3 w-72 h-16">
          <PaymentIcon sx={{ color: "#f2707f", fontSize: "30px" }} />
          <div className="">
            <h1 className="text-l font-Poppins">Secure Payment</h1>
            <p className="text-sm font-Quicksand">
              We ensure secure payment with UPI
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoSection;
