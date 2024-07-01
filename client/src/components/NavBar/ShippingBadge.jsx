import React from "react";
import Marquee from "react-fast-marquee";

const ShippingBadge = () => {
     const message = " Free Shipping Above ₹999 • ";
     const repeatCount = 7;
    const longMessage = message.repeat(repeatCount);
    
  return (
    <div>
      <Marquee>
        <h1 className="text-sm text-center uppercase tracking-widest font-Poppins font-semibold p-2 ">
          {longMessage}
        </h1>
      </Marquee>
    </div>
  );
};

export default ShippingBadge;
