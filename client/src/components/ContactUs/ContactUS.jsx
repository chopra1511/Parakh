import NavBar from "../NavBar/NavBar";
import FooterNav from "../NavBar/FooterNav";
import Footer from "../HomePage/Footer";
import telephone from "../../assets/telephone.png";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import { useEffect } from "react";
// import ButtonStyle from "../ButtonStyle";

const ContactUS = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="home bg-[#f4f4f4]">
        <div className="fixed top-0 right-0 left-0 z-10">
          <NavBar />
        </div>

        <div>
          <div className="flex items-center relative px-5 mt-14 py-10 lg:px-20 lg:pt-20 overflow-hidden z-0">
            <div className="w-full flex justify-center items-center text-center">
              <div className="z-10 relative py-10 lg:pt-20 px-10 lg:px-20">
                <h1 className="text-2xl md:text-3xl font-Cursive font-bold text-[#f2707f]">
                  Get in touch
                </h1>
                <h1 className="text-4xl md:text-5xl font-Poppins font-semibold">
                  Contact Us
                </h1>
              </div>
              <div className="absolute -top-20 -right-20 lg:-top-44 lg:-right-44 z-0">
                <div className="p-10 lg:p-20 rounded-full bg-white/40">
                  <div className="p-10 lg:p-20 rounded-full bg-white">
                    <img
                      src={telephone}
                      alt="Emote"
                      className="w-24 lg:w-56 opacity-50"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-center px-5 lg:px-40">
              <h1 className="text-sm md:text-md lg:text-lg font-medium font-Poppins mb-5">
                We're a young company and always try our best to provide a
                superior customer care service
              </h1>
              <h1 className="text-sm md:text-md lg:text-lg font-medium font-Poppins mb-5">
                We're all ears to your queries, so feel free to reach out for
                anything
              </h1>
              <div className="flex justify-center items-center gap-2">
                <i className="fi fi-sr-phone-rotary text-2xl pt-1 text-[#f2707f]"></i>{" "}
                <h1 className="text-sm md:text-md lg:text-lg font-Poppins font-semibold ">
                  +91 9967911088
                </h1>
              </div>
            </div>

            <div>
              <div className="flex items-center relative px-5 py-10 lg:px-20 lg:pt-10 z-0">
                <div className="w-full flex justify-center items-center text-center">
                  <div className="z-10 relative py-5 lg:pt-10 px-10 lg:px-20">
                    <h1 className="text-2xl md:text-3xl font-Cursive font-bold text-[#f2707f]">
                      Tell us what
                    </h1>
                    <h1 className="text-4xl md:text-5xl font-Poppins font-semibold">
                      You Think!
                    </h1>
                  </div>
                </div>
              </div>
              <div className="text-center px-5 pb-10 lg:px-40 pb-40">
                <h1 className="text-sm md:text-md lg:text-lg font-medium font-Poppins">
                  We'd love to hear from you about our entire service. Your
                  feedback and suggestions will be highly appreciated. Please
                  complete the form below.
                </h1>
                <div className="mt-10">
                  <form>
                    <div className="flex flex-col md:flex-row gap-10 p-5">
                      <div className="w-full relative">
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="text-sm px-5 py-3 w-full bg-transparent font-Poppins font-medium outline-none border-2 border-[#f2707f] rounded-xl"
                        />
                        <h1 className="text-sm text-[#f2707f] font-Poppins font-semibold absolute -top-2.5 md:-top-3 left-3 px-2 bg-[#f4f4f4]">
                          Name
                        </h1>
                      </div>
                      <div className="w-full relative">
                        <input
                          type="email"
                          placeholder="Your Email"
                          className="text-sm px-5 py-3 w-full bg-transparent font-Poppins font-medium outline-none border-2 border-[#f2707f] rounded-xl"
                        />
                        <h1 className="text-sm text-[#f2707f] font-Poppins font-semibold absolute -top-2.5 md:-top-3 left-3 px-2 bg-[#f4f4f4]">
                          Email
                        </h1>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="w-full relative">
                        <textarea
                          placeholder="Your Feedback"
                          rows={5}
                          className="text-sm px-5 py-3 w-full bg-transparent font-Poppins font-medium outline-none border-2 border-[#f2707f] rounded-xl"
                        ></textarea>
                        <h1 className="text-sm text-[#f2707f] font-Poppins font-semibold absolute -top-2.5 md:-top-3 left-3 px-2 bg-[#f4f4f4]">
                          Feedback
                        </h1>
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <Checkbox
                        sx={{
                          color: "#f2707f",
                          "&.Mui-checked": {
                            color: "#f2707f",
                          },
                        }}
                        required
                      />
                      <h1 className="text-[12px] md:text-sm lg:text-md font-Poppins">
                        Save my details for the next time I comment.
                      </h1>
                    </div>
                    <Button
                      variant="contained"
                      size="large"
                      type="submit"
                      className="button-shiny-effect"
                      sx={{
                        marginTop: 3,
                        borderRadius: 10,
                        fontFamily: "Poppins",
                        textTransform: "capitalize",
                        backgroundColor: "#f2707f",
                        ":hover": {
                          backgroundColor: "#F7475C",
                        },
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      Save
                    </Button>
                    {/* <ButtonStyle text="save" /> */}
                  </form>
                </div>
              </div>
            </div>
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

export default ContactUS;
