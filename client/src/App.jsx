import { createBrowserRouter } from "react-router-dom";
import "./index.css";
import { RouterProvider } from "react-router";
import LoginPage from "./components/HomePage/LoginPage";
import AllHotDeals from "./components/All_Products/AllHotDeals";
import AllMostLoved from "./components/All_Products/AllMostLoved";
import AllRings from "./components/All_Products/AllRings";
import AllEarrings from "./components/All_Products/AllEarrings";
import AllNecklace from "./components/All_Products/AllNecklace";
import AllProducts from "./components/All_Products/AllProducts";
import ContactUS from "./components/ContactUs/ContactUS";
import Cart from "./components/Cart/Cart";
import HomePage from "./components/HomePage/HomePage";
import AccountPage from "./components/Account/AccountPage";
import Wishlist from "./components/Wishlist/Wishlist";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProduct } from "./store/reducers/productSlice";
import ThankYou from "./components/Order/ThankYou";

function App() {
const dispatch = useDispatch()

  useEffect(() => {
    if (location.pathname !== "/") {
      dispatch(getAllProduct());
    }
  },[])


  const router = createBrowserRouter([
    { path: "/", element: <LoginPage /> },
    { path: "/home", element: <HomePage /> },
    { path: "/contact-us", element: <ContactUS /> },
    { path: "/account", element: <AccountPage /> },
    { path: "/wishlist", element: <Wishlist /> },
    { path: "/cart", element: <Cart /> },
    { path: "/hot-deals", element: <AllHotDeals /> },
    { path: "/most-loved", element: <AllMostLoved /> },
    { path: "/all-products", element: <AllProducts /> },
    { path: "/rings", element: <AllRings /> },
    { path: "/earrings", element: <AllEarrings /> },
    { path: "/necklaces", element: <AllNecklace /> },
    { path: "/thankyou", element: <ThankYou /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
