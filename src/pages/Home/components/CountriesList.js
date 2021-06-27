import React from "react";
import { Box, List } from "@material-ui/core";
import PropTypes from "prop-types";
import GetCountriesQuery from "../../../api/Queries/GetCountries";
import ListShimmers from "./ListShimmers";
import CountryListItem from "./CountryListItem";
import Alert from "../../../components/Alert";

const CountriesList = ({ classes, searchParam, selectOption }) => {
  return (
    <Box className={classes.countriesWrapper}>
      <GetCountriesQuery
        variables={{ param: searchParam }}
        loader={<ListShimmers />}
      >
        {({ getCountries }) => (
          <>
            {getCountries.length > 0 ? (
              <List>
                {getCountries.map((item) => (
                  <CountryListItem
                    item={item}
                    key={item.country}
                    selectOption={selectOption}
                  />
                ))}
              </List>
            ) : (
              <Alert severity="warning">
                Sorry we do not have any countries
              </Alert>
            )}
          </>
        )}
      </GetCountriesQuery>
    </Box>
  );
};

CountriesList.propTypes = {
  classes: PropTypes.object,
  searchParam: PropTypes.string,
  selectOption: PropTypes.func.isRequired,
};

export default React.memo(CountriesList);
