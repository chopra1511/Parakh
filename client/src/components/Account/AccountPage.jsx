import NavBar from "../NavBar/NavBar";
import FooterNav from "../NavBar/FooterNav";
import Footer from "../HomePage/Footer";
import account from "/assets/account.png";
import Button from "@mui/material/Button";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import AddressFormModal from "./AddressFormModal";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getUser, userLogout } from "../../store/reducers/userSlice";
import { getUserAddresses, removeUserAddress } from "../../store/reducers/addressSlice";

const AccountPage = () => {
  const [showAllAddresses, setShowAllAddresses] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(0);

  const { addresses } = useSelector((state) => state.address);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(getUserAddresses());
    dispatch(getUser());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(userLogout())
      .then(() => navigate("/"))
      .catch((error) => console.log(error));
    };
    
    const deleteAddressHandler = (id) => {
        dispatch(removeUserAddress(id))
          .then(() => {
            dispatch(getUserAddresses());
          })
          .catch((error) => console.log(error));
    }

  const handleSelectAddress = (index) => {
    setSelectedAddressIndex(index);
  };

  const toggleShowAllAddresses = () => {
    setShowAllAddresses(!showAllAddresses); // Toggle show all addresses
  };

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div className="home bg-[#f4f4f4]">
        <div className="fixed top-0 right-0 left-0 z-10">
          <NavBar />
        </div>

        <div>
          <div className="flex items-center relative px-5 mt-16 py-10 lg:px-20 lg:pt-20 overflow-hidden z-0">
            <div className="w-full flex justify-center items-center text-center">
              <div className="z-10 relative py-10 lg:pt-20 px-10 lg:px-20">
                <h1 className="text-2xl md:text-3xl font-Cursive font-bold text-[#f2707f]">
                  My
                </h1>
                <h1 className="text-4xl md:text-5xl font-Poppins font-semibold">
                  Account
                </h1>
              </div>
              <div className="absolute -top-20 -right-20 lg:-top-44 lg:-right-44 z-0">
                <div className="p-10 lg:p-20 rounded-full bg-white/40">
                  <div className="p-10 lg:p-20 rounded-full bg-white">
                    <img
                      src={account}
                      alt="Emote"
                      className="w-24 lg:w-56 opacity-50"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="px-5">
              <div className="md:mx-20 p-5 md:p-10 bg-white rounded-2xl drop-shadow-xl">
                <div className="flex justify-start text-left">
                  <div className="pb-3 border-b-2 w-full">
                    <h1 className="text-xl md:text-3xl font-Poppins font-semibold">
                      Account Details
                    </h1>
                  </div>
                </div>

                <div>
                  <div className="py-3">
                    <div className="flex justify-between">
                      <h1 className="text-sm md:text-md font-Poppins">Name</h1>
                      <h1 className="text-sm md:text-md font-Poppins font-semibold">
                        {user?.name}
                      </h1>
                    </div>
                    <div className="flex justify-between mt-2">
                      <h1 className="text-sm md:text-md font-Poppins">Email</h1>
                      <h1 className="text-sm md:text-md font-Poppins font-semibold">
                        {user?.email}
                      </h1>
                    </div>
                    <div className="flex justify-between mt-2">
                      <h1 className="text-sm md:text-md font-Poppins">
                        Contact
                      </h1>
                      <h1 className="text-sm md:text-md font-Poppins font-semibold">
                        {user?.contact}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-5 my-10">
              <div className="md:mx-20 p-5 md:p-10 bg-white rounded-2xl drop-shadow-xl">
                <div className="flex justify-start text-left">
                  <div className="pb-3 border-b-2 w-full">
                    <h1 className="text-xl md:text-3xl font-Poppins font-semibold">
                      Address Details
                    </h1>
                  </div>
                </div>

                <div>
                  <div>
                    <div className="flex justify-start text-left">
                      <div className="pb-3 w-full flex items-center justify-between">
                        <h1 className="md:text-xl font-Poppins font-semibold">
                          View Your Address
                        </h1>
                        {addresses.length > 1 && (
                          <IconButton onClick={toggleShowAllAddresses}>
                            <i
                              className={`fi fi-rr-caret-${
                                showAllAddresses ? "up" : "down"
                              } text-base md:text-2xl px-2 pt-1 text-[#f2707f]`}
                            ></i>
                          </IconButton>
                        )}
                      </div>
                    </div>

                    <div className="pb-5 border-b-[1px] md:border-b-2 border-dashed">
                      <div>
                        {addresses.map((address, index) => (
                          <div
                            key={address._id}
                            className={`flex justify-between items-center ${
                              index !== selectedAddressIndex &&
                              !showAllAddresses
                                ? "hidden"
                                : ""
                            }`}
                          >
                            <div className="flex items-center gap-3 overflow-hidden">
                              <input
                                type="radio"
                                name="address"
                                className="custom-radio flex-shrink-0"
                                checked={index === selectedAddressIndex}
                                onChange={() => handleSelectAddress(index)}
                                onClick={toggleShowAllAddresses}
                              />
                              <h1 className="text-[12px] md:text-base font-Poppins overflow-hidden text-ellipsis whitespace-nowrap">
                                {address.name}, {address.address},{" "}
                                {address.pincode}, {address.city},{" "}
                                {address.state}
                              </h1>
                            </div>
                            <div className="flex">
                              <IconButton>
                                <i className="fi fi-rr-edit text-base px-2 pt-1 hover:text-[#f2707f]"></i>
                              </IconButton>
                              <IconButton
                                onClick={() => {
                                  deleteAddressHandler(address._id);
                                }}
                              >
                                <i className="fi fi-rs-trash text-base px-2 pt-1 hover:text-[#f2707f]"></i>
                              </IconButton>
                            </div>
                          </div>
                        ))}
                        <div className="flex items-center cursor-pointer w-fit">
                          <IconButton onClick={handleOpenModal}>
                            <i className="fi fi-rr-square-plus text-base px-2 pt-1 text-[#f2707f]"></i>
                          </IconButton>
                          <h1 className="text-sm md:text-base text-[#f2707f] font-Poppins font-medium underline underline-offset-4 decoration-dashed">
                            Add new address
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-5 my-10">
              <div className="md:mx-20 p-5 md:p-10 bg-white rounded-2xl drop-shadow-xl">
                <div className="flex justify-start text-left">
                  <div className="pb-3 border-b-2 w-full">
                    <h1 className="text-xl md:text-3xl font-Poppins font-semibold">
                      Order Details
                    </h1>
                  </div>
                </div>

                <div>
                  <div className="py-3">
                    <h1 className="text-sm md:text-base font-Poppins font-medium text-[#f2707f]">
                      <span className="underline">Make your first order.</span>{" "}
                      You haven't placed any orders yet.
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mb-40">
              <Button
                variant="contained"
                size="large"
                type="submit"
                onClick={handleLogout}
                className="button-shiny-effect"
                sx={{
                  borderRadius: isMobile ? "5px" : "10px",
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

            <AddressFormModal
              isVisible={isModalVisible}
              onClose={handleCloseModal}
            />
          </div>
        </div>

        <Footer />
        <div className="fixed bottom-0 right-0 left-0 lg:hidden">
          <FooterNav />
        </div>
      </div>
    </>
  );
};

export default AccountPage;
