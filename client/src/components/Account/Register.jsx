import React, { useRef } from "react";
import Button from "@mui/material/Button";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/reducers/userSlice";

const Register = ({ setRegister }) => {
  const dispatch = useDispatch();
  const { isLoading, isError, errorMessage } = useSelector(
    (state) => state.user
  );

  const nameRef = useRef("");
  const contactRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const submithandler = (e) => {
    e.preventDefault();
    const userdetails = {
      name: nameRef.current.value,
      contact: contactRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    dispatch(registerUser(userdetails))
      .unwrap()
      .then(() => navigate("/home"))
      .catch((error) => console.log(error));
  };

  return (
    <div className="h-full flex justify-center items-center py-32 px-5 md:px-40">
      <div className="flex flex-col items-center text-center p-10">
        <div>
          <h1 className="text-2xl md:text-3xl font-Cursive font-bold text-[#f2707f]">
            Register
          </h1>
          <h1 className="text-xl md:text-4xl font-Poppins font-semibold">
            Let's get you Registered
          </h1>
        </div>

        <div className="mt-10">
          <form onSubmit={submithandler}>
            <div className="flex flex-col gap-10 items-center">
              <div className="md:w-96 relative">
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

              <div className="md:w-96 relative">
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

              <div className="md:w-96 relative">
                <input
                  type="email"
                  placeholder="Your Email*"
                  ref={emailRef}
                  className="text-sm px-5 py-3 w-full bg-transparent font-Poppins font-medium outline-none border-2 border-[#f2707f] rounded-xl"
                />
                <h1 className="text-sm text-[#f2707f] font-Poppins font-semibold absolute -top-2.5 md:-top-3 left-3 px-2 bg-white">
                  Email ID
                </h1>
              </div>
              <div className="md:w-96 relative">
                <input
                  type="password"
                  placeholder="Your Password*"
                  ref={passwordRef}
                  className="text-sm px-5 py-3 w-full bg-transparent font-Poppins font-medium outline-none border-2 border-[#f2707f] rounded-xl"
                />
                <h1 className="text-sm text-[#f2707f] font-Poppins font-semibold absolute -top-2.5 md:-top-3 left-3 px-2 bg-white">
                  Password
                </h1>
              </div>
            </div>
            <div className="mt-10">
              <Button
                variant="contained"
                size="large"
                type="submit"
                className="button-shiny-effect"
                disabled={isLoading}
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
                {isLoading ? "REGISTERING..." : "REGISTER"}
              </Button>
            </div>
          </form>
          {isError && (
            <h1 className="mt-5 text-sm md:text-base font-Poppins font-semibold text-red-600">
              {`${errorMessage}`}
            </h1>
          )}
          <h1 className="mt-5 text-sm md:text-base font-Poppins font-semibold text-[#f2707f]">
            Have an account?{" "}
            <span
              onClick={() => setRegister(false)}
              className="hover:text-[#F7475C] hover:underline cursor-pointer"
            >
              LOGIN
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Register;
