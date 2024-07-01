import React, { useRef, useState } from "react";
import Button from "@mui/material/Button";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Register from "./Register";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../store/reducers/userSlice";

const Login = () => {
  const [register, setRegister] = useState(false);

   const dispatch = useDispatch();
   const { isLoading, isError, errorMessage } = useSelector(
     (state) => state.user
  );
  
   const emailRef = useRef("");
  const passwordRef = useRef("");
  
  const submithandler = (e) => {
    e.preventDefault();
    const userdetails = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    dispatch(userLogin(userdetails))
      .unwrap()
      .then(() => navigate("/home"))
      .catch((error) => console.log(error));
  };


  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const navigate = useNavigate();

  return (
    <div className="h-screen">
      {!register && (
        <div className="h-full flex justify-center items-center py-32 px-5 md:px-40">
          <div className="flex flex-col items-center text-center p-10">
            <div>
              <h1 className="text-2xl md:text-4xl font-Cursive font-bold text-[#f2707f]">
                Login
              </h1>
              <h1 className="text-xl md:text-4xl font-Poppins font-semibold">
                Let's get you Logged in
              </h1>
            </div>

            <div className="mt-10">
              <form onSubmit={submithandler}>
                <div className="flex flex-col gap-10 items-center">
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
                <h1 className="w-fit text-[12px] md:text-sm mt-2 font-Poppins font-medium text-[#f2707f] cursor-pointer hover:underline">
                  Forgot Your Password?
                </h1>
                <div className="mt-5">
                  <Button
                    variant="contained"
                    size="large"
                    type="submit"
                    disabled={isLoading}
                    className="button-shiny-effect"
                    sx={{
                      width: "80%",
                      borderRadius: "20px",
                      fontFamily: "Poppins",
                      textTransform: "capitalize",
                      backgroundColor: "#f2707f",
                      fontSize: isMobile ? "12px" : "16px", // Adjust the font size for mobile
                      padding: isMobile ? "8px 16px" : "8px 24px", // Adjust the padding for mobile
                      ":hover": {
                        backgroundColor: "#F7475C",
                      },
                    }}
                  >
                    {isLoading ? "LOGIN..." : "LOGIN"}
                  </Button>
                </div>
              </form>
              {isError && (
                <h1 className="mt-5 text-sm md:text-base font-Poppins font-semibold text-red-600">
                  {`${errorMessage}`}
                </h1>
              )}
              <div className="mt-5 flex flex-col items-center">
                <h1 className="w-fit pb-2 text-sm md:text-base font-Poppins font-semibold text-[#f2707f]">
                  Don't have an accounr?
                </h1>
                <h1
                  onClick={() => {
                    setRegister(true);
                  }}
                  className=" w-fit text-sm md:text-base font-Poppins font-semibold text-[#f2707f] hover:text-[#F7475C] hover:underline cursor-pointer"
                >
                  Create Account
                </h1>
              </div>
            </div>
          </div>
        </div>
      )}

      {register && <Register setRegister={setRegister} />}
    </div>
  );
};

export default Login;
