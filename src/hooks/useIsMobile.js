import { useMediaQuery } from "@mui/material";
import { useTheme } from "@material-ui/styles";

const useIsMobile = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down("sm"));
};

export default useIsMobile;
