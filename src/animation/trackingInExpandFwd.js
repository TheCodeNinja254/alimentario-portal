import { keyframes } from "@mui/material";

const trackingInExpandFwd = keyframes`
  0% {
    letter-spacing: -0.5em;
    -webkit-transform: translateZ(-700px);
    transform: translateZ(-700px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    opacity: 1;
  }
`;

export default trackingInExpandFwd;
