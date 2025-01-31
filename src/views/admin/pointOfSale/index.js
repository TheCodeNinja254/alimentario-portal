import React, { useState } from "react";
import { Box, Tab, Tabs, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/styles";
import ProductsSection from "../../home/components/ProductsSection";
import ProductCategorization from "../../home/components/ProductCategorization";
import HarvestProductCategorization from "../../../components/HarvestProductCategorization";
import EventsProductCategorization from "../../../components/EventsProductCategorization";
import PageTitle from "../../../components/PageTitle";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const productFamily = [
  { id: 1, name: "Toasted" },
  { id: 2, name: "Harvest" },
  { id: 2, name: "Ngong Racecource" },
];

const PointOfSale = () => {
  const theme = useTheme();
  const [selectedCat, setSelectedCat] = useState(0);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSelectedCat(0);
  };

  return (
    <Box>
      <PageTitle title="Point Of Sale" subTitle="View orders on this screen" />
      <Box sx={{ borderBottom: 1 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {productFamily.map((item) => (
            <Tab
              label={
                <Typography
                  style={{ color: theme.palette.primary.main, fontWeight: 700 }}
                >
                  {item.name}
                </Typography>
              }
              {...a11yProps(item.id)}
              key={item.id}
            />
          ))}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ProductCategorization
          selectedCat={selectedCat}
          setSelectedCat={setSelectedCat}
          shouldNavigate={false}
        />
        <ProductsSection
          sessionStatus
          category={selectedCat}
          productFamily="toasted"
          isPOS
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <HarvestProductCategorization
          selectedCat={selectedCat}
          setSelectedCat={setSelectedCat}
          shouldNavigate={false}
        />
        <ProductsSection
          sessionStatus
          category={selectedCat}
          productFamily="harvest"
          title="Desafio Harvest"
          isPOS
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <EventsProductCategorization
          selectedCat={selectedCat}
          setSelectedCat={setSelectedCat}
          shouldNavigate={false}
        />
        <ProductsSection
          sessionStatus
          category={selectedCat}
          title="Racecourse Special"
          productFamily="racecourse"
          isPOS
        />
      </CustomTabPanel>
    </Box>
  );
};

export default PointOfSale;
