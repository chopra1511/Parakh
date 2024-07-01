import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@flaticon/flaticon-uicons/css/all/all.css";

const reviews = [
  {
    title: "Awesome",
    rating: 5,
    content: "It's an awesome product, trustworthy and good customer care.",
    name: "Nunutei Chhangte",
    month: "April",
  },
  {
    title: "Awesome",
    rating: 5,
    content:
      "I love the earrings they are of great quality, & wide range of designs. Got them in sale but I'd definitely purchase for the actual price as well that's how much I'm obsessed!",
    name: "Katyayani Inuti",
    month: "February",
  },
  {
    title: "Wonderful",
    rating: 5,
    content:
      "It was amazing when I wore it. It's just so wow!! Again and again, I'm flexing about the dreamy heart layers ring.",
    name: "Rubiya Vasaikar",
    month: "February",
  },
  // Add more reviews as needed
];



const CustomerReview = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-5 my-10 py-10 px-5 lg:px-40 lg:py-20 lg:m-10 rounded-3xl bg-gradient-to-b from-[#ffdde1] to-[#ee9ca7]">
      <div className="">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl font-Cursive font-bold text-[#f2707f]">
            Absolute Satisfaction
          </h1>
          <h1 className="mt-2 text-2xl lg:text-3xl font-Poppins font-semibold">
            Customer Reviews
          </h1>
        </div>

        <div className="mt-10 p-5">
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div key={index} className="px-2">
                <div className="bg-white p-5 rounded-3xl flex flex-col justify-between h-80">
                  <div className="flex flex-col h-full">
                    <div>
                      <h1 className="text-lg font-Poppins font-medium">
                        {review.title}
                      </h1>
                      <div className="flex gap-1 pb-2 border-b-2">
                        {[...Array(review.rating)].map((_, i) => (
                          <i
                            key={i}
                            className="fi fi-sr-star text-[12px] text-[#ffb800]"
                          ></i>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h1 className="pt-5 text-sm font-Quicksand font-semibold">
                        {review.content}
                      </h1>
                    </div>
                  </div>
                  <div className="pt-3 flex justify-between border-t-2">
                    <h1 className="text-sm font-Poppins font-medium">
                      {review.name}
                    </h1>
                    <h1 className="text-sm font-Poppins font-medium">
                      {review.month}
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
