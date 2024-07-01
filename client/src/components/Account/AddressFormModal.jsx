import Button from "@mui/material/Button";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { addUserAddress, getUserAddresses } from "../../store/reducers/addressSlice";

const AddressFormModal = ({ isVisible, onClose }) => {
  const dispatch = useDispatch();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  

  const nameRef = useRef("");
  const contactRef = useRef("");
  const addressRef = useRef("");
  const pincodeRef = useRef("");
  const cityRef = useRef("");
  const stateRef = useRef("");

  const addressFormHandler = (e) => {
    e.preventDefault();
    const addressDetails = {
      name: nameRef.current.value,
      contact: contactRef.current.value,
      address: addressRef.current.value,
      pincode: pincodeRef.current.value,
      city: cityRef.current.value,
      state: stateRef.current.value,
    };
    dispatch(addUserAddress(addressDetails))
      .then(() => {
        onClose(); // Close the modal after successful submission
        dispatch(getUserAddresses());
      })
      .catch((error) => console.log(error));
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60 px-5"
      onClick={(e) => {
        e.stopPropagation(); 
        onClose(); 
      }}
    >
      <div className="w-full md:w-fit" onClick={(e) => e.stopPropagation()}>
        <div className="flex flex-col text-center py-5 px-10 rounded-2xl drop-shadow-xl bg-white">
          <div>
            <h1 className="text-2xl md:text-3xl font-Cursive font-bold text-[#f2707f]">
              Address
            </h1>
          </div>

          <div className="mt-3 md:mt-10">
            <form onSubmit={addressFormHandler}>
              <div className="pt-5 flex flex-col gap-5 md:gap-10 items-center md:h-full overflow-y-auto hide-scrollbar">  
                <div className="w-full relative">
                   <input
                    type="text"
                    placeholder="Your FullName"
                    ref={nameRef}
                    className="text-sm px-5 py-3 w-full bg-transparent font-Poppins font-medium outline-none border-2 border-[#f2707f] rounded-xl"
                  />
                  <h1 className="text-sm text-[#f2707f] font-Poppins font-semibold absolute -top-2.5 md:-top-3 left-3 px-2 bg-white">
                    Name
                  </h1>
                </div>

                <div className="w-full relative">
                  <textarea
                    placeholder="Your Address*"
                    rows={3}
                    ref={addressRef}
                    className="text-sm px-5 py-3 w-full bg-transparent font-Poppins font-medium outline-none border-2 border-[#f2707f] rounded-xl"
                  ></textarea>
                  <h1 className="text-sm text-[#f2707f] font-Poppins font-semibold absolute -top-2.5 md:-top-3 left-3 px-2 bg-white">
                    Address
                  </h1>
                </div>

                <div className="w-full flex flex-col md:flex-row gap-5 md:gap-10">
                  <div className="relative">
                    <input
                      type="number"
                      placeholder="Your Mobile Number*"
                      ref={contactRef}
                      className="text-sm px-5 py-3 w-full bg-transparent font-Poppins font-medium outline-none border-2 border-[#f2707f] rounded-xl"
                    />
                    <h1 className="text-sm text-[#f2707f] font-Poppins font-semibold absolute -top-2.5 md:-top-3 left-3 px-2 bg-white">
                      Contact
                    </h1>
                  </div>
                  <div className="relative">
                    <input
                      type="number"
                      placeholder="Pincode*"
                      ref={pincodeRef}
                      className="text-sm px-5 py-3 w-full bg-transparent font-Poppins font-medium outline-none border-2 border-[#f2707f] rounded-xl"
                    />
                    <h1 className="text-sm text-[#f2707f] font-Poppins font-semibold absolute -top-2.5 md:-top-3 left-3 px-2 bg-white">
                      Pincode
                    </h1>
                  </div>
                </div>

                <div className="w-full flex flex-col md:flex-row gap-5 md:gap-10">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="City*"
                      ref={cityRef}
                      className="text-sm px-5 py-3 w-full bg-transparent font-Poppins font-medium outline-none border-2 border-[#f2707f] rounded-xl"
                    />
                    <h1 className="text-sm text-[#f2707f] font-Poppins font-semibold absolute -top-2.5 md:-top-3 left-3 px-2 bg-white">
                      City
                    </h1>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="State*"
                      ref={stateRef}
                      className="text-sm px-5 py-3 w-full bg-transparent font-Poppins font-medium outline-none border-2 border-[#f2707f] rounded-xl"
                    />
                    <h1 className="text-sm text-[#f2707f] font-Poppins font-semibold absolute -top-2.5 md:-top-3 left-3 px-2 bg-white">
                      State
                    </h1>
                  </div>
                </div>
              </div>

              <div className="mt-10 md:mt-10">
                <Button
                  variant="contained"
                  size="large"
                  type="submit"
                  className="button-shiny-effect"
                  sx={{
                    width: "80%",
                    borderRadius: "20px",
                    fontFamily: "Poppins",
                    textTransform: "capitalize",
                    backgroundColor: "#f2707f",
                    fontSize: isMobile ? "12px" : "16px",
                    padding: isMobile ? "8px 16px" : "8px 24px",
                    ":hover": {
                      backgroundColor: "#F7475C",
                    },
                  }}
                >
                  Save
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressFormModal;
