import React from "react";
import {
  Navigation,
  Scrollbar,
  A11y,
  Autoplay,
  Pagination,
} from "swiper/modules";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Box, ButtonBase } from "@material-ui/core";
import { styled } from "@mui/material";
import { useTheme } from "@material-ui/styles";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";

const SuiSwiperNavButton = styled(ButtonBase)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  height: "48px",
  width: "56px",
  borderRadius: "8px",
  color: "white",
  backgroundColor: theme.palette.primary.main,
  "&.swiper-button-disabled": {
    color: "rgba(158, 165, 173, 1)",
    backgroundColor: "rgba(145, 158, 171, 0.24)",
  },
}));

const AppSwiper = ({
  pagination = false,
  loop = false,
  height = 350,
  slidesPerView = 4,
  showNavigationButtons = false,
  breakpoints,
  children,
}) => {
  const theme = useTheme();

  const _pagination = {
    clickable: true,
  };

  return (
    <Box
      sx={{
        pt: { xs: "20px", md: "60px" },
        pb: { xs: "20px", md: "40px" },
      }}
    >
      <Swiper
        className="sui-swiper"
        modules={[Navigation, Autoplay, Scrollbar, A11y, Pagination]}
        slidesPerView={slidesPerView}
        pagination={pagination ? _pagination : false}
        spaceBetween={15}
        navigation={
          showNavigationButtons
            ? {
                nextEl: ".sui-swiper-next-button",
                prevEl: ".sui-swiper-prev-button",
              }
            : false
        }
        loop={loop}
        height={height}
        speed={2000}
        autoplay={{ delay: 10000, disableOnInteraction: true }}
        breakpoints={breakpoints}
        grabCursor
      >
        {children}
      </Swiper>
      {showNavigationButtons && (
        <Box sx={{ marginTop: theme.spacing(3) }}>
          <SuiSwiperNavButton className="sui-swiper-prev-button">
            <ChevronLeft />
          </SuiSwiperNavButton>

          <SuiSwiperNavButton
            className="sui-swiper-next-button"
            sx={{ ml: "16px" }}
          >
            <ChevronRight />
          </SuiSwiperNavButton>
        </Box>
      )}
    </Box>
  );
};

export default AppSwiper;
