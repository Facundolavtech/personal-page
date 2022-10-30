import { AiFillGithub, AiOutlineMedium } from "react-icons/ai";
import { BsStackOverflow } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import constants from "../../../config/constants";

const SocialsHelper = [
  {
    id: 1,
    href: constants.linkedin,
    icon: FaLinkedinIn,
  },
  {
    id: 2,
    href: constants.github,
    icon: AiFillGithub,
  },
  {
    id: 3,
    href: constants.medium,
    icon: AiOutlineMedium,
  },
  {
    id: 4,
    href: constants.stackoverflow,
    icon: BsStackOverflow,
  },
];

export default SocialsHelper;
