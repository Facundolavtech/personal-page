import { FC } from "react";
import { Box } from "@chakra-ui/react";

type Props = {
  href: string;
};

const MouseScroll: FC<Props> = ({ href }) => {
  return (
    <a href={href}>
      <Box className="mouse__scroll">
        <Box className="mouse">
          <Box className="mouse-in"></Box>
        </Box>
        <Box>
          <Box as="span" className="down-arrow-1"></Box>
        </Box>
      </Box>
    </a>
  );
};

export default MouseScroll;
