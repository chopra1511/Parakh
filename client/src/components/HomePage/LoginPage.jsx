import { useEffect } from "react";
import Login from "../Account/Login";

const LoginPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      const targetElement = document.getElementById("login");
      const yOffset = 0;
      const y =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="home ">
        <div className="h-screen bg-[url('/assets/bg2.jpg')] lg:bg-[url('/assets/bg.jpg')] bg-cover px-5">
          <div className="h-full flex flex-col justify-center items-center text-white animate-wiggle">
            <h1 className="text-8xl lg:text-9xl font-musky">Parakh</h1>
            <h1 className="text-xl lg:text-2xl font-Poppins font-light tracking-widest">
              Let's find the best
            </h1>
          </div>
        </div>

        <div id="login">
          <Login />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
