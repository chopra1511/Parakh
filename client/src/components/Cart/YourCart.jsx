import React, { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AddressFormModal from "../Account/AddressFormModal";
import {
  clearUserCart,
  decreaseCartItem,
  deleteCartItem,
  getUserCart,
  increaseCartItem,
} from "../../store/reducers/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { load } from "@cashfreepayments/cashfree-js";
import {
  getUserAddresses,
  removeUserAddress,
} from "../../store/reducers/addressSlice";
import { createOrder, paymentVerify } from "../../store/reducers/checkoutSlice";
import { useNavigate } from "react-router";

const YourCart = ({ cart, billDetails }) => {
  const [showAllAddresses, setShowAllAddresses] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(0);

  const { addresses } = useSelector((state) => state.address);
  const { order, orderStatus } = useSelector((state) => state.order);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserAddresses());
  }, [dispatch]);

  const deleteAddressHandler = (id) => {
    dispatch(removeUserAddress(id))
      .then(() => {
        dispatch(getUserAddresses());
      })
      .catch((error) => console.log(error));
  };

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

  const decrementQuantity = (id) => {
    dispatch(decreaseCartItem(id))
      .then(() => {
        dispatch(getUserCart());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteItemHandler = (id) => {
    dispatch(deleteCartItem(id))
      .then(() => {
        dispatch(getUserCart());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const incrementQuantity = (id) => {
    dispatch(increaseCartItem(id))
      .then(() => {
        dispatch(getUserCart());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let cashfree;
  var initializeSDK = async function () {
    cashfree = await load({
      mode: "sandbox",
    });
  };
  initializeSDK();

  const handlePayment = async (e) => {
    e.preventDefault();
    dispatch(createOrder());
    try {
      let checkoutOptions = {
        paymentSessionId: order.payment_session_id,
        redirectTarget: "_modal",
      };

      cashfree
        .checkout(checkoutOptions)
        .then(() => {
          console.log("Payment Initiated");
          dispatch(paymentVerify(order.order_id))
            .then(() => {
              if (orderStatus.payment_status === "SUCCESS") {
                dispatch(clearUserCart()).then(() => {
                  navigate("/thankyou");
                })
              }
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <div className="px-5 pb-10">
        <div className="md:mx-20 p-5 md:p-10 bg-white rounded-2xl drop-shadow-xl">
          <div className="flex justify-start text-left">
            <div className="pb-3 border-b-2 w-full">
              <h1 className="text-xl md:text-3xl font-Poppins font-semibold">
                Your Cart
              </h1>
            </div>
          </div>

          <div className="my-5 md:my-10">
            {cart.map((item, index) => (
              <div key={index} className="flex gap-5 py-5">
                <div className="w-36 flex justify-center items-center rounded-2xl bg-gradient-to-b from-[#ffdde1] to-[#ee9ca7]">
                  <img
                    src={item.product.image}
                    alt=""
                    className="w-20 md:w-24 mix-blend-multiply"
                  />
                </div>
                <div className="w-full">
                  <div className="flex justify-between">
                    <div>
                      <h1 className="text-sm md:text-lg font-Poppins font-medium">
                        {item.product.name}
                      </h1>
                      <h1 className="text-[10px] md:text-[12px] font-Poppins font-medium capitalize">
                        {item.product.variant.color},
                        {item.product.variant.material}
                      </h1>
                    </div>
                    <div className="text-right">
                      <h1 className="text-sm md:text-lg font-Poppins font-semibold md:mt-2">
                        ₹{item.totalPrice}
                        {item.totalDiscount ? (
                          <span className="pl-2 line-through text-slate-600 text-[12px]">
                            ₹{item.totalDiscount}
                          </span>
                        ) : (
                          ""
                        )}
                      </h1>
                      <div className="">
                        <IconButton
                          onClick={() => {
                            deleteItemHandler(item.product._id);
                          }}
                        >
                          <i className="fi fi-rs-trash text-xl pt-1 px-2 hover:text-[#f2707f]"></i>
                        </IconButton>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <div className=" flex items-center justify-between w-1/2 md:w-32 rounded-md border-2">
                      <i
                        className="fi fi-rr-minus-small pt-1 pl-2 cursor-pointer"
                        onClick={() => {
                          decrementQuantity(item.product._id);
                        }}
                      ></i>
                      <h1 className="text-sm font-Poppins font-medium">
                        {item.quantity}
                      </h1>
                      <i
                        className="fi fi-rr-plus-small pt-1 pr-2 cursor-pointer"
                        onClick={() => {
                          incrementQuantity(item.product._id);
                        }}
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-5" id="detailedBill">
        <div className="md:mx-20 p-5 md:p-10 bg-white rounded-2xl drop-shadow-xl">
          <div className="flex justify-start text-left">
            <div className="pb-3 border-b-2 w-full">
              <h1 className="text-xl md:text-3xl font-Poppins font-semibold">
                Bill Details
              </h1>
            </div>
          </div>

          <div>
            <div className="py-3 border-b-[1px] md:border-b-2 border-dashed">
              <div className="flex justify-between">
                <h1 className="text-sm md:text-md font-Poppins">Cart total</h1>
                <h1 className="text-sm md:text-md font-Poppins font-medium">
                  ₹{billDetails.cartTotal}
                </h1>
              </div>
              <div className="flex justify-between mt-2">
                <h1 className="text-sm md:text-md font-Poppins">Discount</h1>
                <h1 className="text-sm md:text-md font-Poppins font-medium">
                  ₹{billDetails.discount}
                </h1>
              </div>
            </div>
            <div className="py-3 border-b-[1px] md:border-b-2 border-dashed">
              <div className="flex justify-between">
                <h1 className="text-sm md:text-md font-Poppins">Subtotal</h1>
                <h1 className="text-sm md:text-md font-Poppins font-medium">
                  ₹{billDetails.subTotal}
                </h1>
              </div>
            </div>
            <div className="pt-5 pb-10 border-b-[1px] md:border-b-2 border-dashed">
              <div className="flex justify-between">
                <h1 className="text-sm md:text-md font-Poppins">
                  Delivery Fee
                </h1>
                <h1 className="text-sm md:text-md font-Poppins font-medium">
                  ₹{billDetails.delivery}
                </h1>
              </div>
            </div>
            <div className="pt-3">
              <div className="flex justify-between">
                <h1 className="text-md md:text-lg font-Poppins font-semibold">
                  To Pay
                </h1>
                <h1 className="text-md md:text-lg font-Poppins font-bold">
                  ₹{billDetails.toPay}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 py-10">
        <div className="md:mx-20 p-5 md:p-10 bg-white rounded-2xl drop-shadow-xl">
          <div className="flex justify-start text-left">
            <div className="pb-3 w-full">
              <h1 className="md:text-xl font-Poppins font-semibold">
                Cancellation Policy
              </h1>
            </div>
          </div>

          <div>
            <ul>
              <li className="flex gap-3 items-center leading-loose">
                <i className="fi fi-ts-feather-pointed pt-1 text-[#f2707f]"></i>
                <h1 className="text-[12px] md:text-base font-Poppins">
                  Full refund if order is cancelled before confirmation
                </h1>
              </li>
              <li className="flex gap-3 items-center leading-loose">
                <i className="fi fi-ts-feather-pointed pt-1 text-[#f2707f]"></i>
                <h1 className="text-[12px] md:text-base font-Poppins">
                  No refund if the order is already accepted or dispatched
                </h1>
              </li>
              <li className="flex gap-3 items-center leading-loose">
                <i className="fi fi-ts-feather-pointed pt-1 text-[#f2707f]"></i>
                <h1 className="text-[12px] md:text-base font-Poppins">
                  For any queries on cancellation, please contact us
                </h1>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="px-5 pb-10">
        <div className="md:mx-20 p-5 md:p-10 bg-white rounded-2xl drop-shadow-xl">
          <div className="flex justify-start text-left">
            <div className="pb-3 w-full flex items-center justify-between">
              <h1 className="md:text-xl font-Poppins font-semibold">
                Select Your Address
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
                  key={index}
                  className={`flex justify-between items-center ${
                    index !== selectedAddressIndex && !showAllAddresses
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
                      {address.name}, {address.completeAddress},{" "}
                      {address.pincode}, {address.city}, {address.state}
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
              <div className="flex items-center cursor-pointer">
                <IconButton onClick={handleOpenModal}>
                  <i className="fi fi-rr-square-plus text-base px-2 pt-1 text-[#f2707f]"></i>
                </IconButton>
                <h1 className="text-sm md:text-base text-[#f2707f] font-Poppins font-medium underline underline-offset-4 decoration-dashed">
                  Add new address
                </h1>
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-between items-center">
            <div className="">
              <h1 className="text-lg md:text-2xl font-Poppins font-bold">
                ₹{billDetails.toPay}
              </h1>
              <a href="#detailedBill">
                <h1 className="text-[10px] md:text-sm font-Poppins text-[#f2707f] cursor-pointer">
                  View Detailed Bill
                </h1>
              </a>
            </div>

            <div>
              <Button
                variant="contained"
                size="large"
                type="submit"
                onClick={handlePayment}
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
                Proceed to payment
              </Button>
            </div>
          </div>
        </div>
      </div>

      <AddressFormModal isVisible={isModalVisible} onClose={handleCloseModal} />
    </>
  );
};

export default YourCart;
