import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
  RxEyeOpen,
  RxEyeClosed,
} from "react-icons/rx";

const serviceData = [
  {
    Icon: RxCrop,
    title: "Branding",
    description: "Capability to create unique and effective brand identities.",
  },
  {
    Icon: RxEyeOpen,
    title: "Cyber Security",
    description: "Protecting systems and networks from digital threats and unauthorized access.",
  },
  {
    Icon: RxDesktop,
    title: "Development",
    description: "Ability to build and maintain web applications using modern technologies, and features.",
  },
  {
    Icon: RxReader,
    title: "Research",
    description: "Familiarity with research methodologies and techniques to gather insights and inform design decisions.",
  },
  {
    Icon: RxRocket,
    title: "Teamwork",
    description: "Collaborating effectively with team members to achieve common goals.",
  },
  {
    Icon: RxPencil2,
    title: "Fullstack",
    description: "Capability to develop both frontend and backend components of web applications.",
  },
];

const ServiceSlider = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {serviceData.map((item, i) => (
        <div
          key={i}
          className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300"
        >
          {/* icon */}
          <div className="text-4xl text-accent mb-4">
            <item.Icon aria-hidden />
          </div>

          {/* title & description */}
          <div className="mb-8">
            <div className="mb-2 text-lg">{item.title}</div>
            <p className="max-w-[350px] leading-normal">{item.description}</p>
          </div>

          {/* arrow */}
          <div className="text-3xl">
            <RxArrowTopRight
              className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
              aria-hidden
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceSlider;
