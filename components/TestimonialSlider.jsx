import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "UPTD DAS Ciliman - Cisawarna",
    position: "Internship Manager",
    message:
      "He has shown great dedication and enthusiasm during his internship at UPTD DAS Ciliman - Cisawarna. He develop the presence recording website that will approve all of the employees presence using AI and geolocation verification. He has been an asset to our team and has contributed significantly to our projects. We highly recommend them for any future opportunities and believe he will have a bright future ahead.",
  },
  {
    image: "/t-avt-2.png",
    name: "Language Development Center",
    position: "LDC Manager",
    message:
      "He has been an outstanding coordinator leader at the campus Language Development Center, consistently demonstrating a strong work ethic and a willingness to learn. He has contributed significantly to our projects and has shown great potential in the field of language development. We highly recommend him for research and development opportunities.",
  },
  {
    image: "/t-avt-3.png",
    name: "PLN Office Banten Units",
    position: "Human Resources Affairs",
    message:
      "He has been a valuable addition to our team at PLN Office Banten Units. His dedication to his work and his ability to collaborate effectively with colleagues have been instrumental in the success of various initiatives. He has completed the task with a high level of professionalism.",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
            {/* avatar, name, position */}
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                {/* avatar */}
                <div className="mb-2 mx-auto">
                  <Image
                    src={person.image}
                    width={2000}
                    height={2000}
                    alt={person.name}
                  />
                </div>

                {/* name */}
                <div className="text-lg">{person.name}</div>

                {/* position */}
                <div className="text-[12px] uppercase font-extralight tracking-widest">
                  {person.position}
                </div>
              </div>
            </div>

            {/* quote & message */}
            <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              {/* quote icon */}
              <div className="mb-4">
                <FaQuoteLeft
                  className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0"
                  aria-aria-hidden
                />
              </div>

              {/* message */}
              <div className="xl:text-lg text-center md:text-left">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
