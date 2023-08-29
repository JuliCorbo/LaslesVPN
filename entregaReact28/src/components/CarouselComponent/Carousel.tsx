import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { BASE_URL } from "../../App";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

type testimonialType = {
  avatar: string;
  fullName: string;
  testimonial: string;
};

const Carousel = () => {
  const [testimonials, setTestimonial] = useState<testimonialType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    setLoading(true);
    fetch(`${BASE_URL}/api/testimonial`)
      .then((response) => {
        response.json().then((result) => {
          setTestimonial(result);
        });
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="mt-20">
      <div className="grid justify-items-center text-center my-10 p-7">
        <div className="w-full sm:w-1/3">
          <h2 className="text-4xl font-black my-5 mt-20">
            Trusted by Thousands of Happy Customers
          </h2>
          <p id="parrafo">
            These are the stories of our customers who have joined us with great
            pleasure when using this amazing feature.
          </p>
        </div>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div className="">
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center mt-20 mx-7 mb-5">
                <img
                  className="w-20 h-20 rounded-full mb-4 object-cover"
                  src={item.avatar}
                  alt="image"
                />
                <div className="text-center">
                  <p className="text-lg font-semibold">{item.fullName}</p>
                  <p id="parrafo">{item.testimonial}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;
