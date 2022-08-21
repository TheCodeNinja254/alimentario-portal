import styled from "@mui/material/styles/styled";
import { Box } from "@mui/material";
import slideInTopForward from "../animation/slideInTopForward";

const AnimatedSection = styled(Box)(({ animate, duration }) => ({
  animation:
    animate &&
    `${slideInTopForward} ${duration} cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
}));

export default AnimatedSection;
