import Link from "next/link";

import {
  RiLinkedinLine,
  RiWhatsappLine,
  RiMailLine,
  RiGithubLine,
} from "react-icons/ri";
import { FaSteam } from "react-icons/fa";

export const socialData = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/farrel-laogi-murjitama-2791aa3b8",
    Icon: RiLinkedinLine,
  },
  {
    name: "Whatsapp",
    link: "https://wa.me/6289502026501",
    Icon: RiWhatsappLine,
  },
  {
    name: "Email",
    link: "mailto:farrellom21@gmail.com",
    Icon: RiMailLine,
  },
  {
    name: "Steam",
    link: "https://steamcommunity.com/id/kazharsktan",
    Icon: FaSteam,
  },
  {
    name: "Github",
    link: "https://github.com/FarrelLOM",
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
