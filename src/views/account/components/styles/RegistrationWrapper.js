import { styled } from "@material-ui/styles";

const RegistrationWrapper = styled("div")(({ theme }) => ({
  backgroundImage: "url(/images/bg.jpg)",
  backgroundRepeat: "no-repeat",
  backgroundColor:
    theme.palette.type === "light"
      ? theme.palette.grey[50]
      : theme.palette.grey[900],
  backgroundSize: "cover",
  height: "100%",
  backgroundPosition: "center",
  opacity: 0.9,
}));

export default RegistrationWrapper;
