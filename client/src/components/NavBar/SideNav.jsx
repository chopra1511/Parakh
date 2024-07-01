import { useNavigate } from "react-router";
import { Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { getUser, userLogout } from "../../store/reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const SideNav = ({ setSideNav }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser())
  },[dispatch])

  const handleLogout = () => {
    dispatch(userLogout())
      .unwrap()
      .then(() => navigate("/"))
      .catch((error) => console.log(error));
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className="fixed inset-0 z-50 flex lg:hidden">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={() => setSideNav(false)}
      ></div>

      <div className="sideBar fixed left-0 top-0 bottom-0 bg-white w-[80%] p-5">
        <div className="flex justify-between mb-10">
          <div>
            <h1 className="text-3xl font-musky cursor-pointer">Parakh</h1>
          </div>
          <i
            className="fi fi-rr-cross-small text-2xl cursor-pointer"
            onClick={() => setSideNav(false)}
          ></i>
        </div>
        <ul className="flex flex-col gap-5">
          <li
            className="flex gap-5 items-center cursor-pointer"
            onClick={() => navigate("/home")}
          >
            <i className="fi fi-rr-home text-black text-xl hover:text-[#ee9ca7]"></i>
            <h1 className="font-Poppins">Home</h1>
          </li>

          <li
            className="flex gap-5 items-center cursor-pointer"
            onClick={() => navigate("/all-products")}
          >
            <i className="fi fi-rr-store-alt text-black text-xl hover:text-[#ee9ca7]"></i>
            <h1 className="font-Poppins">Store</h1>
          </li>

          <li className="flex gap-5 items-center cursor-pointer">
            <i className="fi fi-rr-apps text-black text-xl hover:text-[#ee9ca7]"></i>
            <h1 className="font-Poppins">Collections</h1>
          </li>

          <li className="flex gap-5 items-center cursor-pointer">
            <i className="fi fi-rr-circle-heart text-black text-xl hover:text-[#ee9ca7]"></i>
            <h1 className="font-Poppins">Most Loved</h1>
          </li>

          <li className="flex gap-5 items-center cursor-pointer">
            <i className="fi fi-rs-flame text-black text-xl hover:text-[#ee9ca7]"></i>
            <h1 className="font-Poppins">Hot Deals</h1>
          </li>

          <li className="flex gap-5 items-center cursor-pointer">
            <i className="fi fi-rr-info text-black text-xl hover:text-[#ee9ca7]"></i>
            <h1 className="font-Poppins">About Us</h1>
          </li>

          <li
            className="flex gap-5 items-center cursor-pointer"
            onClick={() => navigate("/contact-us")}
          >
            <i className="fi fi-rr-phone-rotary text-black text-xl hover:text-[#ee9ca7]"></i>
            <h1 className="font-Poppins">Contact Us</h1>
          </li>

          <li
            className="flex gap-5 items-center cursor-pointer"
            onClick={() => navigate("/account")}
          >
            <i className="fi fi-rr-user text-black text-xl hover:text-[#ee9ca7]"></i>
            <h1 className="font-Poppins font-semibold">{user?.name}</h1>
          </li>

          <div className="flex justify-start mt-10">
            <Button
              variant="contained"
              size="large"
              type="submit"
              onClick={handleLogout}
              className="button-shiny-effect"
              sx={{
                borderRadius: "10px",
                fontFamily: "Poppins",
                textTransform: "capitalize",
                backgroundColor: "#f2707f",
                fontSize: isMobile ? "12px" : "16px", // Adjust the font size for mobile
                padding: isMobile ? "8px 16px" : "12px 24px", // Adjust the padding for mobile
                ":hover": {
                  backgroundColor: "#F7475C",
                },
              }}
            >
              LOGOUT
            </Button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
