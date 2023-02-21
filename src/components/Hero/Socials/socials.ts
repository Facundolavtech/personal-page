import { AiFillGithub, AiOutlineMedium } from "react-icons/ai";
import { BsStackOverflow } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import config from "../../../config";

const SocialsList = [
  {
    id: 1,
    href: config.linkedin,
    icon: FaLinkedinIn,
  },
  {
    id: 2,
    href: config.github,
    icon: AiFillGithub,
  },
  {
    id: 3,
    href: config.medium,
    icon: AiOutlineMedium,
  },
  {
    id: 4,
    href: config.stackoverflow,
    icon: BsStackOverflow,
  },
];

export default SocialsList;
